"use strict";
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
// f2(myFuncImpl)
//# sourceMappingURL=exercise2Interface.js.map