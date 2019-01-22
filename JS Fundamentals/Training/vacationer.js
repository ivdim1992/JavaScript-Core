class Vacationer {
    constructor(fullName,creditCardDetails){
        this.fullName = fullName;
        this.wishList = [];
        this.idNumber = this.generateIDNumber();
        this.creditCardDetails = {
            cardNumber: 1111,
            expirationDate: "",
            securityNumber: 111
        };
        if(creditCardDetails !== undefined){
            this.addCreditCardInfo(creditCardDetails)
        }
    }


    get fullName(){
        return this._fullName
    }

    set fullName(input){
        if (input.length !== 3) {
            throw new Error("Name must include first name, middle name and last name");
        }
        let pattern = /\b[A-Z]{1}[a-z]+\b/gm;

        input.forEach(element => {
            if (!element.match(pattern)) {
                throw new Error("Invalid full name");
            }
        });

        let fullName = {};

        fullName["firstName"] = input[0];
        fullName["middleName"] = input[1];
        fullName["lastName"] = input[2];

        this._fullName = fullName;
    }

    generateIDNumber(){
        let vowels = ["a", "e", "o", "i", "u"];
        let idNumber = (231 * this.fullName.firstName.charCodeAt(0) + 139 * this.fullName.middleName.length).toString();
        if (vowels.includes(this.fullName.lastName[this.fullName.lastName.length - 1])) {
            idNumber += 8;
        } else {
            idNumber += 7;
        }
        return idNumber;
    }

    addCreditCardInfo(input){
        if (input.length !== 3) {
            throw new Error("Missing credit card information");
        }
        if (typeof input[0] !== "number" || typeof input[2] !== "number") {
            throw new Error("Invalid credit card details");
        }
        this.creditCardDetails["cardNumber"] = input[0];
        this.creditCardDetails["expirationDate"] = input[1];
        this.creditCardDetails["securityNumber"] = input[2];
    }

    addDestinationToWishList(destination){
        if (this.wishList.includes(destination)) {
            throw new Error("Destination already exists in wishlist");
        }
        this.wishList.push(destination);
        this.wishList.sort((a,b) => {return a.length - b.length})
    }

    getVacationerInfo() {
        return "Name: " + this.fullName.firstName + " " + this.fullName.middleName + " " + this.fullName.lastName + "\n" +
            "ID Number: " + this.idNumber + "\n" +
            "Wishlist:\n" + (this.wishList.length === 0 ? "empty" : this.wishList.join(", ")) + "\n" +
            "Credit Card:\n" +
            "Card Number: " + this.creditCardDetails.cardNumber + "\n" +
            "Expiration Date: " + this.creditCardDetails.expirationDate + "\n" +
            "Security Number: " + this.creditCardDetails.securityNumber + '\n';
    }
}

// Initialize vacationers with 2 and 3 parameters
let vacationer1 = new Vacationer(["Vania", "Ivanova", "Zhivkova"]);
let vacationer2 = new Vacationer(["Tania", "Ivanova", "Zhivkova"],
    [123456789, "10/01/2018", 777]);

// Should throw an error (Invalid full name)
try {
    let vacationer3 = new Vacationer(["Vania", "Ivanova", "ZhiVkova"]);
} catch (err) {
    console.log("Error: " + err.message);
}

// Should throw an error (Missing credit card information)
try {
    let vacationer3 = new Vacationer(["Zdravko", "Georgiev", "Petrov"]);
    vacationer3.addCreditCardInfo([123456789, "20/10/2018"]);
} catch (err) {
    console.log("Error: " + err.message);
}

vacationer1.addDestinationToWishList('Spain');
vacationer1.addDestinationToWishList('Germany');
vacationer1.addDestinationToWishList('Bali');

//Return information about the vacationers
console.log(vacationer1.getVacationerInfo());
console.log(vacationer2.getVacationerInfo());
