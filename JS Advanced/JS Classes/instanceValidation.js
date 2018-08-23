class CheckingAccount{
    constructor(clientId, email, firstName, lastName){
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.products = [];
    }

    get clientId(){
        return this._clientId;
    }

    set clientId(value){
        if(!/^\d{6}$/g.test(value)){
            throw TypeError('Client ID must be a 6-digit number')
        }
        this._clientId = value
    }

    get email(){
        return this._email
    }

    set email(value){
        if(!/^[A-Za-z0-9]+@[a-zA-Z.]+$/g.test(value)){
            throw TypeError('Invalid e-mail')
        }
        this._email = value;
    }

    get firstName(){
        return this._firstName
    }

    set firstName(value){
        if(value.length < 3 || value.length > 20){
            throw TypeError('First name must be between 3 and 20 character long')
        }

        if(!/^[A-Za-z]{3,20}$/g.test(value)){
            throw TypeError('First name must contain only Latin characters')
        }

        this._firstName = value;
    }

    get lastName(){
        return this._lastName
    }

    set lastName(value){
        if(value.length < 3 || value.length > 20){
            throw TypeError('Last name must be between 3 and 20 character long')
        }

        if(!/^[A-Za-z]{3,20}$/g.test(value)){
            throw TypeError('Last name must contain only Latin characters')
        }

        this._lastName = value;
    }
}
let newAcc = new CheckingAccount('131455', 'ivan@some.com', 'I', 'Petrov')
console.log(newAcc)