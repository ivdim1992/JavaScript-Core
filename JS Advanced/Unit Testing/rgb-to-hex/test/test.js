let rgbToHexColor = require('../rgbToHex').rgbToHexColor;
let expect = require('chai').expect;

describe('General Test',function () {
    describe('Design the test cases',function () {
        it('with correct input numbers should return the color',function () {
            expect(rgbToHexColor(255,158,170)).to.equal('#FF9EAA')
        });
        it('test with other numbers',function () {
            expect(rgbToHexColor(0,0,0)).to.equal('#000000')
        });
        it('test with other numbers',function () {
            expect(rgbToHexColor(12,13,14)).to.equal('#0C0D0E')
        });
        it('test with other numbers',function () {
            expect(rgbToHexColor(255,255,255)).to.equal('#FFFFFF')
        })
    });
    describe('Test with special cases',function () {
        it('Test with negative input',function () {
            expect(rgbToHexColor(-1,0,0)).to.be.undefined
        });
        it('Test with negative input',function () {
            expect(rgbToHexColor(0,-1,0)).to.be.undefined
        });
        it('Test with negative input',function () {
            expect(rgbToHexColor(0,0,-1)).to.be.undefined
        });
        it('Test with invalid input',function () {
            expect(rgbToHexColor(257,0,0)).to.be.undefined
        });
        it('Test with invalid input',function () {
            expect(rgbToHexColor(0,257,0)).to.be.undefined
        });
        it('Test with invalid input',function () {
            expect(rgbToHexColor(0,0,2574)).to.be.undefined
        });
        it('check with double numbers',function () {
            expect(rgbToHexColor(3.14,0,0)).to.be.undefined
        });
        it('check with double numbers',function () {
            expect(rgbToHexColor(0,3.14,0)).to.be.undefined
        });
        it('check with double numbers',function () {
            expect(rgbToHexColor(0,0,3.14)).to.be.undefined
        });
        it('check with different input',function () {
            expect(rgbToHexColor([],{},'i')).to.be.undefined
        })
    })
});