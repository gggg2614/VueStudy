const promise1 = new Promise((resolve, reject) => {
    resolve('strig')
});

let then1 = promise1.then((string) => {
    return new Promise((resolve, reject) => {
        if (string == 'string') {
            reject('err')
        }
        resolve(string)
    })
})

let then2 = promise1.then((resolve, reject) => {
    console.log(resolve);
    setTimeout(() => {
        console.log(then2);
    }, 5);
    return resolve
})
    .catch((err) => {
        console.log(err);
    })
