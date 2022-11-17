import fs from 'fs'
import copyFilesRecursively from './copyFilesRecursively'
import updatesFileContentsRecursively from './updatesFileContentsRecursively'
const srcPath = 'cubasrc'
const destPath = 'cubasrcts'

copyFilesRecursively(srcPath, destPath, {
  destFilePathFn: (destPath, srcFilePath) => {
    if (/\.jsx?$/.test(destPath)) {
      const fileContent = fs.readFileSync(srcFilePath, 'utf-8')
      let extension = '.ts'
      if (/(<\/)|(\/>)/.test(fileContent)) {
        extension = '.tsx'
      }
      return destPath.replace(/\.jsx?$/, extension)
    }
    return destPath
  }
})

// updatesFileContentsRecursively(destPath, fileContent => `// @ts-nocheck \n${fileContent}`)
updatesFileContentsRecursively(destPath, (fileContent, filePath) => {
  if (filePath!.indexOf('.ts') > -1) {
    return `// @ts-nocheck \n${fileContent}`
  } else {
    return ''
  }
})