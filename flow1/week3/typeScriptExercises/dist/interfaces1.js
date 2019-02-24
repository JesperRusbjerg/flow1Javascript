"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function testBook(b) {
    console.log("Pages of book: " + b.pages);
}
var book = {
    title: 'Good Gook',
    author: 'Jesper',
    published: new Date(),
    pages: 400
};
testBook(book);
// Java way of implementing classes
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Book = /** @class */ (function () {
    function Book(name) {
        this._name = name;
    }
    return Book;
}());
//# sourceMappingURL=interfaces1.js.map