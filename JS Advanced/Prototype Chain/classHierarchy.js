
class Figure {

    constructor() {

    }

    get area() {
        return undefined;
    }

    toString() {
        let type = this.constructor.name;
        return type
    }
}

class Circle extends Figure {
    constructor(radius) {
        super();
        this.radius =radius;
    }



    toString(){
        return `${super.toString()} - radius: ${this.radius}`
    }
}

class Rectangle extends Figure {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    get area(){
        return this.width * this.height;
    }

    toString() {
        return `${super.toString()} - width: ${this.width}, height: ${this.height}`
    }
}



let ci = new Circle(5);
console.log(ci)

asCircle.call(ci)
console.log(ci.area)
