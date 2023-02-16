const { readdirSync, stat, statSync, existsSync, mkdirSync, rename, renameSync } = require('fs')
const ffmpeg = require('fluent-ffmpeg');
const { join } = require('path');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
ffmpeg.setFfmpegPath(ffmpegPath);

let format = 'mp3'
const result = {}
const srcFolderPath = '/home/royaltsp/Videos/business motivation/to-audio'
const destFolderPath = '/home/royaltsp/Videos/business motivation/to-audio'
const fileName = ''

let files = []
if (fileName) {
  files.push(fileName)
} else {
  const _files = readdirSync(srcFolderPath)
  let addToResult = true
  for (let i = 0; i < _files.length; i++) {
    try {
      console.log(join(srcFolderPath, _files[i]))
      const stats = statSync(join(srcFolderPath, _files[i]))
      if (stats.isDirectory()) {
        continue
      }
      files.push(_files[i])
    } catch (error) {
      console.log(`error (stats: isDirectory)`, error)
      try {
        const cleanFileName = _files[i].replace(/[^a-zA-Z0-9 .]/g, '')
        console.log(`cleanFileName`, cleanFileName)
        renameSync(
          join(srcFolderPath, _files[i]),
          join(srcFolderPath, cleanFileName)
        )
        addToResult = false
        result[cleanFileName] = {
          success: false,
          moved: false
        }
        files.push(cleanFileName)
      } catch (error) {
        console.log(`error (rename)`, error)
      }
    }
    if (addToResult) {
      result[_files[i]] = {
        success: false,
        moved: false
      }
    }
  }
}

console.log(`Total Files: `, files.length)

let timer;
const convertedFilesFolderPath = join(srcFolderPath, 'converted')
if (!existsSync(convertedFilesFolderPath)) {
  mkdirSync(convertedFilesFolderPath, { recursive: true })
}

for (let i = 0; i < files.length; i++) {
  ffmpeg(join(srcFolderPath, files[i]))
    .toFormat(format)
    .saveToFile(join(destFolderPath, `${files[i].slice(0, files[i].lastIndexOf('.'))}.${format}`))
    .on('error', error => {
      result[files[i]].error = error
    })
    .on('progress', progress => {
      clearTimeout(timer)
      console.log(`${files[i]} progress: [targetSize=${progress.targetSize}], [timemark=${progress.timemark}]`)
      timer = setTimeout(() => {
        console.log(`result`, result)
      }, 1000)
    })
    .on('end', () => {
      result[files[i]].success = true
      rename(
        join(srcFolderPath, files[i]),
        join(convertedFilesFolderPath, files[i]),
        (error) => {
          if (!error) {
            return console.log(`Error while moving file ${files[i]} to converted folder: `, error)
          }
          result[files[i]].moved = true
        })
    })
}

