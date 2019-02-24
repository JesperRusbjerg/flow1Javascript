"use strict";
function printType(obj) {
    console.log("Type is " + typeof (obj));
}
printType("Hello");
function printTypes(obj1, obj2, obj3) {
    return [typeof (obj1), typeof (obj2), typeof (obj3)];
}
console.log(printTypes(1, "a", new Date()));
function reverseArr(t) {
    return t.reverse();
}
// console.log(reverseArr<string>(["a","b","c"]));
// console.log(reverseArr<number>([1,2,3]));
// console.log(reverseArr<boolean>([true,true,false]));
var DataHolder = /** @class */ (function () {
    function DataHolder(data) {
        this.data = data;
    }
    DataHolder.prototype.getValue = function () {
        return this.data;
    };
    DataHolder.prototype.setValue = function (data) {
        this.data = data;
    };
    return DataHolder;
}());
var owner = {
    owner: 'Per'
};
function printOwner(o) {
    console.log(o);
}
printOwner(owner);
//# sourceMappingURL=generics.js.map