import { exec } from 'child_process'
import { appendFileSync, existsSync, unlinkSync } from "fs"
import { appendFile, readFile } from "fs/promises"
import { homedir } from 'os'
import { join } from 'path'
import { help, HelpDataValue } from "../utils/help"
const homeDir = homedir()

const main = async () => {
  const helpData: $struct.KeyValue<HelpDataValue> = {
    history: { info: 'past commands history' },
    historyRun: { info: 'run command from history' },
  }

  const { argsValues, helpOutput } = help(helpData)

  const { argv } = process

  if (argv.length === 2) {
    console.log(helpOutput)
    return
  }

  const tspFilePath = join(homeDir, '.tsp')
  // const tspFilePath = join('.tsp')
  const readFilePromise = readFile(tspFilePath, 'utf-8')
  let command = ''

  if (argsValues.history) {
    const content = await readFilePromise
    const lines = content.split('\n')
    for (let i = 0; i < lines.length; i++) {
      console.log(`${lines.length - 1 - i}. ${lines[i]}`)
    }
    return
  } 
  
  if ('historyRun' in argsValues) {
    const content = await readFilePromise
    const lines = content.split('\n')
    command = lines[lines.length - 1 - parseInt(argsValues.historyRun)]
  } else {
    command = argv.slice(2).join(' ')

    if (!existsSync(tspFilePath)) {
      appendFileSync(tspFilePath, '')
    }
    readFilePromise
      .then(content => {
        const lines = content.split('\n') || []
        if (lines.includes(command)) {
          return
        }
        if (lines.length >= 50) {
          unlinkSync(tspFilePath)
        }
        appendFile(tspFilePath, `${command}\n`)
      })
      .catch(error => console.log(`error`, error))
  }

  if (!command.trim()) {
    return
  }

  const cp = exec(command);

  const handleData = (chunk) => {
    console.log(chunk.toString());
  };

  const handleError = (error) => {
    console.error(`error: ${error.message}`);
  };

  cp.stdout.on('data', handleData);
  cp.stdout.on('error', handleError);
  cp.stderr.on('data', handleData);
  cp.stderr.on('error', handleError);
  cp.on('error', handleError);
  // const output = execSync(command)
  // console.log(`output`, output.toString())
}

main()