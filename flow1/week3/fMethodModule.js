function f(x,y,...rest){
    console.log(x+y)
    var newArr = rest.map((e, i) =>{
        return `rest value ${i} is a ${typeof (e)}`
    })
   console.log(newArr)
  }

  module.exports = f