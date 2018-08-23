class Person {
    constructor(firstName,lastName,age,email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }
}
let ivaylo = new Person('Ivaylo','Dimitrov',22,'aaa@abv.bg')
console.log(ivaylo.toString())