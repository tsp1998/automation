import fs from 'fs'
import { join } from 'path'

export default function updatesFileContentsRecursively(
  path: string,
  fileContentFn: (fileContent: string, filePath?: string) => string = fileContent => ''
) {
  const files = fs.readdirSync(path);
  files.forEach(file => {
    const filePath = join(path, file);
    const isFolder = fs.lstatSync(filePath).isDirectory();
    if (!isFolder) {
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      const newFileContent = fileContentFn(fileContent, filePath)
      if (newFileContent) {
        fs.writeFileSync(filePath, newFileContent, 'utf-8')
        console.log(`Done ${filePath}`)
      }
    }
    if (isFolder) {
      updatesFileContentsRecursively(filePath, fileContentFn);
    }
  })
}