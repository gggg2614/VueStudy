function init() {
    var name = 'name'
    function displayname() {
        return name
    }
    return displayname
}

var ini = init()
ini()

console.log(init());
console.log(ini());