import fs from 'fs'
import listFilesRecursively from './listFilesRecursively'
const path = '/home/shubham/TSP/React/cuba-vite/src/assets'

const names: string[] = []
const files: string[] = []
let finalOutput = ''

listFilesRecursively(path, 'files', filePath => {
  const name = `asset_${filePath.split('assets')[1].replace(/\/|-|\./g, '')}`
  const file = `..${filePath.split('src')[1]}`
  names.push(name)
  files.push(file)
  finalOutput += `import ${name} from '${file}';\n`
})

finalOutput += `

function require(path: string) {
  return {
    ${names.reduce((acc, name) => `${acc}${name},\n`, '')}
  }
}
`

fs.writeFileSync('/home/shubham/TSP/React/cuba-vite/src/utils/assetUtils.ts', finalOutput, 'utf-8')