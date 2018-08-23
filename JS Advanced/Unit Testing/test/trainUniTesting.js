function sum(arr) {

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
    }
    return sum;
}

let expect = require('chai').expect;

describe("Test sumator",function () {
    it('should return 3 for [1,2]',function () {
        let expected = 3;
        let actual = sum([1,2])
        expect(actual).to.equal(expected)
    });
    it('should return 0 for []',function () {
        let expected = 0;
        let actual = sum([]);
        expect(actual).to.equal(expected)
    });
    it('should NaN',function () {
        let expected =NaN;
        let actual = sum(['pesho',2,3])
        expect(actual).to.be.NaN
    });
    it('should return 3.3',function () {
        expect(sum([1.1,1.1,1.1])).to.be.closeTo(3.3,0.0001)
    });
    it('should work with negtive number',function () {
        expect(sum([2,5,-2])).to.equal(5)
    });
    it('should return NAN',function () {
        expect(sum('pesho')).to.be.NaN
    })
})