import fs from 'fs'
import { join } from 'path'

export default function listFilesRecursively(
  path: string, type: 'all' | 'files' | 'folders' = 'all', operation: (path: string) => any = () => undefined
) {
  const files = fs.readdirSync(path);
  files.forEach(file => {
    const filePath = join(path, file);
    const isFolder = fs.lstatSync(filePath).isDirectory();
    if (type === 'all') {
      operation(filePath)
    } else {
      if (isFolder) {
        if (type === 'folders') {
          operation(filePath)
        }
      } else {
        if (type === 'files') {
          operation(filePath)
        }
      }
    }
    if (isFolder) {
      listFilesRecursively(filePath, type, operation);
    }
  })
}