interface myFunc{
    (str1: string, str2: string, str3: string): string[]
}

interface laLa{
   (): string
}

const mathias :laLa = function(){
    return 'lalala'
}



const myFuncImpl: myFunc = function(s1, s2, s3){
    return [s1, s2, s3]
}

const myFuncImplUpper: myFunc = function(s1, s2, s3){
    return [s1.toUpperCase(), s2.toUpperCase(), s3.toUpperCase()]
}

// console.log(myFuncImpl('Hej', 'Med', 'Dig'))


let f2 = function logger(f1: myFunc){
    //Simulate that we get data from somewhere and uses the provided function
    let [ a, b, c] = ["A", "B", "C"];
    console.log(f1(a,b,c));
}
// f2(myFuncImpl)

interface Person{
    name: string,
    age: number
    lars(): void
}

const person: Person ={
    name: 'lars',
    age: 34,
    lars: function(){}
}


