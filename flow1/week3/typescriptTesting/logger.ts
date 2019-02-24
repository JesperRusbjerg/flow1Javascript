function logger(a: number, b: string){
console.log(`${a} + ${b}`)
}

var a = 12, b = "Hello Class"

logger(a, b)


interface IPerson {name: string}
interface IAddress {street: string}





function loggerV3(p: IPerson, a: IAddress){
    console.log(`Person: ${p.name}, Addres:${a.street}`)
}

const person = {name: "Kurt Wonnegut"}
const address = {street: "LyngbyVej 17"}

loggerV3(person, address)

class Person implements IPerson{

    constructor(public name: string){}
}

class Address implements IAddress{
    street
    constructor(street: string){
        this.street = street
    }
}

loggerV3(new Person("Kurt"), new Address("Bla bla vej"))



// Generic types
function loggerV4<T,U>(p: T, a: U){
    console.log(`Person: ${JSON.stringify(p)}, Addres:${a}`)
}

loggerV4(person, address)


class GenericLogger<T, U>{
    log = (a: T, b: U) =>{console.log(`Val 1: ${a}, Val2: ${b}`)}
}

const personLogger = new GenericLogger<IPerson, IAddress>();
personLogger.log(person, address)