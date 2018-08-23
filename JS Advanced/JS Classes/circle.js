class Circle {
    constructor(radius){
        this.radius = radius;
    }

    get radius(){

        return this._radius
    }

    set radius(radius){
        if(radius < 10){
            throw  new RangeError('radius must be bigger than 10')
        }
        this._radius = radius
    }

    get diameter(){
        return this.radius * 2
    }
    set diameter(diameter){
        if(diameter < 10){
            throw  new RangeError('Smaller than 10')
        }
        this.radius = diameter / 2;
    }

    get area() {
        return this.radius ** 2 * Math.PI;
    }
}
let circle = new Circle();
circle.radius = 20
console.log(circle.radius)
console.log(circle.diameter)
console.log(circle.diameter)
circle.diameter = 20;
console.log(circle.radius)
console.log(circle.diameter)
console.log(circle.area)

let circle2 = new Circle()
circle2._radius = -20
console.log(circle2.radius)



