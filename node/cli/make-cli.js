const { execSync } = require('child_process')
const filePath = process.argv[2]

execSync(`tsc ${filePath} --outDir dist`)
const distFilePath = `./dist/${filePath.replace('ts', 'js')}`
execSync(`chmod +x ${distFilePath}`)

const fs = require('fs')
const content = fs.readFileSync(distFilePath, 'utf-8')
fs.writeFileSync(distFilePath, `#!/usr/bin/env node\n\n${content}`)

const parts = filePath.split('/')
let result = 'not found'
try {
  result = execSync(parts[parts.length - 1].replace('.ts', '')).toString()
} catch (error) {}
if (result.includes('found') && result.includes('no')) {
  console.log('linking')
  execSync('npm link')
}