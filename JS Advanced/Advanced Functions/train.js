let ivaylo = {
    name: 'IVaylo',
    age: 26,
    greetings: function () {
        console.log('Good Morning ' + this.name + ' of age ' + this.age)
    }
};

let maria = {
    name: 'Maria',
    age: 25
};

ivaylo.greetings.call(maria)
