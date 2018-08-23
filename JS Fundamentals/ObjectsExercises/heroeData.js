function heroe(strArr) {

    let heroeData = [];

    for(let row of strArr){
        let tokens = row.split(' / ');

        let heroName = tokens[0];
        let heroLevel = Number(tokens[1]);
        let heroItems = [];

        if (tokens.length > 2){
            heroItems = tokens[2].split(', ');
        }
        let hero = {
            name: heroName,
            level: heroLevel,
            items: heroItems
        };

        heroeData.push(hero);
    }

    console.log(JSON.stringify(heroeData))
}
heroe([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);