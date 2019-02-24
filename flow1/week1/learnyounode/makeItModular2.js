var fs = require('fs');
var path = require('path');

module.exports = function (dir, ext, cb) {

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

