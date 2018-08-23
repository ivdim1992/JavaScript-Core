
(function solve() {

    Array.prototype.last = function () {
        return this.pop()
    };
    
    Array.prototype.skip = function (n) {
        let result = [];
        for(let i = n; i < this.length; i++){
            result.push(this[i])
        }
        return result
    };
    Array.prototype.take = function (n) {
        let result = [];
        for (let i = 0; i < n; i++) {
            result.push(this[i])
        }
        return result
    };
    Array.prototype.sum = function () {
        return this.reduce((a,b) => a + b)
    };
    Array.prototype.average = function () {
        let sum = this.reduce((a,b) => a + b);
        return sum / this.length
    }

}());
let arr = [4,6,8,9];
console.log(arr.last())