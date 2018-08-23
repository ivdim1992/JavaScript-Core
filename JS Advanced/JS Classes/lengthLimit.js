class Stringer {
    constructor(innerString,innerLength){
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    get innerLength(){
        return this._innerLength
    }
    set innerLength(value){
        if(value < 0){
            this.innerLength = 0;
        }
        return this._innerLength = value;
    }
    increase(length){
        this.innerLength += length;
    }

    decrease(length){
       this.innerLength -= length;
    }

    toString(){
        if(this.innerString.length <= this.innerLength){
            return this.innerString
        }else {
            return this.innerString.substring(0,this.innerLength) + '...'
        }
    }
}
let test = new Stringer('Victor', 6);
console.log(test.toString()); //Test
test.decrease(3);
console.log(test.toString()); //Te...
test.decrease(5);
console.log(test.toString()); //...
test.increase(4);
console.log(test.toString());