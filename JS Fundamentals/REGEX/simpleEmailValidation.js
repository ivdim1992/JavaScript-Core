function validate(email) {
    let pattertn = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/g;

    return pattertn.exec(email) ?  'Valid' : 'Invalid';
}

console.log(validate('invalid@emai1.bg'));