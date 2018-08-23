function capture(arr) {
    let result = [];
    let pattern = /[0-9]+/g;

    for(let row of arr){
        let match = pattern.exec(row);

        while (match){
            result.push(match[0]);
            match = pattern.exec(row);
        }
    }
    console.log(result.join(' '))
}
capture(['The300',
    'What is that?',
    'I think it’s the 3rd movie.',
    'Lets watch it at 22:45']);