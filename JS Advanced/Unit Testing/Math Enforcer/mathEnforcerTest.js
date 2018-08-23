let mathEnforcer = require('./mathEnforcer').mathEnforcer;
let expect = require('chai').expect;

describe('Genereal Tests',function () {
    describe('Function addFive',function () {
        it('check with str should return undefined',function () {
            expect(mathEnforcer.addFive('pesho')).to.be.undefined
        });
        it('check with object should return undefined',function () {
            expect(mathEnforcer.addFive({name:'ivo'})).to.be.undefined
        });
        it('check with correct value',function () {
            expect(mathEnforcer.addFive(5)).to.equal(10)
        });
        it('check with correct value',function () {
            expect(mathEnforcer.addFive(-6)).to.equal(-1)
        });
        it('check with correct value',function () {
            expect(mathEnforcer.addFive(5.5)).to.equal(10.5)
        });
    });
    describe('Function subtract',function () {
        it('check with str should return undefined',function () {
            expect(mathEnforcer.subtractTen('pesho')).to.be.undefined
        });
        it('check with object should return undefined',function () {
            expect(mathEnforcer.subtractTen({name:'ivo'})).to.be.undefined
        });
        it('check with correct value',function () {
            expect(mathEnforcer.subtractTen(20)).to.equal(10)
        });
        it('check with correct value',function () {
            expect(mathEnforcer.subtractTen(-5)).to.equal(-15)
        });
        it('check with correct value',function () {
            expect(mathEnforcer.subtractTen(15.5)).to.equal(5.5)
        });
    });
    describe('Function Sum',function () {
       it('Check if num1 is not a number',function () {
           expect(mathEnforcer.sum('pesho',3)).to.be.undefined;
       });
        it('Check if num1 is not a number',function () {
            expect(mathEnforcer.sum({name:'ivo'},3)).to.be.undefined;
        });
        it('Check if num2 is not a number',function () {
            expect(mathEnforcer.sum(4,'gosho')).to.be.undefined;
        });
        it('Check if num2 is not a number',function () {
            expect(mathEnforcer.sum(4,{name:'petka'})).to.be.undefined;
        });
        it('Check with correct values',function () {
            expect(mathEnforcer.sum(4,5)).to.equal(9)
        });
        it('Check with correct values',function () {
            expect(mathEnforcer.sum(4,-5)).to.equal(-1)
        });
        it('Check with correct values',function () {
            expect(mathEnforcer.sum(-4,5)).to.equal(1)
        });
        it('Check with correct values',function () {
            expect(mathEnforcer.sum(-4,-5)).to.equal(-9)
        });
        it('Check with correct values',function () {
            expect(mathEnforcer.sum(5.5,5)).to.equal(10.5)
        });
        it('Check with correct values',function () {
            expect(mathEnforcer.sum(6,4.5)).to.equal(10.5)
        });
    })
})