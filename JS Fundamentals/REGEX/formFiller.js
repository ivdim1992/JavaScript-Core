function fill(username, email, phoneNumber , data) {

    function replace(match, g1){
        switch (g1){
            case '!': return username;
            case '@': return email;
            case '+': return phoneNumber;
        }
    }

    data.forEach(row => {
        row = row.replace(/<([!@+])[a-zA-Z]+([!@+])>/g,replace)
        console.log(row)
    })
}
fill("Pesho",
"pesho@softuni.bg",
"90-60-90",
["Hello, <!username!>!",
"Welcome to your Personal profile.",
"Here you can modify your profile freely.",
"Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)",
"Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)",
"Your current phone number is: <+number+>. Would you like to change that? (Y/N)"])