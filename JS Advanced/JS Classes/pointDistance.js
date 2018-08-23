class Point {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    static distance(a,b){
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.sqrt(dx ** 2 + dy ** 2)
    }
}

let p1 = new  Point(3,4)
let p2 = new  Point(5,6)
console.log(Point.distance(p1,p2))