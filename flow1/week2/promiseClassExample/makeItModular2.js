var fs = require('fs');
var path = require('path');

const readDirFiltered = function(dir, ext, cb) {

    fs.readdir(dir, function (err, list) {
        if (err) {
            return cb(err)
        }
        var newList = list.filter((e) => {
            if (path.extname(e) === '.' + ext)
                return true
        })
        return cb(null, newList)
    })

}

const readDirFilterPromise = function(dir, ext){
    return new Promise((resolve, reject) => {

        fs.readdir(dir, function (err, list) {
            if (err) {
                reject(err)
            }
            var newList = list.filter((e) => {
                if (path.extname(e) === '.' + ext)
                    return true
            })
            resolve(newList)
        })

    })

}


module.exports = {readDirFilterPromise, readDirFiltered}