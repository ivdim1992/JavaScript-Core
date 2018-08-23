let createCalculator = require('./addSubstract').createCalculator;
let expect = require('chai').expect;

describe('Calculator', function () {
    let calc;
    beforeEach(() => {
        calc = createCalculator();
    });

    it('should return an object', function () {
        expect(typeof calc).to.equal('object')
    });
    it('should have zero value when created',function () {
        expect(calc.get()).to.equal(0)
    });
    it('should add',function () {
        calc.add(4);
        calc.add(3)
        expect(calc.get()).to.equal(7)
    });

    it('should add',function () {
        calc.add('6');
        expect(calc.get()).to.equal(6)
    });
    it('should subtract',function () {
        calc.subtract(3)
        calc.subtract(2)
        expect(calc.get()).to.equal(-5)
    })
    it('should work with double numbers',function () {
        calc.add(3.5);
        calc.add(3.4)
        expect(calc.get()).to.equal(6.9)
    });
    it('should subtract',function () {
        calc.add(-4)
        calc.subtract(-2)
        expect(calc.get()).to.equal(-2)
    });
    it('should not add str',function () {
        calc.add('hi')
        expect(calc.get()).to.be.NaN
    });
    it('should not add str',function () {
        calc.subtract('pesho')
        expect(calc.get()).to.be.NaN
    })

})