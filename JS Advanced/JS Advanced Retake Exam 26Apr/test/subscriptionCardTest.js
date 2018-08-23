let SubscriptionCard = require('./subscriptionCard');
let expect = require('chai').expect;

describe('Unit testing',function () {
    describe('describe the constructor',function () {
        it('the new obj should be instance of SubscriptionCard',function () {
            let card = new SubscriptionCard('Gosho','Ivanov','1234');
            expect(card instanceof SubscriptionCard).to.be.true
        });
        it('Should have instance of firstName',function () {
            let card = new SubscriptionCard('Gosho','Ivanov','1234');
            expect(card.hasOwnProperty('_firstName')).to.be.true
        });
        it('Should have instance of lastName',function () {
            let card = new SubscriptionCard('Gosho','Ivanov','1234');
            expect(card.hasOwnProperty('_lastName')).to.be.true
        });
        it('Should have instance of SSN',function () {
            let card = new SubscriptionCard('Gosho','Ivanov','1234');
            expect(card.hasOwnProperty('_SSN')).to.be.true
        });
        it('Should have instance of subscription',function () {
            let card = new SubscriptionCard('Gosho','Ivanov','1234');
            expect(card.hasOwnProperty('_subscriptions')).to.be.true
        });
        it('should have property of blocked',function () {
            let card = new SubscriptionCard('Gosho','Ivanov','1234');
            expect(card.hasOwnProperty('_blocked')).to.be.true
        })
    });
    describe('Check the accessors',function () {
        it('should return the first name',function () {
            let card = new SubscriptionCard('Gosho','Ivanov','1234');
            expect(card.firstName).to.equal('Gosho')
        });
        it('should return the last name',function () {
            let card = new SubscriptionCard('Gosho','Ivanov','1234');
            expect(card.lastName).to.equal('Ivanov')
        });
        it('should return the SSN',function () {
            let card = new SubscriptionCard('Gosho','Ivanov','1234');
            expect(card.SSN).to.equal('1234')
        });
        it('should return false to isBlocked',function () {
            let card = new SubscriptionCard('Gosho','Ivanov','1234');
            expect(card.isBlocked).to.be.false
        });
    });
    describe('Check addSubscription function',function () {
        it('should return object , object',function () {
            let card = new SubscriptionCard('Gosho','Ivanov','1234');
            card.addSubscription('first','16','20');
            expect(card._subscriptions.toString()).to.equal('[object Object]')
        });
        it('should return object , object',function () {
            let card = new SubscriptionCard('Gosho','Ivanov','1234');
            card.addSubscription({},[],15);
            expect(card._subscriptions.toString()).to.equal('[object Object]')
        });
        it('should return object , object',function () {
            let card = new SubscriptionCard('Gosho','Ivanov','1234');
            card.addSubscription(16,2,15);
            expect(card._subscriptions.toString()).to.equal('[object Object]')
        });
    });
    describe('Checking function isValid()',function () {
        it('check with correct dates should return true',function () {
            let card = new SubscriptionCard('Gosho','Ivanov','1234');
            card.addSubscription(16,2,15);
            expect(card.isValid(16,2)).to.be.true
        });
        it('check with correct dates should return true',function () {
            let card = new SubscriptionCard('Gosho','Ivanov','1234');
            card.addSubscription(16,2,15);
            expect(card.isValid(16,15)).to.be.true
        });
        it('check with incorrect dates should return false',function () {
            let card = new SubscriptionCard('Gosho','Ivanov','1234');
            card.addSubscription(16,2,15);
            expect(card.isValid(15,15)).to.be.false
        })
    });
    describe('block func',function () {
        it('should set block to true',function () {
            let card = new SubscriptionCard('Gosho','Ivanov','1234');
            card.block();
            expect(card._blocked).to.be.true
        })
    });
    describe('unblock func',function () {
        it('should set block to false',function () {
            let card = new SubscriptionCard('Gosho','Ivanov','1234');
            card.unblock();
            expect(card._blocked).to.be.false
        })
    })
    describe('unblock func',function () {
        it('should set block to false',function () {
            let card = new SubscriptionCard('Gosho','Ivanov','1234');
            card.firstName = 'Ivo'
            card.lastName = 'Ivo'
            card.SSN = 'Ivo'
            expect(card.firstName).to.equal('Gosho')
            expect(card.lastName).to.equal('Ivanov')
            expect(card.SSN).to.equal('1234')
        })
    })

})