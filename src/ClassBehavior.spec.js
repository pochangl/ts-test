"use strict";
var chai_1 = require("chai");
describe('ClassObject', function () {
    var A = (function () {
        function A() {
            this.value = 3;
        }
        return A;
    }());
    var B = (function () {
        function B() {
            this.attr = new A();
        }
        return B;
    }());
    it('should not share the same attribute', function () {
        var obj1 = new B();
        var obj2 = new B();
        obj2.attr.value = 4;
        chai_1.expect(obj1.attr.value).to.eql(3);
    });
});
