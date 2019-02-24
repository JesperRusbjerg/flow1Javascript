function logger(a, b) {
    console.log(a + " + " + b);
}
var a = 12, b = "Hello Class";
logger(a, b);
function loggerV3(p, a) {
    console.log("Person: " + p.name + ", Addres:" + a.street);
}
var person = { name: "Kurt Wonnegut" };
var address = { street: "LyngbyVej 17" };
loggerV3(person, address);
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Address = /** @class */ (function () {
    function Address(street) {
        this.street = street;
    }
    return Address;
}());
loggerV3(new Person("Kurt"), new Address("Bla bla vej"));
// Generic types
function loggerV4(p, a) {
    console.log("Person: " + JSON.stringify(p) + ", Addres:" + a);
}
loggerV4(person, address);
var GenericLogger = /** @class */ (function () {
    function GenericLogger() {
        this.log = function (a, b) { console.log("Val 1: " + a + ", Val2: " + b); };
    }
    return GenericLogger;
}());
var personLogger = new GenericLogger();
personLogger.log(person, address);
//# sourceMappingURL=logger.js.map