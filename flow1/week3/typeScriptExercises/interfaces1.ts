import http from 'http'

interface iBook{
    title: string,
    readonly author: string,
    published?: Date,
    pages?: number
}


function testBook(b: iBook){
console.log(`Pages of book: ${b.pages}`)
}

const book: iBook = {
    title: 'Good Gook',
    author: 'Jesper',
    published: new Date(),
    pages: 400
}

testBook(book)


// Java way of implementing classes
class Person {
    constructor(public name: string){}
}

class Book{
    public _name: string
    constructor(name: string){
        this._name = name
    }
}


