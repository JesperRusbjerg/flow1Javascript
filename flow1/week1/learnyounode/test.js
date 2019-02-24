

function testFunc2() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var man = {
                name: 'Per',
                age: 22
            }
            resolve(man)
        }, 4000)
    }
    )
}

async function testFunc() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var man = {
                name: 'Per',
                age: 17
            }
            resolve(man)
        }, 100)
    }
    )
}
async function lala() {
    const data = await testFunc()
    console.log(data)
}

lala()




// async function secureRandoms(){
//     const item1 = await makeSecureRandom(22)
//     console.log(item1)
// }

// secureRandoms()




