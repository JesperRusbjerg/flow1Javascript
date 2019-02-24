# flow1Javascript
Flow1 Eksamens Prep Aflevering

Period-1 Vanilla JavaScript, es2015/15.., Node.js, Babel + Webpack and TypeScript

Note: This description is too big for a single exam-question. It will be divided up into several questions for the exam
Explain and Reflect:
•	Explain the differences between Java and JavaScript. You should include both topics related to the fact that Java is a compiled language and JavaScript a scripted language, and general differences in language features.

Java: Strict language, once you assign a variable to int it cant become a String, compiles into machine code in order to become an executable program. Java has a bunch of checked exceptions which makes it easier to catch errors before compile time.
Javascript: Dynamic variable X can first be an int, then a string, then a boolean, intepreted at runtime therefor no checked exceptions and bigger chance for runtime errors, you can feed javascript to a browser, the browser then intepretates the javascript and runs the code line by line

Both java and javascript runs on a singular thread as a standard. However Java can run multiple threads at once, where as Javascript only has one thread it can run. Javascript solves this problem via. Async API’s and its built in event loop. Will be explained later on

•	Explain the two strategies for improving JavaScript: ES6 (es2015) + ES7, versus Typescript. What does it require to use these technologies: In our backend with Node and in (many different) Browsers
JavaScript: ES6 (es2015) + ES7
Are newer implementations of Javascript, smarter implementations are available in these versions, for example: async/await, however in most cases(if not all)? It is complex syntax operations made simpler syntax wise. 

Browsers cant understand es6/es7, so before we run our javascript code we must transpile it back to ES5, which all newer browsers understand. So in reality, the new Javascript operations are pure syntax sugar, as they get transpiled back to their original shape, however it is still highly beneficial as it is much easier to write Javascript in its newer versions.

Most popular transpile tools: babel/typescript

Typescript
Is much like what just explained above, however the purpose of typescript, is to give Javascript the feeling you have when writing in a Strict language such as C# or Java. When writing in typescript you are meant to declare your variables such as, let test: string = “hello world”. If you then try to make it into an int afterwards you will get a typescript “error”. The purpose of typescript is also to stop you having many runtime bugs in Javascript, it checks your input types and thereby limits ur errors. Simply said, it allows you to have more control over your code. Before run time Typescript exactly like ES6/ES7 needs to be transpiled back to ES5, or another version of ES as a browser CANNOT understand TypeScript.


•	Explain generally about node.js, when it “makes sense” and npm, and how it “fits” into the node echo system.
Node is a server-side platform built on the V8(Google chrome javascript) engine. The official definition of Node.js is “a platform built on Chromes javascript runtime for easily building fast and scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices

What are the features of Node.js?
•	Asynchronous and Event Driven − The APIs of the platform’s library are asynchronous meaning a Node.js based server never waits for an API to return data.
•	Fast – Built on Google Chrome's V8 JavaScript Engine, the Node.js library is extremely fast in code execution.
•	Single Threaded but Highly Scalable – The platform uses a single threaded program and this program can provide service to a much larger number of requests than traditional servers.
•	No Buffering − Node.js applications never buffer any data but output data in chunks.
Node vs Java - similarities
•	Runs on a Virtual Machine
•	Runs on multiple platforms
•	You must include packages before you can use them
•	You must obtain packages not included in the base installation before you can use them
NPM
Npm is the package manager used for Javascript, its run from the command line and can fetch packages that contains modules which you then can use in your Node/frontend project



•	Explain about the Event Loop in Node.js
Javascript runs on a singular thread, and this would be a problem if it did not have an event loop. Javascript will always execute the code its running, it will never stop and wait for an async function to finish, it will just keep interpreting.

To explain by example: App receives HTTP request(A async function), if we were to wait for this response to come back, our code would block. So what happens instead is that you call the method with a callback, and let an API handle the process time. So in this case, the built in node-“http handler api” would get called, and when it is done, it would put the callback in the eventloops “callback que” and when the JS thread isn’t executing any code, it will start to pick out things (in order) from the callback que. Simply said, you use APIs to make your application non blocking, as the APIs simply return with a callback whenever the task is complete. 


•	Explain (some) of the purposes with the tools Babel and WebPack, using  examples from the exercises

Babel
Babel is a transpiler, if I write code in ES2017, but my browser understands ES5, it needs to be transpiled back to the older version of JS. This is what babel can do for you.
Example missing

Webpack
Webpack is a bundler, it is used to bundle all your modules together, and make it as optimized and clean as possible. You give the bundler an entry point, and it will then look through all your files etc. making a bundle of all your scripts and other files.  

