let evens = [0, 2, 4, 6, 8, 10]
odds = evens.map(v => v + 1)
pairs = evens.map(v => ({ even: v, odd: v + 1 }))
nums = evens.map((v, i) => v + i)


//ES5
function Numbers(numbs) {
    this.nums = numbs;
    this.fives = [];

    this.nums.forEach(function (v) {
        if (v % 5 === 0) {
            this.fives.push(v);
        }
    }.bind(this));
}
var numbers = new Numbers([1, 3, 5, 10, 14, 20, 33, 50]);
  console.log(numbers.fives);


//ES6
function Numbers(numbs) {
    this.nums = numbs;
    this.fives = [];

    this.nums.forEach((v) => {
        if (v % 5 === 0) {
            this.fives.push(v);
        }
    });
}
var numbers = new Numbers([1, 3, 5, 10, 14, 20, 33, 50]);
  console.log(numbers.fives);


//Non arrow -
//   var counter = {
//     count: 0,
//     inc: function () {
//       this.count++;
//     }
//   }
// var func = counter.inc; //Store "reference" to inc
// func();
// console.log(counter.count); //Still zero
// counter.inc();
// console.log(counter.count); //Now one

//Arrow
this.count = 0
var counter = {
    inc: () => {
        this.count++;
    }
}

counter.inc();
// console.log(this.count); //Now one

//Function Object Constructor

function CreateCounter(number = 0) {
    this.count = number
    this.inc = () => {
        this.count++;
    }
}

let counterObj = new CreateCounter(2)
counterObj.inc()
// console.log(counterObj.count)

function f(x, y, ...rest) {
    console.log(x + y)
    var newArr = rest.map((e, i) => {
        return `rest value ${i} is a ${typeof (e)}`
    })
    console.log(newArr)
}
// f(5,2,true,2,"hello World",[1,2,3],new Date(),{});


var rest = [true, 2, "hello World", [1, 2, 3], new Date(), {}];
var restParams = [...rest];
//f(5,3,...restParams);

//Works only if you return from f, not when you console log f, expected output is all the results "spread -Adam L"
// var chars = [... f(5,2,...restParams)];


//Shorthand making object
let fName = "Kurt";
let lName = "Wonnegut";
let age = 98;

[fName, lName] = [lName, fName];
// console.log(`First: ${fName}, Last: ${lName}`);


function getPerson() {
    return {
        firstName: "Kurt",
        lastName: "Wonnegut",
        gender: "Male",
        email: "kurt@wonnegut.dk",
        phone: "12345",
    }
}

let { lastName, phone } = getPerson()
// console.log('Hey ' + lastName, phone)

const fmethod = require('./fMethodModule')

// fmethod(2, 45, 4, 3, true)


class Shape {
    constructor(color = 'yellow') {
        this._color = color;
    }
    getArea() {
        return undefined;
    }
    getPerimeter() {
        return undefined;
    }
    toString() {
        return `The color is : ${this._color}`
    }
    getColor() {
        return this._color
    }
    setColor(newcolor) {
        this._color = newcolor
    }

}

let color = new Shape('Blue')
console.log(color.getColor())
color.setColor('Red')
console.log(color.getColor())
console.log(color.toString())

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this._radius = radius;
    }

    toString() {
        return `The color of the circle is : ${this._color}`
    }
    getColor() {
        return this._color
    }
    setColor(newcolor) {
        this._color = newcolor
        console.log('we have changed the color to ' + newcolor)
    }
    getRadius() {
        return `Radius is ${this._radius}`
    }

}

let circle = new Circle('blue', 20)
// console.log(circle.toString())
// console.log(circle.getRadius())

class Cylinder extends Circle{
    constructor(height, color, radius){
        super(color, radius)
        this._height = height
    }

    toString() {
        return `The color of the Cylinder is : ${this._color}, height: ${this._height}, radius: ${this._radius}`
    }
    get height(){
        return this._height
    }

}

let cylinder = new Cylinder('pink', 20, 400)
console.log(cylinder.toString())
// console.log(cylinder.height)

this.ok = 'dada'

var mmhm = 'dax'

function checkThis(name){
    this.name = name
    console.log(this === global)
    console.log(this.name)
    console.log(this.ok)
    console.log(mmhm)
}

checkThis('ss')