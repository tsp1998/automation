const [_, __, ...args] = process.argv

for (let i = 0; i < args.length; i++) {
  console.log(args[i].toUpperCase())
}

export default 1