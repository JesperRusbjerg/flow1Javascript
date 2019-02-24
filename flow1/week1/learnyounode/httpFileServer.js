var port = process.argv[2]
var file = process.argv[3]
var fs = require('fs')
var http = require('http')

var server = http.createServer(function(req, res){

fs.readFile(file, (error, data)=>{
    if(error){
        res.end(error.toString())
    }else{
    res.end(data.toString())
    }
})

})
server.listen(port)
