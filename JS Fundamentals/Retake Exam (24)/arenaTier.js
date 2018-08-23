function solve(strArr) {
    let gladiators = {};

    for (let gladiatorRows of strArr) {

        if (gladiatorRows.includes(' -> ')) {
            let [gladiator, technique, skill] = gladiatorRows.split(' -> ');
            skill = Number(skill);
            if (!gladiators.hasOwnProperty(gladiator)) {
                gladiators[gladiator] = {};
                gladiators[gladiator][technique] = skill;
                gladiators[gladiator]['totalPoints'] = skill
            }else {
                if (!gladiators[gladiator].hasOwnProperty(technique)){
                    gladiators[gladiator][technique] = skill;
                    gladiators[gladiator]['totalPoints'] += skill
                }else {
                    if (gladiators[gladiator][technique] < skill){
                        gladiators[gladiator]['totalPoints'] -= gladiators[gladiator][technique];
                        gladiators[gladiator]['totalPoints'] += skill;
                        gladiators[gladiator][technique] = skill;
                    }
                }
            }

        } else if (gladiatorRows.includes(' vs ')) {

                let [gladiator1,gladiator2] = gladiatorRows.split(' vs ');
                if(gladiators.hasOwnProperty(gladiator1) && gladiators.hasOwnProperty(gladiator2)){
                    for(let items in gladiators[gladiator1]){
                        let glad1Score = gladiators[gladiator1][items];
                        let glad2Score = gladiators[gladiator2][items];
                        if(gladiator1 && gladiator2 && items !== 'totalPoints'){
                            if(glad1Score > glad2Score){
                                delete gladiators[gladiator2];
                                break;
                            }else if(glad1Score < glad2Score){
                                delete gladiators[gladiator1]
                            }
                        }
                    }
                }

        } else {
            break;
        }
    }


    let sortedGladiators = Object.keys(gladiators).sort((g1,g2) => {
        let differenceInScore = gladiators[g2]['totalPoints'] - gladiators[g1]['totalPoints'];
        if(differenceInScore === 0){
           return g1.localeCompare(g2)
        }
        return differenceInScore
    });

    for(let g1 of sortedGladiators){
        console.log(`${g1}: ${gladiators[g1]['totalPoints']} skill`);
        let sortedItems = Object.keys(gladiators[g1]).filter(i => i !== 'totalPoints').sort((i1,i2) => {
                let differenceInScore = gladiators[g1][i2] - gladiators[g1][i1];
                if(differenceInScore === 0){
                    return i1.localeCompare(i2)
                }
                return differenceInScore
            });
        for(let item of sortedItems){
            console.log(`- ${item} <!> ${gladiators[g1][item]}`)
        }
    }
}

solve([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Pesho vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Gosho',
    'Ave Cesar'

]);