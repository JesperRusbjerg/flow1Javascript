var port = process.argv[2]
var cs = require('concat-stream')
var http = require('http')

var server = http.createServer(function(req, res){
    req.setEncoding('utf8');

if(req.method !== "POST"){
    res.statusCode = 400
    res.end()
}

    req.pipe(cs(data => {
        res.end(data.toString().toUpperCase())
    }))


    // var data = ''
    // req.on('data', function(chunk){
    //     // console.log(chunk)
    //  data += chunk      
    // })

    // req.on('end', ()=>{
    //     res.end(data.toUpperCase())
    // })


})
server.listen(port)
