var foo = 3;

function hoistFunction() {
    console.log(foo); // function foo() {}

    foo = 5;

    console.log(foo); // 5

    function foo() { }
}

hoistFunction();
console.log(foo);   // 3


var x = 1;                 // 声明 + 初始化 x
y = 2
console.log(x + " " + y);  // '1 undefined'
var y