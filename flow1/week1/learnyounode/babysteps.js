 var arr = process.argv

 var newArr = []
 for (var i = 2; i < arr.length; i++) { 
    newArr.push(Number(arr[i]))
 }
 
  const sum =  newArr.reduce((a, e) =>{
       return a + e
   })

console.log(sum)

