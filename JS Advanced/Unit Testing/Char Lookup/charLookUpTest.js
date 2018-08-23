let lookupChar = require('./charLookUp').lookupChar;
let expect = require('chai').expect;

describe('Test with string and index',function () {
    it('Check when it is not string',function () {
        expect(lookupChar(2,3)).to.be.undefined
    });
    it('Check when it is not string',function () {
        expect(lookupChar({},3)).to.be.undefined
    });
    it('Check when it is not string',function () {
        expect(lookupChar([],3)).to.be.undefined
    });
    it('Check when it is not correct index',function () {
        expect(lookupChar('pesho',3.5)).to.be.undefined
    });
    it('Check when it is not correct index',function () {
        expect(lookupChar('pesho','pesho')).to.be.undefined
    });
    it('Check when it is not correct index',function () {
        expect(lookupChar('pesho','3')).to.be.undefined
    });
    it('Check when it is not correct index',function () {
        expect(lookupChar('pesho',6)).to.equal('Incorrect index')
    });
    it('Check when it is not correct index',function () {
        expect(lookupChar('pesho',5)).to.equal('Incorrect index')
    });
    it('Check when it is not correct index',function () {
        expect(lookupChar('pesho',-2)).to.equal('Incorrect index')
    });
    it('Check with correct values',function () {
        expect(lookupChar('pesho',2)).to.equal('s')
    });
})