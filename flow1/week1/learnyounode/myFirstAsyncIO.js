const pathName = process.argv[2]
var fs = require('fs')

fs.readFile(pathName, 'utf8', function read(err, data) {
    if (err) {
        throw err
    }
    
const file = data.toString()
const fileArray = file.split('\n')
console.log(fileArray.length-1)
});




