function solve(str) {
    let pattern = /(\-*[0-9]+)\s*\*\s*([\-0-9]+\.*[0-9]+)/g;
    let match = pattern.exec(str)
    let result = [];

    while (match) {

        result.push(Number(match[1]), Number(match[2]));
        match = pattern.exec(str);
    }

    if (result.length > 6) {
        console.log(`My bill is: ${result[0] * result[1]} (beer); ${result[2] * result[3]} (kepab); ${result[4] * result[5]} (salad); ${result[6] * result[7]} (deposit).`)
    } else {
        console.log(`My bill: ${result[0] * result[1]} (beer); ${result[2] * result[3]} (kepab); ${result[4] * result[5]} (deposit).`)
    }
}

solve('My bill is: 4 * 2.50 (beer); 12* 1.50 (kepab); 1  *4.50 (salad); 2  * -0.5 (deposit).');