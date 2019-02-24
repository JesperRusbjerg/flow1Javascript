const pathName = process.argv[2]
var fs = require('fs')

const file = fs.readFileSync(pathName).toString()
const fileArray = file.split('\n')
console.log(fileArray.length-1)

