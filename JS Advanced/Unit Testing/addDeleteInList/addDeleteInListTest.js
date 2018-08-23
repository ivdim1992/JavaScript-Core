let list = require('./addDeleteInList').list;
let expect = require('chai').expect;


describe('Unit Testing List',function () {
    describe('Checking initial value',function () {
        it('check if data is empty',function () {
            expect(list.toString()).to.equal('')
        })
    });
    describe('Check add Function',function () {
        it('check with numbers',function () {
            list.add(5);
            expect(list.toString()).to.be.equal('5')
        });
        it('Check with string',function () {
            list.add('ivo');
            expect(list.toString()).to.be.equal('ivo')
        })
    });
    describe('Check delete Func',function () {
        it('if the index is float number return undefined',function () {
            list.add(4);
            list.add(3)
            expect(list.delete(15.6)).to.be.undefined;
        });
        it('if the index is not a number',function () {
            list.add(4);
            list.add(3)
            expect(list.delete({})).to.be.undefined;
        });
        it('if the index is negative number',function () {
            list.add(4);
            list.add(3)
            expect(list.delete(-2)).to.be.undefined;
        });
        it('if the index is str',function () {
            list.add(4);
            list.add(3)
            expect(list.delete('mo')).to.be.undefined;
        });
        it('if the length is > indx',function () {
            expect(list.delete(0)).to.be.undefined
        });
        it('if the length is > indx',function () {
            list.add(4);
            list.add(3)
            expect(list.delete(3)).to.be.undefined
        });
        it('if the indx is correct',function () {
            list.add(4);
            list.add(3)
            expect(list.delete(1).toString()).to.equal('3')
        });
        it('if the indx is correct',function () {
            list.add(4);
            list.add(3)
            expect(list.delete(0)).to.equal(4)
        });

    })
    describe('Checking tostring',function () {
        it('check with correct values',function () {
            list.add(4);
            list.add(3);
            list.delete(0)
            expect(list.toString()).to.equal('3')
        })
    })
})