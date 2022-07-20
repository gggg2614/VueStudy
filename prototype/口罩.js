function supermarket() { }
supermarket.prototype.product = '口罩'

function shop() { }
shop.prototype = new supermarket()

var person = new shop()

console.log(shop.__proto__);
console.log(person.__proto__);

console.log(person.product);