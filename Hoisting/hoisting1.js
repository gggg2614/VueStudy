function hoistFunction() {
    foo();

    var foo = function () {
        console.log(1);
    };

    foo();
    function foo() {
        console.log(2);
    }

    foo();
}

hoistFunction();