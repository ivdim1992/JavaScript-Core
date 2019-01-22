function solve(arr) {

    let cherrys = 0;
    let peaches = 0;
    let plums = 0;
    let trash = 0;

    for(let row of arr){
        let [fruit,size] = row.split(' ').filter(a => a !== '');

        if(fruit === 'cherry'){
            cherrys += size * 1000;
        }else if(fruit === 'peach'){
            peaches += size * 1000;
        }else if(fruit === 'plum'){
            plums += size * 1000;
        }else {
            trash += size;
        }
    }

    let rakiya = 0.2 * trash;

    console.log(Math.floor((cherrys / 9) / 25))
    console.log(Math.floor((peaches / 140) / 2.5))
    console.log(Math.floor((plums / 20) / 10))

    console.log(rakiya)

}

solve(
    ['cherry 1.2','peach 2.2', 'plum  5.2', 'peach 0.1', 'cherry 0.2', 'cherry 5.0', 'plum 10', 'cherry 20.0','gushi 20']

);