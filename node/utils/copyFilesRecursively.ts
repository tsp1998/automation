import fs from 'fs'
import { join, extname } from 'path'
import createFolderIfNotExist from './createFolderIfNotExist';

type ExtensionType = `.${string}`;

interface Options {
  type?: 'files' | 'folders',
  fileExtensionsToInclude?: Array<ExtensionType>;
  fileExtensionsToExclude?: Array<ExtensionType>;
}

export default function copyFilesRecursively(
  srcPath: string,
  destPath: string,
  additionalData: {
    options?: Options,
    destFilePathFn?: ((destFilePath: string, srcFilePath: string) => string),
  } = {
      options: { type: 'files' },
      destFilePathFn: destFilePath => destFilePath,
    }
) {
  const { options = { type: 'files' }, destFilePathFn = destFilePath => destFilePath } = additionalData;
  const { fileExtensionsToInclude, fileExtensionsToExclude } = options!;
  const files = fs.readdirSync(srcPath);
  files.forEach(file => {
    const srcFilePath = join(srcPath, file);
    try {
      const destFilePath = destFilePathFn!(join(destPath, file), srcFilePath);
      const isFolder = fs.lstatSync(srcFilePath).isDirectory();
      if (isFolder) {
        if (options!.type === 'folders') {
          createFolderIfNotExist(destFilePath)
        }
      } else {
        const include = Array.isArray(fileExtensionsToInclude) ? fileExtensionsToInclude.indexOf(extname(srcFilePath) as ExtensionType) > -1 : true;
        const exclude = Array.isArray(fileExtensionsToExclude) ? fileExtensionsToExclude.indexOf(extname(srcFilePath) as ExtensionType) > -1 : false;
        if (options!.type === 'files' && include && !exclude) {
          const slashIndex = destFilePath.lastIndexOf('/')
          if (slashIndex > -1) {
            createFolderIfNotExist(destFilePath.slice(0, slashIndex))
          }
          // console.log(`Copying file ${srcFilePath}`);
          fs.copyFileSync(srcFilePath, destFilePath)
          // console.log(`Copied file ${srcFilePath}`);
        }
      }
      if (isFolder) {
        copyFilesRecursively(srcFilePath, destFilePath, additionalData);
      }
    } catch (error) {
      console.log(`error`, (error as Error).message, srcFilePath, error)
    }
  })
}