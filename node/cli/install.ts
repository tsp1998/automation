import { existsSync } from 'fs'
import { copyFile, readFile, unlink, writeFile } from 'fs/promises'
import { homedir } from 'os'
import { join } from 'path'
import execSync from './utils/exec-sync'
import { help, HelpDataValue } from './utils/help'
const homeDir = homedir()

const visitedPaths: $struct.KeyValue<boolean> = {}

const install: $Fn<{
  async: true,
  $data: { folderPath: string },
  $dataOptional: {
    oneByOne: boolean,
    dependeciesNamesString: string,
    packageManager: string
  },
  returnData: boolean
}> = async ({ $data, $dataOptional }) => {
  const returnData: Awaited<ReturnType<typeof install>> = { $data: false }
  try {
    if (visitedPaths[$data.folderPath]) {
      throw { default: { code: 'FOLDER_VISITED', message: 'already visited this folder' } } as $Error
    }
    const packageJsonFilePath = join($data.folderPath, 'package.json')
    const packageJsonCopyFilePath = join($data.folderPath, 'package-copy.json')
    const packageJsonFailedDepsFilePath = join($data.folderPath, 'package-failed.json')
    let content = '';
    if (existsSync(packageJsonCopyFilePath)) {
      content = await readFile(packageJsonCopyFilePath, 'utf-8')
    } else {
      await copyFile(packageJsonFilePath, packageJsonCopyFilePath)
      content = await readFile(packageJsonFilePath, 'utf-8')
    }

    const packageJson = JSON.parse(content) as $json.package
    visitedPaths[$data.folderPath] = true

    let dependencies: $struct.KeyValue<string> = {}
    let devDependencies: $struct.KeyValue<string> = {}
    const { dependeciesNamesString, packageManager = 'yarn' } = $dataOptional
    if (dependeciesNamesString) {
      const dependeciesNames = dependeciesNamesString.split(',')
      for (let i = 0; i < dependeciesNames.length; i++) {
        if (packageJson.dependencies[dependeciesNames[i]]) {
          dependencies[dependeciesNames[i]] = packageJson.dependencies[dependeciesNames[i]]
          delete packageJson.dependencies[dependeciesNames[i]]
        } else if (packageJson.devDependencies[dependeciesNames[i]]) {
          devDependencies[dependeciesNames[i]] = packageJson.devDependencies[dependeciesNames[i]]
          delete packageJson.devDependencies[dependeciesNames[i]]
        }
      }
    } else {
      dependencies = packageJson.dependencies
      devDependencies = packageJson.devDependencies
      packageJson.dependencies = {}
      packageJson.devDependencies = {}
    }

    const dependenciesMap = { dependencies, devDependencies }

    for (const dependencyKey in dependenciesMap) {
      for (const key in dependenciesMap[dependencyKey]) {
        const exists = existsSync(join($data.folderPath, 'node_modules', key))
        if (exists) {
          packageJson[dependencyKey][key] = dependenciesMap[dependencyKey][key]
          delete dependenciesMap[dependencyKey][key]
        }
      }
    }

    await writeFile(packageJsonFilePath, JSON.stringify(packageJson, null, '\t'), 'utf-8')
    console.log('clearing cache')
    execSync(`cd ${$data.folderPath} && rm -rf node_modules/.pnpm`, false);
    execSync(`cd ${$data.folderPath} && rm -rf node_modules/.bin`, false);
    execSync(`cd ${$data.folderPath} && ${packageManager} install`, false);

    for (const dependencyKey in dependenciesMap) {
      for (const key in dependenciesMap[dependencyKey]) {
        const dependecyValue = dependenciesMap[dependencyKey][key] as string

        if (dependecyValue.includes('file:') && !dependecyValue.includes('node_modules')) {
          console.log(`installing nested dependecies for ${key}`)
          const { $data, error } = await install({
            $data: { folderPath: dependecyValue.replace('file:', '').replace('~', homeDir) },
            $dataOptional: { packageManager }
          })
          console.log($data, error)
        }

        console.log(`installing ${key}`)

        packageJson[dependencyKey][key] = dependecyValue

        await writeFile(packageJsonFilePath, JSON.stringify(packageJson, null, '\t'), 'utf-8')

        const { error } = execSync(`cd ${$data.folderPath} && ${packageManager} install`, false)

        if (error) {
          console.log(`error`, error?.default?.code, error?.default?.message)
          delete packageJson[dependencyKey][key]
        } else {
          delete dependenciesMap[dependencyKey][key]
        }
      }
    }

    let writeFailedDepsFile = false
    for (const key in dependenciesMap) {
      if (Object.keys(dependenciesMap[key]).length) {
        writeFailedDepsFile = true
        break
      }
    }

    if (writeFailedDepsFile) {
      await writeFile(packageJsonFailedDepsFilePath, JSON.stringify(dependenciesMap, null, '\t'), 'utf-8')
    } else {
      if (existsSync(packageJsonFailedDepsFilePath)) {
        await unlink(packageJsonFailedDepsFilePath)
      }
    }

    await copyFile(packageJsonCopyFilePath, packageJsonFilePath)
    await unlink(packageJsonCopyFilePath)
    console.log('final install to make sure if something is remaining')
    execSync(`cd ${$data.folderPath} && ${packageManager} install`, false);

    returnData.$data = true
  } catch (error) {
    returnData.error = error
  }
  return returnData
}

const main = async () => {
  const helpData: $struct.KeyValue<HelpDataValue> = {
    packageManager: { info: 'node package manager. e.g. npm, pnpm, yarn, etc.' },
    path: { info: 'folder path where project package.json is located', required: true },
    dependeciesNames: { info: 'dependecies names comma separated' },
  }

  const argsValues = help(helpData)

  if (argsValues) {
    const { $data, error } = await install({
      $data: { folderPath: argsValues.path },
      $dataOptional: {
        dependeciesNamesString: argsValues.dependeciesNames,
        packageManager: argsValues.packageManager
      }
    })
    console.log($data, error)
  }
}

main()