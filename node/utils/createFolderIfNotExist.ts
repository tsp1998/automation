import fs from 'fs'

export default function createFolderIfNotExist(path: string, options: fs.MakeDirectoryOptions = { recursive: true }) {
  try {
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path, options)
      return true;
    } else {
      throw new Error('Folder already exist')
    }
  } catch (error) {
    // console.log(`error:`, (error as Error).message)
  }
  return false;
}