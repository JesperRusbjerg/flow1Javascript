const files = process.argv[2]
const extension = process.argv[3]
var worker = require("./makeItModular2")


function callback(err, list){
    if(err){
        throw err;
    }
 list.forEach(element => {
     console.log(element)
 });

}

worker(files, extension, callback)



