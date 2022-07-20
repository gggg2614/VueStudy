function makeAdder(params) {
    return function (y) {
        return params + y
    }
}

var add5=makeAdder(5)
var add10=makeAdder(10)

console.log(add5(2));
console.log(add10(2));