function solve(number) {
    let rows = Number(number);
    let sequence = 'ATCGTTAGGG';
    let index = 0;

    for (let i = 0; i < rows; i++){
        if(i % 4 === 0){
            console.log(`**${sequence[index++]}${sequence[index++]}**`)
        }else if (i % 4 === 1 || i % 4 === 3){
            console.log(`*${sequence[index++]}--${sequence[index++]}*`)
        }else if(i % 4 === 2){
            console.log(`${sequence[index++]}----${sequence[index++]}`)
        }

        if(index >= sequence.length){
            index = 0;
        }

    }
}
solve(10);