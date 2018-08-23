function solve(strArr) {
    let gladiators = {};

    for (let row of strArr) {
        if (row.includes(' -> ')) {
            let [gladiator, technique, skill] = row.split(/\s->\s/);
            skill = Number(skill);

            if(!gladiators.hasOwnProperty(gladiator)){
                gladiators[gladiator] = {};
                gladiators[gladiator][technique] = skill;
                gladiators[gladiator]['totalPoints'] = skill;
            }else {
                if(!gladiators[gladiator].hasOwnProperty(technique)){
                    gladiators[gladiator][technique] = skill;
                    gladiators[gladiator]['totalPoints'] += skill;
                }else {
                    if(gladiators[gladiator][technique] < skill){
                        gladiators[gladiator][technique] = skill;
                        gladiators[gladiator]['totalPoints'] -= gladiators[gladiator][technique];
                        gladiators[gladiator]['totalPoints'] += skill;
                    }
                }
            }


        } else if (row.includes(' vs ')) {
            let [gladiator1,gladiator2] = row.split(/\svs\s/);
            if(gladiators.hasOwnProperty(gladiator1) && gladiators.hasOwnProperty(gladiator2)){
                for(let techniques in gladiators[gladiator1]){
                    let glad1Skill = gladiators[gladiator1][techniques];
                    let glad2Skill = gladiators[gladiator2][techniques];

                    if(gladiator1 && gladiator2 && techniques !== 'totalPoints'){
                        if(glad1Skill > glad2Skill){
                            delete  gladiators[gladiator2]
                            break;
                        }else if (glad2Skill > glad1Skill){
                            delete gladiators[gladiator1]
                        }
                    }
                }
            }

        } else {

        }
    }
    let sortedGladiators = Object.keys(gladiators).sort((gl1,gl2) => {
        let differenceInSkill = gladiators[gl2]['totalPoints'] - gladiators[gl1]['totalPoints'];
        if(differenceInSkill === 0){
            return gl1.localeCompare(gl2)
        }
        return differenceInSkill;
    });

    for(let gladiator of sortedGladiators) {
        console.log(`${gladiator}: ${gladiators[gladiator]['totalPoints']} skill`);

        let sortedTechnique = Object.keys(gladiators[gladiator]).filter(el => el !== 'totalPoints')
            .sort((tech1, tech2) => {
            let differenceInSkill = gladiators[gladiator][tech2] - gladiators[gladiator][tech1];
            if(differenceInSkill === 0){
                return tech1.localeCompare(tech2)
            }
            return differenceInSkill
        });
        for(let technique of sortedTechnique){
            console.log(`- ${technique} <!> ${gladiators[gladiator][technique]}`)
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