•	Explain the purpose of “use strict” and Linters, exemplified with ESLint 
Strict is a lesser version of TypeScript, it makes you assign variables before using them, so for example you cant write “y=3.14”
You would have to write "use strict"
var y;
y = 5

Explain using sufficient code examples the following features in JavaScript. 
•	Variable/function-Hoisting
•	console.log(test)
•	var test = 'Kurt'
•	console.log(test)

Very simple example, its in the global scope, it will first log “undefined” then it will log “Kurt”, this happens because all var declarations hoist to the top of their scope, so in this instance test is first undefined, but it does exist, then it becomes kurt
•	this in JavaScript and how it differs from what we know from Java/.net.
In java “this” refers to a given instance of an object

In javascript the this pointer depends on how a function is called

If you do var person = makePerson() you can run into this problems, because the this changes to the global scope

where as if you call makePerson() the this pointer stays “within” its function, in other words, the this pointer refers to the current instance object on which the method is executed.



•	Function Closures and the JavaScript Module Pattern

in this example name, age is within a closure, it cannot be accessed in any way other than the method calls, implementing both closure and the module pattern

•	Immediately-Invoked Function Expressions (IIFE)
When you make a function that calls itself, so when the code executes it instantly invokes the function. Basicly just a function that calls it self, you add (); in the end of the func, to get this feature
•	JavaScripts Prototype
Prototyping is binding certain functionality to an object
For example adding functionality to the Array object that’s built in, you can also make a customized object and bind prototypes to it, such as a person.. Example of binding function to Array objects: 
Array.prototype.myFilter = function(callback){
    var filtered = []
    this.forEach(element => {
        if (callback(element)) {
            filtered.push(element)
        }
    });
    return filtered;
}

•	User-defined Callback Functions (writing your own functions that take a callback)
•	function cb(a, b){
•	    return a+b
•	}
•	function adding(a, b, cb){
•	    return(cb(a, b))
•	}
•	
•	console.log(adding(1, 2, cb))
Creates a callback, and a function that takes a callback, it simply adds 2 numbers together
Customized callsbacks are especially powerful when executing promises, as your event loop will handle the async stuff, and the cb will execute when the JS-thread executes events from its event loop

•	Explain the methods map, filter and reduce
Map = loop through array and do something to each element, and return new array
Filter = filter an array, only returning items to a new array, based on a true/false condition
Reduce = create an accumulator, such as a number and if you have a number array loop through the whole array adding to the accumulator. In other words, reducing an entire array to a single value
•	Provide examples of user-defined reusable modules implemented in Node.js

This module reads a directory ASYNC(using the built in API from node, to read file systems) and calls the callback once the fs.readdir is done, with either the results or an error. The callback will be executed when its at the top of the eventloop que
•	Provide examples and explain the es2015 features: let, arrow functions, this, rest parameters, de-structuring assignments, maps/sets etc.

Let does not hoist, like the var does
() => is nice to write functions that are not meant to be reused, but I think the major point to be made is, is that the () => does NOT get its own this, it takes the this on the outside of the () =>, so you can make array functions within you function constructors, and then you do not have to pass the outer functions “this “ into it. In my closure example you see this come into effect too.

Have already explained and provided examples for this previously

Rest parameters is parsing multiple arguments into a function like makePerson(…kidsNames)
Then you can pass as many names in, and it will be accessable as an array within the function

