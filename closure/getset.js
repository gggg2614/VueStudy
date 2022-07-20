function MyObject(name, message) {
    this.name = name.toString();
    this.message = message.toString();
}
MyObject.prototype.getName = function () {
    console.log(this.name);
    return this.name;
};
MyObject.prototype.getMessage = function () {
    console.log(this.message);
    return this.message;
};
console.log(MyObject('12', '3'))
