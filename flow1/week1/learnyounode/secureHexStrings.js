const crypto = require('crypto')

module.exports = async function (cb) {

    return new Promise(function(resolve, reject){

    async function makeSecureRandom(size){
        return new Promise(function(resolve, reject){
            crypto.randomBytes(size, function(err, buffer){
                var hexString = buffer.toString('hex')
                resolve(hexString)
            })
        })
    }
    
    const promiseOne = makeSecureRandom(48)
    const promiseTwo = makeSecureRandom(40)
    const promiseThree = makeSecureRandom(32)
    const promiseFour = makeSecureRandom(24)
    const promiseFive = makeSecureRandom(16)
    const promiseSix = makeSecureRandom(8)   
    
    Promise.all([promiseOne, promiseTwo, promiseThree, promiseFour, promiseFive, promiseSix])
    .then((data) =>{
       resolve(data)
    })
})

}

