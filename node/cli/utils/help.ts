import getInitials from "./get-initials"

export type HelpDataValue = {
  required?: boolean,
  info: string
}

const argsMap: $struct.KeyValue<string> = {}
type ArgsValues = $struct.KeyValue<string>

export const processArgs = (helpData: $struct.KeyValue<HelpDataValue>): ArgsValues => {
  for (const key in helpData) {
    argsMap[`-${key}`] = key
    argsMap[`-${getInitials(key)}`] = key
  }
  // console.log(`argsMap`, argsMap)
  const argsValues: ArgsValues = {}
  const { argv } = process
  for (let i = 2; i < argv.length; i++) {
    const arg = argv[i];
    if (argsMap[arg]) {
      i++
      argsValues[argsMap[arg]] = argv[i]
    }
  }
  return argsValues
}

type HelpFnReturn = {
  argsValues: ArgsValues | null,
  helpOutput: string
}

export const help = (helpData: $struct.KeyValue<HelpDataValue>): HelpFnReturn => {
  let $dataReturn: HelpFnReturn = {
    argsValues: null,
    helpOutput: ''
  };

  $dataReturn.helpOutput += 'help--\n'
  for (const key in helpData) {
    let output = key
    let metaFieldsString = ''
    if (helpData[key].required) {
      metaFieldsString += 'required, '
    }
    if (metaFieldsString) {
      output += `[${metaFieldsString}]`
    }
    output += `\t=>\t${helpData[key].info}`
    $dataReturn.helpOutput += output + '\n'
  }

  try {
    const argsValues = processArgs(helpData)
    const requiredFields = []

    for (const key in helpData) {
      if (helpData[key].required && !argsValues[key]) {
        requiredFields.push(key)
      }
    }

    if (requiredFields.length) {
      throw { default: { message: `Values missing for ${requiredFields.join(', ')}` } } as $Error
    }

    $dataReturn.argsValues = argsValues
  } catch (error) {
    console.log($dataReturn.helpOutput)
    console.log(`error`, error.message)
  }

  return $dataReturn
}