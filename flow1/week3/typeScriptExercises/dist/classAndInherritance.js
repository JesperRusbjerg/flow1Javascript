"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape(_color) {
        this._color = _color;
    }
    Shape.prototype.getArea = function () {
        return undefined;
    };
    Shape.prototype.getPerimeter = function () {
        return undefined;
    };
    Shape.prototype.toString = function () {
        console.log("The color is " + this._color);
    };
    return Shape;
}());
var shape = new Shape('blue');
shape.toString();
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(_color, _radius) {
        var _this = _super.call(this, _color) || this;
        _this._radius = _radius;
        return _this;
    }
    Circle.prototype.getArea = function () {
        return undefined;
    };
    Circle.prototype.getPerimeter = function () {
        return undefined;
    };
    Circle.prototype.toString = function () {
        console.log("The color is " + this._color);
    };
    Object.defineProperty(Circle.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        set: function (radius) {
            this.radius = radius;
        },
        enumerable: true,
        configurable: true
    });
    return Circle;
}(Shape));
//# sourceMappingURL=classAndInherritance.js.map