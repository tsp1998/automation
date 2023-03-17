import { execSync } from 'child_process'
const execSync_ = (commands: string | string[], log = true) => {
  const logFn = log ? console.log : () => undefined
  let returnData: {
    $data?: Buffer,
    error?: $Error
  } = {}
  if (typeof commands === 'string') {
    commands = [commands]
  }
  for (let i = 0; i < commands.length; i++) {
    try {
      logFn(`executing command ${commands[i]}`)
      returnData.$data = execSync(commands[i])
      logFn(`executed command ${commands[i]}`)
    } catch (error) {
      logFn(`error`, (error as Error).message)
      returnData.error = { default: error } as $Error
    }
  }
  return returnData
}

export default execSync_