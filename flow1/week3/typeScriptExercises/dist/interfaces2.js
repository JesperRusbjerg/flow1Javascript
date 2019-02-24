"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mathias = function () {
    return 'lalala';
};
var myFuncImpl = function (s1, s2, s3) {
    return [s1, s2, s3];
};
var myFuncImplUpper = function (s1, s2, s3) {
    return [s1.toUpperCase(), s2.toUpperCase(), s3.toUpperCase()];
};
// console.log(myFuncImpl('Hej', 'Med', 'Dig'))
var f2 = function logger(f1) {
    //Simulate that we get data from somewhere and uses the provided function
    var _a = ["A", "B", "C"], a = _a[0], b = _a[1], c = _a[2];
    console.log(f1(a, b, c));
};
var person = {
    name: 'lars',
    age: 34,
    lars: function () { }
};
var node_fetch_1 = __importDefault(require("node-fetch"));
node_fetch_1.default('https://swapi.co/api/people/1');
//# sourceMappingURL=interfaces2.js.map