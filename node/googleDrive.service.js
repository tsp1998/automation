const { google } = require('googleapis')
const fs = require('fs')
const path = require('path')
require('dotenv').config()
const { getExtensionOrMimeType } = require('./googleDrive.utils')

const {
    GOOGLE_DRIVE_CLIENT_ID,
    GOOGLE_DRIVE_CLIENT_SECRET,
    GOOGLE_DRIVE_REDIRECT_URI,
    GOOGLE_DRIVE_REFRESH_TOKEN,
    GOOGLE_DRIVE_FOLDER_ID
} = process.env

const oauth2Client = new google.auth.OAuth2(
    GOOGLE_DRIVE_CLIENT_ID, GOOGLE_DRIVE_CLIENT_SECRET, GOOGLE_DRIVE_REDIRECT_URI
);

oauth2Client.setCredentials({ refresh_token: GOOGLE_DRIVE_REFRESH_TOKEN });

const drive = google.drive({ version: 'v3', auth: oauth2Client });


const download = async (fileId, optionalParams = {}) => {
    if (!fileId) { return }
    const result = await drive.files.get({
        fileId,
        // mimeType: 'video/mp4',
        alt: 'media'
    }, { responseType: 'stream' })
    const { fileName = `${fileId}${getExtensionOrMimeType(result.headers['content-type'])}`, location = '' } = optionalParams
    fs.mkdirSync(location, { recursive: true })
    const filePath = `${location}/${fileName}`
    const fileStream = fs.createWriteStream(filePath)
    result.data.on('end', () => console.log(`saved ${filePath}`))
    result.data.on('error', (error) => console.log(`not saved ${filePath}`))
    result.data.pipe(fileStream)
}

const _getFiles = async (folderId) => {
    let files = []
    let result = await drive.files.list({
        q: folderId ? `'${folderId}' in parents and trashed=false` : `mimeType='application/vnd.google-apps.folder' and trashed=false`,
        fields: 'files(id,name,mimeType,size)',
    })
    if (result.statusText === 'OK') {
        files = result.data.files
    }
    return files
}

const traverseDirectoryAndList = async (params, optionalParams = {}) => {
    const { folderId } = params
    const {
        tree = {},
        folderPath = '',
        folderMeta,
        recursive = false,
        download: _download = false,
        dataFolderLocation = ''
    } = optionalParams
    if (!folderId) {
        return tree
    }
    tree[folderPath] = { meta: folderMeta || { folderId }, children: [] }
    if (
        _download &&
        folderMeta.mimeType !== 'application/vnd.google-apps.folder'
    ) {
        let size, needDownload = true;
        try {
            size = fs.lstatSync(folderPath).size
        } catch (error) { }
        if (size == folderMeta.size) { // double equal is added here cause api return string
            needDownload = false
        }
        if (needDownload) {
            download(folderId, {
                location: path.join(dataFolderLocation, (folderPath || '').replace(`/${folderMeta.name}`, '')),
                fileName: folderMeta.name
            })
        }
    }
    console.log(`traversing ${folderPath}`)
    const files = await _getFiles(folderId)
    for (const file of files) {
        const children = await traverseDirectoryAndList({ folderId: file.id }, {
            ...optionalParams,
            folderMeta: file,
            folderPath: `${folderPath}/${file.name}`,
            recursive
        })
        tree[folderPath].children.push(children)
    }
    return tree
}

const getFiles = async (params, optionalParams) => {
    const {
        folderPath = '',
        recursive = false,
        filesOnly,
        fullMeta = false,
        download = false,
        dataFolderLocation = ''
    } = optionalParams || {}
    if (!folderPath) {
        return
    }
    const folderNames = folderPath.split('/') || []
    let targetFolder = {}
    for (let i = 0; i < folderNames.length; i++) {
        console.log(`getting folder list for id: ${targetFolder.id}`)
        const files = await _getFiles(targetFolder.id)
        targetFolder = files.find(file => file.name === folderNames[i])
        if (!targetFolder) {
            targetFolder = {}
            break
        }
    }
    if (!targetFolder) {
        return
    }
    const tree = await traverseDirectoryAndList({ folderId: targetFolder.id }, {
        folderPath, folderMeta: targetFolder, recursive, download, fullMeta, dataFolderLocation
    })
    return tree
}

exports.uploadFile = async (fileData) => {
    await drive.files.create({
        requestBody: {
            name: fileData.filename,
            mimeType: fileData.mimetype,
            parents: [GOOGLE_DRIVE_FOLDER_ID]
        }
    })
    const response = await drive.files.create({
        requestBody: {
            name: fileData.filename,
            mimeType: fileData.mimetype,
            parents: [GOOGLE_DRIVE_FOLDER_ID]
        },
        media: {
            // mimeType: 'image/png',
            body: fs.createReadStream(fileData.path),
        },
    });
    return response
}

exports.deleteFile = async (fileId) => {
    const response = await drive.files.delete({ fileId });
    return response
}

/* 
    webViewLink: View the file in browser
    webContentLink: Direct download link 
*/
const generatePublicUrl = async (
    fileId,
    fields = 'webViewLink, webContentLink, id, mimeType, modifiedTime, name, size'
) => {
    await drive.permissions.create({
        fileId,
        requestBody: {
            role: 'reader',
            type: 'anyone',
        },
    });
    const result = await drive.files.get({ fileId, fields });
    return result
}
exports.generatePublicUrl = generatePublicUrl