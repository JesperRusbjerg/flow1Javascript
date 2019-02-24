const URL = process.argv[2]
const http = require('http')



http.get(URL, (resp) => {
    resp.setEncoding('utf8')
  let data = []

  resp.on('data', (chunk) => {      
    data.push(chunk)
  });


  resp.on('end', () => {
    data.forEach(element => {
        console.log(element)
    });
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});