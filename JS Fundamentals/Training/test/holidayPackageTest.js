let expect = require('chai').expect;
const HolidayPackage = require('./holidayPackage');

describe('HolidayPackage',function () {
    let holidayPackage;

    beforeEach(function() {
        holidayPackage = new HolidayPackage('Bulgaria', 'Summer');
    });

    describe('Checking the first two parameters',function () {
        it('should have initial value of destination',function () {
            expect(holidayPackage.destination).to.equal('Bulgaria')
        });
        it('should have initial value of season',function () {
            expect(holidayPackage.season).to.equal('Summer')
        });
    });

    describe('Checking insurance status',function () {
        it('Initial value should be false',function () {
            expect(holidayPackage.insuranceIncluded).to.be.false;
        });
        it('When we set it to true should be true',function () {
            holidayPackage.insuranceIncluded = true;
            expect(holidayPackage.insuranceIncluded).to.be.true;
        });
        it('When it is not boolean should throw an error',function () {
            expect(() => holidayPackage.insuranceIncluded = 'Ganio').to.throw('Insurance status must be a boolean')
        })
    });

    describe('Function ShowVacationers',function () {
        it('Checking if vacationers are empty',function () {
            expect(holidayPackage.showVacationers()).to.equal('No vacationers are added yet')
        });
        it('Checking with vacationers',function () {
            holidayPackage.addVacationer('Gosho Petrov');
            expect(holidayPackage.showVacationers()).to.equal('Vacationers:\nGosho Petrov')
        });
        it('Checking with more than one vacationer',function () {
            holidayPackage.addVacationer('Gosho Petrov');
            holidayPackage.addVacationer('Ivailo Dimitrov');
            expect(holidayPackage.showVacationers()).to.equal('Vacationers:\nGosho Petrov\nIvailo Dimitrov')
        })

    });
    
    describe('Function addVacationer',function () {
        it('checking the name if it is an empty string',function () {
            expect(() => holidayPackage.addVacationer('')).to.throw('Name must consist of first name and last name')
        });
        it('checking the name if it is a number',function () {
            expect(() => holidayPackage.addVacationer(2)).to.throw('Vacationer name must be a non-empty string')
        });
        it('checking the name if it is a single name',function () {
            expect(() => holidayPackage.addVacationer('Gosho')).to.throw('Name must consist of first name and last name')
        });
        it('checking with correct value',function () {
            holidayPackage.addVacationer('Gosho Petrov');
            expect(holidayPackage.showVacationers()).to.equal('Vacationers:\nGosho Petrov')
        })
    });

    describe('Function generatePackage',function () {
        it('if vacationers are empty',function () {
            expect(() => holidayPackage.generateHolidayPackage()).to.throw('There must be at least 1 vacationer added')
        });
        it('checking when are not empty and it is Summer',function () {
            holidayPackage.addVacationer('Ivan Ivanov');
            holidayPackage.addVacationer('Petar Petrov');
            holidayPackage.addVacationer('Georgi Georgiev');
            holidayPackage.addVacationer('Gosho Petrov');

            expect(holidayPackage.generateHolidayPackage()).to.equal('Holiday Package Generated\nDestination: Bulgaria\nVacationers:\nIvan Ivanov\n' +
                'Petar Petrov\nGeorgi Georgiev\nGosho Petrov\nPrice: 1800');
        });

        it('checking when are not empty and it is Summer and if there is an insurance',function () {
            holidayPackage.addVacationer('Ivan Ivanov');
            holidayPackage.addVacationer('Petar Petrov');
            holidayPackage.addVacationer('Georgi Georgiev');
            holidayPackage.addVacationer('Gosho Petrov');
            holidayPackage.insuranceIncluded = true;

            expect(holidayPackage.generateHolidayPackage()).to.equal('Holiday Package Generated\nDestination: Bulgaria\nVacationers:\nIvan Ivanov\n' +
                'Petar Petrov\nGeorgi Georgiev\nGosho Petrov\nPrice: 1900');
        });

    })

});