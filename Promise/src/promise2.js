console.log('222222222222222222222222222222222222222');

Promise.resolve("foo")
    // 1. 接收 "foo" 并与 "bar" 拼接，并将其结果做为下一个 resolve 返回。
    .then(function (string) {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                string += 'bar';
                resolve(string);
            }, 1);
        });
    })
    .then((string) => {
        setTimeout(() => {
            string += 'baaz'
            console.log(string);
        }, 1);
        return string
    })

    .then(function (string) {
        console.log("Last Then:  oops... didn't bother to instantiate and return " +
            "a promise in the prior then so the sequence may be a bit " +
            "surprising");

        // 注意 `string` 这时不会存在 'baz'。
        // 因为这是发生在我们通过 setTimeout 模拟的异步函数中。
        console.log(string);
    });