class student {
    constructor(name, sex) {
        this.name = name
        this.sex = sex
    }

}

let Student = new student('zs', 'nan')

class Polygon {
    constructor(height, width) {
        this.height = height
        this.width = width
    }
}

class Square extends Polygon {
    constructor(sideLength) {
        super(sideLength, sideLength)
    }
    get area() {
        return this.height * this.width
    }
    set sideLength(newLength) {
        this.width = newLength
        this.height = newLength
    }
}

var square = new Square()
square.sideLength = 5
console.log(square.area);