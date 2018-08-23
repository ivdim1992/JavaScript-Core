class Circle{
    constructor(radius){
        this.radius = radius
    }

    static invoke(){
        return 9 + 3
    }
}




let circ = new Circle(5);
console.log(circ)

console.log(Circle.invoke())