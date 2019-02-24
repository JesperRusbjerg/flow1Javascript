const files = process.argv[2]
const expected = "."+process.argv[3]
var fs = require('fs')
var path = require('path')



fs.readdir(files, function read(err, list) {
    if (err) {
        throw err
    }
    list.forEach(e => {
        if (path.extname(e) == expected) {
            console.log(e)
        }
    })
})



