import { writeFileSync } from "fs";
import { readdir } from "fs/promises";
import { join } from "path";
import * as TJS from "typescript-json-schema";
import { help, HelpDataValue } from "../utils/help";

const main = async () => {
  const helpData: $struct.KeyValue<HelpDataValue> = {
    srcFolderPath: { info: 'source folder path' },
    destFolderPath: { info: 'destination folder path' },
    fileNames: { info: 'file names comma separated' },
  }

  const { argsValues, helpOutput } = help(helpData)

  // optionally pass argument to schema generator
  const settings: TJS.PartialArgs = {
    required: true,
  };

  // optionally pass ts compiler options
  const compilerOptions: TJS.CompilerOptions = {
    strictNullChecks: true,
  };

  // optionally pass a base path
  // const basePath = "./my-dir";

  let srcFolderPath = '/home/royaltsp/tsp/royaltsp/royaltsp-ts/src/@types/schemas'
  let destFolderPath = '/home/royaltsp/tsp/royaltsp/royaltsp-ts/.vscode/schemas'

  if (argsValues.srcFolderPath) {
    srcFolderPath = argsValues.srcFolderPath
    destFolderPath = argsValues.destFolderPath || srcFolderPath
  }


  let fileNames = []

  if (argsValues.fileNames) {
    fileNames = argsValues.fileNames.split(',')
  } else {
    fileNames = await readdir(srcFolderPath)
  }

  for (let i = 0; i < fileNames.length; i++) {
    try {
      let typeName = fileNames[i].replace('.d.ts', '')
      const outPutFilePath = join(destFolderPath, `${typeName}.json`)
      const filePath = join(srcFolderPath, fileNames[i])
      typeName = `global.$schema.${typeName}`

      const program = TJS.getProgramFromFiles(
        [filePath],
        compilerOptions,
        // basePath
      );

      // We can either get the schema for one file and one type...
      const schema = TJS.generateSchema(program, typeName, settings);
      writeFileSync(outPutFilePath, JSON.stringify(schema, null, 2), 'utf-8')
      // // ... or a generator that lets us incrementally get more schemas

      // const generator = TJS.buildGenerator(program, settings)!;

      // // generator can be also reused to speed up generating the schema if usecase allows:
      // const schemaWithReusedGenerator = TJS.generateSchema(program, "ServerInfo", settings, [], generator);

      // // all symbols
      // const symbols = generator.getUserSymbols();

      // // Get symbols for different types from generator.
      // generator.getSchemaForSymbol("ServerInfo");
      // // generator.getSchemaForSymbol("AnotherType");
    } catch (error) {
      console.log(`error`, error)
    }
  }
}

main()