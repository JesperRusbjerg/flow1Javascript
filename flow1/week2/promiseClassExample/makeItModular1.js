const files = process.argv[2]
const extension = process.argv[3]
var {readDirFilterPromise, readDirFiltered} = require("./makeItModular2")


function callback(err, list) {
    if (err) {
        throw err;
    }
    list.forEach(element => {
        console.log(element)
    });

}

// worker.readDirFilterPromise(files, extension).then((data) =>{
//     console.log(data)
// })

readDirFilterPromise(files, extension)
.then((data)=>{
    console.log(data.join("\n"))
    return readDirFilterPromise(files, "txt")
})
.then(d=>console.log(d.join("\n")))
.catch((e)=>{console.log("upps",e)})


// const withJs = readDirFilterPromise(files, extension)
// const withTxt = readDirFilterPromise(files, "txt")

// Promise.all([withJs, withTxt]).then((data) =>{
// console.log("all promises")
// console.log(data)
// })

// async function testAsync(){
//     try{
//     const withJs = readDirFilterPromise(files, extension)
//     const withTxt = readDirFilterPromise(files, "txt")
//     const dataArray = await Promise.all([withJs, withTxt])
//     console.log(dataArray)
//     }catch(e){
//         console.log(e)
//     }
// }






