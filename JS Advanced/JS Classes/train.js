let Rectangle = function (width,height) {
    this.width = width;
    this.height = height;
};

Rectangle.prototype.area = function () {
    return this.width * this.height
};

let rect1 = new Rectangle(5,6);
console.log(rect1.area())