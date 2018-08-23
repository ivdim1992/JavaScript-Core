let isOddOrEven = require('./evenOrOdd').isOddOrEven;
let expect = require('chai').expect;

describe('General Test',function () {
    describe('Checking if not string',function () {
        it('with number should return undefined',function () {
            expect(isOddOrEven(5)).to.be.undefined;
        });
        it('with float number should return undefined',function () {
            expect(isOddOrEven(5.5)).to.be.undefined;
        });
        it('check with object should return undefined',function () {
            expect(isOddOrEven({})).to.be.undefined
        });
        it('check with array should return undefined',function () {
            expect(isOddOrEven([])).to.be.undefined
        })
    })
    describe('Check with correct value',function () {
        it('Check with string',function () {
            expect(isOddOrEven('pesho')).to.equal('odd')
        });
        it('Check with string',function () {
            expect(isOddOrEven('georgi')).to.equal('even')
        });
    })
})