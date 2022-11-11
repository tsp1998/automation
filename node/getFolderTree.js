const fs = require('fs')
const path = require('path')

const getFolderTree = (params, optionalParams = {}) => {
  const { folderPath = '' } = params;
  const { tree = {}, recursive = false } = optionalParams;
  if (!folderPath) { return }
  // console.log(`reading stats for: ${folderPath}`)
  const stats = fs.statSync(path.resolve(folderPath))
  tree[folderPath] = { meta: stats, children: [] }
  if (stats.isDirectory()) {
    const files = fs.readdirSync(folderPath)
    for (const file of files) {
      const children = getFolderTree(
        { folderPath: path.join(folderPath, file) },
        { ...optionalParams },
      )
      tree[folderPath].children.push(children)
    }
  }
  return tree
}

console.log(JSON.stringify(getFolderTree({ folderPath: process.argv[2] })))