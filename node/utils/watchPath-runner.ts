import fs, { WatchListener } from 'fs'
import path from 'path'
import watchPath from './watchPath'
import getNestedFolders from './getNestedFolders'

const rootPath = '/home/shubham/Documents'
const paths: { [key: string]: boolean } = {}

const createWatchFn = (filePath: string): WatchListener<string> => (event, filename) => {
  try {
    const updatedFilePath = path.join(filePath, filename)
    if (fs.lstatSync(updatedFilePath).isDirectory()) {
      if (!paths[updatedFilePath]) {
        watchPath(updatedFilePath, createWatchFn(updatedFilePath))
        paths[updatedFilePath] = true
      }
    } else {
      console.log(`updatedFilePath`, updatedFilePath)
    }
  } catch (error) {
    console.log(`error`, (error as Error).message)
  }
}

const folderPath = path.join(rootPath, 'sample')
if (watchPath(folderPath, createWatchFn(folderPath))) {
  console.log(`-------- watching ${folderPath} ---------`)
  paths[folderPath] = true;
  const subFolders: string[] = []
  getNestedFolders(folderPath, subFolders)
  subFolders.forEach(subFolder => {
    const subFolderPath = path.join(folderPath, subFolder)
    if (watchPath(subFolderPath, createWatchFn(subFolderPath))) {
      console.log(`-------- watching ${subFolderPath} ---------`)
      paths[subFolderPath] = true;
    }
  })
}