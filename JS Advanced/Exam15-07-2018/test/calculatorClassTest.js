let expect = require('chai').expect;
let Calculator = require('./calculatorClass');

describe('Unit Testing Calculator', function () {
    describe('Checking expenses', function () {
        it('should have prop expenses and others', function () {
            let calculator = new Calculator();
            expect(calculator.hasOwnProperty('expenses')).to.be.true
        });
        it('expenses should be empty', function () {
            let calculator = new Calculator();
            expect(calculator.expenses.length).to.equal(0)
        });
    });
    describe('add function', function () {
        it('add with integers', function () {
            let calculator = new Calculator();
            calculator.add(2);
            calculator.add(5);
            expect(calculator.toString()).to.equal('2 -> 5') // SHOULD RETURN 2 -> 5 but wants 2,5
        });
        it('add with strings', function () {
            let calculator = new Calculator();
            calculator.add('Pesho');
            calculator.add('Gosho');
            expect(calculator.toString()).to.equal('Pesho -> Gosho')
        });
        it('add with floating point', function () {
            let calculator = new Calculator();
            calculator.add(10.5);
            calculator.add(5.5);
            expect(calculator.toString()).to.equal('10.5 -> 5.5')
        });
        it('add with negative numbers', function () {
            let calculator = new Calculator();
            calculator.add(-2);
            calculator.add(-3);
            expect(calculator.toString()).to.equal('-2 -> -3')
        });
        it('add with object', function () {
            let calculator = new Calculator();
            calculator.add({name: 'Ivo', age: 23});
            expect(calculator.toString()).to.equal('[object Object]')
        });
    });
    describe('divideNums function', function () {
        it('Checking with correct numbers', function () {
            let calculator = new Calculator();
            calculator.add(8)
            calculator.add(4)
            calculator.add(2)
            expect(calculator.divideNums()).to.equal(1)
        });

        it('Checking with floating numbers', function () {
            let calculator = new Calculator();
            calculator.add(4.2);
            calculator.add(2.2);
            expect(calculator.divideNums()).to.be.closeTo(1.90, 0.01)
        });
        it('Checking with floating numbers', function () {
            let calculator = new Calculator();
            calculator.add(-4.2);
            calculator.add(2.2);
            expect(calculator.divideNums()).to.be.closeTo(-1.90, 0.01)
        });
        it('Checking with string and number', function () {
            let calculator = new Calculator();
            calculator.add(2);
            calculator.add('ivo');
            expect(calculator.divideNums()).to.equal(2)
        });
        it('Checking with string and number', function () {
            let calculator = new Calculator();
            calculator.add('ivo');
            calculator.add(2);
            expect(calculator.divideNums()).to.equal(2)
        });
        it('Checking with two strings', function () {
            let calculator = new Calculator();
            calculator.add('gosho');
            calculator.add('ivo');
            let error = () => calculator.divideNums();
            expect(error).to.throw()
        });
        it('Checking with two strings', function () {
            let calculator = new Calculator();
            calculator.add('gosho');
            calculator.add(undefined);
            let error = () => calculator.divideNums();
            expect(error).to.throw()
        });
        it('Checking with two strings', function () {
            let calculator = new Calculator();
            let error = () => calculator.divideNums();
            expect(error).to.throw()
        });
        it('Checking with one 0', function () {
            let calculator = new Calculator();
            calculator.add(2);
            calculator.add(0);
            expect(calculator.divideNums()).to.equal('Cannot divide by zero')
        });
        it('Checking with negative number', function () {
            let calculator = new Calculator();
            calculator.add(3);
            calculator.add(-2);
            expect(calculator.divideNums()).to.equal(-1.5)
        });
        it('Checking with negative number', function () {
            let calculator = new Calculator();
            calculator.add({name: 'ivo'});
            calculator.add(5);
            expect(calculator.divideNums()).to.equal(5)
        });
    })
    describe('toString Function', function () {
        it('check with empty',function () {
            let calculator = new Calculator();
            expect(calculator.toString()).to.equal('empty array')

        })
        it('check with non empty',function () {
            let calculator = new Calculator();
            calculator.add(5)
            calculator.add(6)
            expect(calculator.toString()).to.equal('5 -> 6')
        })
        it('check with non empty',function () {
            let calculator = new Calculator();
            calculator.add('ivo')
            calculator.add('pesho')
            expect(calculator.toString()).to.equal('ivo -> pesho')
        })
    })
    describe('Function orderBy',function () {
        it('checking with numbers',function () {
            let calculator = new Calculator();
            calculator.add(5)                       // Trqbva da se proveri hvrulqneto na masiva , ne minava !!!
            calculator.add(2)
            calculator.add(8)
            expect(calculator.orderBy()).to.equal('2, 5, 8')
        })
        it('checking with numbers',function () {
            let calculator = new Calculator();
            expect(calculator.orderBy().toString()).to.equal('empty')
        })
        it('checking with numbers',function () {
            let calculator = new Calculator();
            calculator.add('ivo')
            calculator.add('pesho')
            expect(calculator.orderBy()).to.equal('ivo, pesho')
        })
        it('checking with numbers',function () {
            let calculator = new Calculator();
            calculator.add(5)
            calculator.add('pesho')
            calculator.add(6)
            expect(calculator.orderBy()).to.equal('5, 6, pesho')
        })

    })
})