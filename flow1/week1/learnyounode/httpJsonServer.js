var port = process.argv[2]
var http = require('http')

var server = http.createServer(function(req, res){
    console.log((new Date).getTime())


    var checkIfParseTime = req.url.split('?')
    if(checkIfParseTime[0] === "/api/parsetime"){
        res.writeHead(200, { 'Content-Type': 'application/json' }) 

        var date = checkIfParseTime[1].split(':')

        var hour = date[0].split('T')[1]
        var hourFinal = Number(hour) + 1;
        // console.log(hourFinal)
        var minute = Number(date[1])
        // console.log(minute)
        var seconds = Number(date[2].substring(0,2))
        // console.log(seconds)    
        
        var json = {
            hour: hourFinal,
            minute: minute,
            second: seconds
        }
    
        res.end(JSON.stringify(json))
    }

    if(checkIfParseTime[0] === "/api/unixtime"){
        res.writeHead(200, { 'Content-Type': 'application/json' }) 
       
        var time = {
            unixtime: (new Date).getTime()
        }

        res.end(JSON.stringify(time))
    }




})
server.listen(port)
