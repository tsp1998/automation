const [_, __, ...args] = process.argv

for (let i = 0; i < args.length; i++) {
  console.log(args[i][0].toUpperCase() + args[i].slice(1))
}

export default 1