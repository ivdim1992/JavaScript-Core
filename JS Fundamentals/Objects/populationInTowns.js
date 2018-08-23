function population(strArr) {
    let towns = new Map();
    for(let row of strArr){
        let [town,population] = row.split(' <-> ');

        if(!towns.has(town)){
            towns.set(town,0)
        }
        towns.set(town,towns.get(town) + Number(population))
    }
    [...towns].forEach(([town,population]) => console.log(`${town} : ${population}`))
}
population([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
]);