const URL = process.argv[2]
const URL2 = process.argv[3]
const URL3 = process.argv[4]

const http = require('http')

function httpGetter(URL) {
    return new Promise(function (resolve, reject) {
        http.get(URL, (resp) => {
            resp.setEncoding('utf8')
            let data = ''

            resp.on('data', (chunk) => {
                data += chunk
            });
            resp.on('end', () => {
                resolve(data)
            });
        }).on("error", (err) => {
           reject('ERROR')
        });
        
    })
}

//All requests get sent here
const p1 = httpGetter(URL)
const p2 = httpGetter(URL2)
const p3 = httpGetter(URL3)

//All promises saved in array, so they print out in order
Promise.all([p1,p2,p3]).then((data) =>{
    console.log(data[0])
    console.log(data[1])
    console.log(data[2])
    
})


// httpGetter(URL)
// .then(function(result){
//     console.log(result)
//     httpGetter(URL2).then(function(result){
//         console.log(result)
//         httpGetter(URL3).then(function(result){
//             console.log(result)
//         })
//     })
// }).catch((err) => {
//     console.log(err)
// })