De-structuring is the “opposite” of rest params, it’s a way of getting “the rest” of an element and saving it within an array
[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: [30,40,50]

Map is commonly known as a dictionary, it’s a object that holds key value pairs, the keys must be unique
A set is the same as a map, but the VALUES HAS to be unique, where as in a map, you can have multiple keys with the same values.

•	Explain and demonstrate how es2015 supports modules (import and export) similar to what is offered by NodeJS.

//  lib/math.js
export function sum (x, y) { return x + y }
export var pi = 3.141593

//  someApp.js
import * as math from "lib/math"
console.log("2π = " + math.sum(math.pi, math.pi))

//  otherApp.js
import { sum, pi } from "lib/math"
console.log("2π = " + sum(pi, pi))



•	Provide an example of ES6 inheritance and reflect over the differences between Inheritance in Java and in ES6.
•	class Shape {
•	    color;
•	    constructor(color) {
•	        this.color = color
•	    }
•	}
•	
•	class square extends Shape {
•	    length;
•	    constructor(color, length) {
•	        super(color)
•	        this.length = length
•	    }
•	}

there is no such thing as “class” in Javascript, its pure syntax sugar.. 

When you transpile it to ES5 it would look like this instead
function Vehicle (name, type) {   this.name = name;   this.type = type; };   Vehicle.prototype.getName = function getName () {   return this.name; };   Vehicle.prototype.getType = function getType () {   return this.type; };
var car = new Vehicle('Tesla', 'car'); console.log(car.getName()); // Tesla console.log(car.getType()); // car


•	Provide examples with es-next, running in a browser, using Babel and Webpack
Examples can be found here
https://github.com/JesperRusbjerg/flow1Javascript/tree/master/webpackExercise

•	Provide a number of examples to demonstrate the benefits of using TypeScript, including, types, interfaces, classes and generics
Examples can be found here
https://github.com/JesperRusbjerg/flow1Javascript/tree/master/flow1/week3/typeScriptExercises

•	Explain the ECMAScript Proposal Process for how new features are added to the language (the TC39 Process)
Each proposal proposal must go through 5 stages, stage 0 it is not very likely it will make it, when it reaches stage 3-4 it is almost certain it will make it into the next version of ECMA
Callbacks, Promises and async/await

Explain about promises in ES-6 including, the problems they solve, a quick explanation of the Promise API 
The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value. A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action’s eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future. A Promise is in one of these states:
•	pending: initial state, neither fulfilled nor rejected.
•	fulfilled: meaning that the operation completed successfully.
•	rejected: meaning that the operation failed.
A pending promise can either be fulfilled with a value, or rejected with a reason (error). When either of these options happens, the associated handlers queued up by a promise’s then method are called. If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached.
As the Promise.prototype.then() and Promise.prototype.catch() methods return promises, they can be chained.

and:
•	Example(s) that demonstrate how to avoid the callback hell  (“Pyramid of Doom")
•	Pyramid of Doom
•	doSomething(function(responseOne) {
•	    doSomethingElse(responseOne, function(responseTwo, err) {
•	        if (err) { handleError(err); }
•	        doMoreStuff(responseTwo, function(responseThree, err) {
•	            if (err) { handleAnotherError(err); }
•	            doFinalThing(responseThree, function(err) {
•	                if (err) { handleAnotherError(err); }
•	                // Complete
•	            }); // end doFinalThing
•	        }); // end doMoreStuff
•	    }); // end doSomethingElse
•	}); // end doSomething
•	Solution
•	doSomething()
•	.then(doSomethingElse)
•	.catch(handleError)
•	.then(doMoreStuff)
•	.then(doFinalThing)
•	.catch(handleAnotherError)

•	Example(s) that demonstrate how to execute asynchronous (promise-based) code in serial or parallel

var arrayOfPromises = [] // array containing promises

Promise.all(arrayOfPromises)
.then(function(arrayOfResults) {
    /* Do something when all Promises are resolved */
})
.catch(function(err) {
    /* Handle error is any of Promises fails */
})

•	Example(s) that demonstrate how to implement our own promise-solutions.
•	function get(url) {
•	  return new Promise(function(resolve, reject) {
•	    var req = new XMLHttpRequest();
•	    req.open('GET', url);
•	    req.onload = function() {
•	      if (req.status == 200) { 
•	          resolve(req.response); /* PROMISE RESOLVED */
•	      } else { 
•	          reject(Error(req.statusText)); /* PROMISE REJECTED */
•	      }
•	    };
•	    req.onerror = function() { reject(Error("Network Error")); };
•	    req.send();
•	  });
•	}

•	Example(s) that demonstrate error handling with promises
•	get(url)
•	.then(function(response) {
•	    /* successFunction */
•	}, undefined)
•	.then(undefined, function(err) {
•	    /* errorFunction */
•	})
•	To make things even more readable, we make use of the .catch() method, which is a shorthand for a .then(undefined, errorFunction).
•	get(url)
•	.then(function(response) {
•	    /* successFunction */
•	})
•	.catch(function(err) {
•	    /* errorFunction */
•	})


Explain about JavaScripts async/await, how it relates to promises and reasons to use it compared to the plain promise API.

How it relates to promises and reasons to use it compared to the plain promise API.
Async Await is syntactic sugar that changes the .then notation to more readable syntax. Instead of making a . connection between the promises the keyword awaitcan be used instead.
Provide examples to demonstrate:
Why this often is the preferred way of handling promises
function async myFunc() {
    const res = await fetch(...)
    const json = res.json()
    // ...
}
Error handling with async/await
function async myFunc() {
    try {
        const res = await fetch(...)
        const json = res.json()
        // ...
    } catch (err) {
        new Error(err)
    } 
}
Serial or parallel execution with async/await.
Async/await makes asynchronous code look and behave like synchronous code
async function SerialFlow(){
    let result1 = await doJob(1,1);
    let result2 = await doJob(2,2);
    let result3 = await doJob(3,3);
    let finalResult = result1+result2+result3;
    console.log(finalResult);
    return finalResult; 
}





