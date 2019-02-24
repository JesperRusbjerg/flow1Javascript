const URL = process.argv[2]
const http = require('http')

http.get(URL, (resp) => {
    resp.setEncoding('utf8')
  let data = ''

  resp.on('data', (chunk) => {       
    data += chunk 
  });

  resp.on('end', () => {
    var size = data.length
    console.log(size)
    console.log(data)
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});