let Console = require('./console').Console;
let expect = require('chai').expect;

describe('Checking Console class',function () {
    describe('Checking for static method placeholder',function () {
        it('should return true for existing',function () {
            let str = 'Hello';
            expect(Console.writeLine(str)).to.equal('Hello')
        });
        it('if it is an object should return json stringify',function () {
            let obj = {name:'ivailo',age:23}
            expect(Console.writeLine(obj)).to.equal(JSON.stringify(obj))
        });
        it('should throw error if no str or obj given',function () {
            expect(() => Console.writeLine()).to.throw(TypeError)
        });
        it('should throw error if no str or obj given',function () {
            expect(() => Console.writeLine(3,5,6)).to.throw(TypeError)
        });
        it('should throw error if no str or obj given',function () {
            expect(() => Console.writeLine(3,'3','6')).to.throw(TypeError)
        });
        it('should not replaced',function () {
            let str = 'The {0} is a good {1}';
            expect(() => Console.writeLine(str,'today','tomorrow','yesterday')).to.throw(RangeError);
        });
        it('should not replaced',function () {
            let str = '{0} is a good {0}';
            expect(() => Console.writeLine(str,'today','tomorrow')).to.throw(RangeError);
        });
        it('should not replaced',function () {
            let str = '{0} is a good {1} and {2} is {3} and {4}';
            expect(() => Console.writeLine(str,'today','tomorrow')).to.throw(RangeError);
        });

        it('should be replaced',function () {
            let str = '{0} is a good {1} and {2} is {3}';
            expect(Console.writeLine(str,'Today','day','tomorrow','better')).to.equal('Today is a good day and tomorrow is better')
        });
    })
})