let sharedObject = require('./sharedObject').sharedObject;
let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');


describe('Shared Object Unit Test',function () {
    describe("Initial value",function () {
        it("prop name to be null",function () {
            expect(sharedObject.name).to.be.null;
        });
        it("prop income to be null",function () {
            expect(sharedObject.income).to.be.null;
        })
    });
    describe("Change name",function () {
        it("with empty string(name should be null)",function () {
            sharedObject.changeName('');
            expect(sharedObject.name).to.be.null;
        });
        it("with non-empty string(name should be input)",function () {
            sharedObject.changeName('Gosho');
            expect(sharedObject.name).to.be.equal('Gosho', 'incorrect input')
        })
    });
    describe("Input name , input tests",function () {
        it("with empty string(name should be null)",function () {
            sharedObject.changeName('Ivaylo');
            sharedObject.changeName('');
            let input = $('#name');
            expect(input.val()).to.be.equal('Ivaylo')
        });
        it("with non-empty string(name should be input)",function () {
            sharedObject.changeName('Gosho');
            let input = $('#name');
            expect(input.val()).to.be.equal('Gosho', 'incorrect input')
        })
    });
    describe('Function ChangeIncome',function () {
        it('check if income is str',function () {
            sharedObject.changeIncome(5)
            sharedObject.changeIncome('Petka')
            expect(sharedObject.income).to.equal(5)
        });
        it('check if income is float number',function () {
            sharedObject.changeIncome(5)
            sharedObject.changeIncome(6.5)
            expect(sharedObject.income).to.equal(5)
        });
        it('check if income is negative number',function () {
            sharedObject.changeIncome(5)
            sharedObject.changeIncome(-2)
            expect(sharedObject.income).to.equal(5)
        });
        it('check if income is 0',function () {
            sharedObject.changeIncome(5)
            sharedObject.changeIncome(0)
            expect(sharedObject.income).to.equal(5)
        });
        it('check if income is str',function () {
            sharedObject.changeIncome(5)
            sharedObject.changeIncome(6)
            expect(sharedObject.income).to.equal(6)
        });
        it('check input income',function () {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(-2)
            let income = $('#income');
            expect(income.val()).to.equal('5')
        });
        it('check input income',function () {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(4.5)
            let income = $('#income');
            expect(income.val()).to.equal('5')
        });
        it('check input income',function () {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome('hi')
            let income = $('#income');
            expect(income.val()).to.equal('5')
        });
        it('check input income',function () {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(0)
            let income = $('#income');
            expect(income.val()).to.equal('5')
        });
        it('check input income',function () {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(8);
            let income = $('#income');
            expect(income.val()).to.equal('8')
        });
    });
    describe('Function updateName',function () {
        it('inputName with empty str',function () {
            sharedObject.changeName('Gosho');
            let inputName = $('#name');
            inputName.val('');
            sharedObject.updateName();
            expect(sharedObject.name).to.equal('Gosho')
        });
        it('inputName with non empty str',function () {
            sharedObject.changeName('Gosho');
            let inputName = $('#name');
            inputName.val('Ivaylo');
            sharedObject.updateName();
            expect(sharedObject.name).to.equal('Ivaylo')
        });
    });
    describe('Function updateIncome',function () {
        it('check if its str',function () {
            sharedObject.changeIncome(5)
            let income = $('#income');
            income.val('pesho')
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(5)
        });
        it('check if it is float number',function () {
            sharedObject.changeIncome(8)
            let income = $('#income');
            income.val('5.6');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(8)
        });
        it('check if it is negative number',function () {
            sharedObject.changeIncome(8)
            let income = $('#income');
            income.val('-2');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(8)
        });
        it('check if it is zero number',function () {
            sharedObject.changeIncome(8)
            let income = $('#income');
            income.val('0');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(8)
        });
        it('check with correct value',function () {
            sharedObject.changeIncome(8)
            let income = $('#income');
            income.val('10');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(10)
        });
    })

});



