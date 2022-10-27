const { google } = require('googleapis')
const fs = require('fs')
require('dotenv').config()

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
exports.generatePublicUrl = async (
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