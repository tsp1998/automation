import fs from 'fs'
import { join } from 'path'

export default function getNestedFolders(path: string, folders: Array<string> = []) {
  const files = fs.readdirSync(path);
  files.forEach(file => {
    const filePath = join(path, file);
    if (fs.lstatSync(filePath).isDirectory()) {
      folders.push(filePath);
      getNestedFolders(filePath, folders);
    }
  })
}