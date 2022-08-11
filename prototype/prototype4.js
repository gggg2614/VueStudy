function foo() {
    this.name1 = 123
    name1 = 321
    return name1
}

var a1 = new foo()
var a2 = new foo()
console.log(
    a1.__proto__ == a2.__proto__
);
