const {myPromise} = require('./myPromise')

let results = []

myPromise('Hello', 200)
.then((data) =>{
results.push(data)
return myPromise('Hello2', 200)
})
.then((data) =>{
results.push(data)
})
.finally(() => {
    console.log(results)
})

async function lala(){
const promise1 = myPromise('Hello1', 1000)
const promise2 = myPromise('Hello2', 1000)
const promise3 = myPromise('Hello3', 1000)
const promise4 = myPromise('Hello4', 1000)
const promise5 = myPromise('Hello5', 1000)

let arrayInOrderExecutedSameTime = []

Promise.all([promise1, promise2, promise3, promise4, promise5])
.then(data => arrayInOrderExecutedSameTime = data.join("\n"))
.catch((err) => console.log(err))
.finally(() => {console.log(arrayInOrderExecutedSameTime )})
}
lala()