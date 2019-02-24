var con = process.argv[2]
var net = require('net')

 
     var server = net.createServer(function (socket) {  
       // socket handling logic  
      

       var date = new Date();

        var year = date.getFullYear()  
        var month =  date.getMonth()+'1'     // starts at 0  
         var day = date.getDate()      // returns the day of month  
         var hour = date.getHours()  
        var minute = date.getMinutes()
        var date = year+"-"+month+"-"+day+" "+hour+":"+minute

       socket.end(date + "\n")
  
     })  
     server.listen(con) 


