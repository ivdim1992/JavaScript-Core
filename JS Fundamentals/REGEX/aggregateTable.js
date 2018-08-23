function aggregate(arr) {
    let sum = 0;
    let towns = [];
    for (let row of arr) {
        let town = row.split('|').filter(el => el !== '');
        towns.push(town[0].trim());
        sum += Number(town[1].trim());
    }
    console.log(towns.join(', '));
    console.log(sum)
}
aggregate(['| Sofia | 300',
'| Veliko Tarnovo | 500',
'| Yambol | 275']);