
const crypto = require('crypto')

function create(cb) {
    var strings = {
        title: 'callbacks',
        randoms: []
    }
    crypto.randomBytes(48, function (err, buffer) {
        strings['randoms'].push(buffer.toString('hex'));
        crypto.randomBytes(40, function (err, buffer) {
            strings['randoms'].push(buffer.toString('hex'));
            crypto.randomBytes(32, function (err, buffer) {
                strings['randoms'].push(buffer.toString('hex'));
                cb(strings)
            })
        })
    });
}


var hexStrings = require('./secureHexStrings')

async function hexStringsFromModule(){
    const data = await hexStrings() 
    
   return data
}

var http = require('http')

var server = http.createServer(async function(req, res){

    if(req.url === '/api/securerandoms'){

    res.writeHead(200, {'Content-Type' : 'application/json'})

    var hexStrings = {
       item: await hexStringsFromModule()
    }
    res.end(JSON.stringify(hexStrings))
    }

})
server.listen(8000)