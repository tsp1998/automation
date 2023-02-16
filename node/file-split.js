const splitFileStream = require("split-file-stream");
const fs = require('fs')
const path = require('path');
const { join } = require("path");

const splitFile = ({ data: { splitSize, filePath } } = {}) => {
  const [folderName, extention] = filePath.split('.')
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName, { recursive: true })
  }

  const slashIndex = folderName.lastIndexOf('/')
  const fileName = slashIndex > -1 ? folderName.slice(slashIndex) : folderName
  const outputPath = path.join(folderName, fileName)
  console.log(outputPath)
  const readStream = fs.createReadStream(filePath)

  const customSplit = splitFileStream.getSplitWithGenFilePath((n) => `${outputPath}-${(n + 1)}.${extention}`)

  customSplit(readStream, splitSize, (error, filePaths) => {
    /* If an error occured, filePaths will still contain all files that were written */
    if (error) throw error; // Alternatively you could just log the error instead of throwing: if (error) console.error(error)

    console.log("This is an array of my new files:", filePaths);
    /* stream will be saved to files in the path ∈ { ./outputFiles.split-x | x ∈ N } */
  });
}

const srcFolderPath = '/home/royaltsp/Videos/Integration Test'
const fileName = 'INTEGRATION TESTING CRASH COURSE IN 80 MINUTES WITH JEST AND SUPERTEST - Node JS (2022)(1080P_HD)_.mp4'
splitFile({
  data: {
    filePath: join(srcFolderPath, fileName), splitSize: 1024 * 1025 * 50
  }
})