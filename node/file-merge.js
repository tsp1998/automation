const splitFileStream = require("split-file-stream");
const fs = require('fs')
const path = require('path');
const { join } = require("path");

const mergeFile = ({ data: { folderPath } } = {}) => {
  let filePaths = fs.readdirSync(folderPath); // take this filePaths array from the output of the split 
  filePaths = filePaths.map(file => path.join(folderPath, file))
  const extention = filePaths[0].split('.')[1]

  const slashIndex = folderPath.lastIndexOf('/')
  const fileName = slashIndex > -1 ? folderPath.slice(slashIndex) : folderPath
  const outputPath = path.join(folderPath, '..', `${fileName}.${extention}`)

  splitFileStream.mergeFilesToStream(filePaths, (outStream) => {
      const writeStream = fs.createWriteStream(outputPath)
      outStream.pipe(writeStream)

      outStream.on("data", (chunk) => {
          console.log(`Received chunk of ${chunk.length} bytes`);
      });

      outStream.on("end", () => {
          console.log("Out stream closed. All files have been merged")
      });
  });
}

const srcFolderPath = '/home/royaltsp/Videos/Integration Test/INTEGRATION TESTING CRASH COURSE IN 80 MINUTES WITH JEST AND SUPERTEST - Node JS (2022)(1080P_HD)_'
mergeFile({
  data: {
    folderPath: srcFolderPath
  }
})