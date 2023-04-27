import { execSync } from 'child_process'
const execSync_ = (commands: string | string[], log = true) => {
  const logFn = log ? console.log : () => undefined
  let $dataReturn: {
    $data?: Buffer,
    error?: $Error
  } = {}
  if (typeof commands === 'string') {
    commands = [commands]
  }
  for (let i = 0; i < commands.length; i++) {
    try {
      logFn(`executing command ${commands[i]}`)
      $dataReturn.$data = execSync(commands[i])
      logFn(`executed command ${commands[i]}`)
    } catch (error) {
      logFn(`error`, (error as Error).message)
      $dataReturn.error = { default: error } as $Error
    }
  }
  return $dataReturn
}

export default execSync_