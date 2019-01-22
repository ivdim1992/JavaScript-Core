function solve(strArr) {

    let gladiatorsMap = new Map();

    for (let row of strArr) {
        if (row.includes(' -> ')) {
            let [gladiator, technique, skill] = row.split(' -> ');
            skill = Number(skill);

            if (!gladiatorsMap.has(gladiator)) {
                gladiatorsMap.set(gladiator, new Map());
                gladiatorsMap.get(gladiator).set('totalPoints', skill);
            } else {
                gladiatorsMap.get(gladiator).set('totalPoints', gladiatorsMap.get(gladiator).get('totalPoints') + skill)
            }
            if (!gladiatorsMap.get(gladiator).has(technique)) {
                gladiatorsMap.get(gladiator).set(technique, skill)
            } else {
                if (gladiatorsMap.get(gladiator).get(technique) < skill) {
                    gladiatorsMap.get(gladiator).set(technique, skill)
                }
            }
        } else if (row.includes(' vs ')) {
            let [glad1, glad2] = row.split(' vs ');

            if (gladiatorsMap.has(glad1) && gladiatorsMap.has(glad2)) {

                [...gladiatorsMap.get(glad1)].forEach(function (teh1,teh2) {
                    console.log(teh1)
                    teh1 = teh1.filter(el => el !== 'totalPoints');
                    if(teh1 === teh1){

                    }
                })


                // for (let techniques of gladiatorsMap.get(glad1)){
                //     let glad1Skill = gladiatorsMap.get(glad1).get(techniques);
                //     let glad2Skill = gladiatorsMap.get(glad2).get(techniques);
                //
                //
                //     if(glad1 && glad2 && techniques !== 'totalPoints'){
                //         if(glad1Skill > glad2Skill){
                //             delete gladiatorsMap.get(glad2)
                //             break;
                //         }else if(glad2Skill > glad1Skill) {
                //             delete gladiatorsMap.get(glad1)
                //         }
                //     }
                // }
            }


        } else {

        }
    }

    let sortedGladiators = [...gladiatorsMap.keys()].sort(function (gl1, gl2) {
        let firstCriteria = gladiatorsMap.get(gl2).get('totalPoints') - gladiatorsMap.get(gl1).get('totalPoints');
        if (firstCriteria === 0) {
            return gl2.localeCompare(gl1)
        } else {
            return firstCriteria
        }
    });

    for (let gladiator of sortedGladiators) {
        // console.log(`${gladiator}: ${gladiatorsMap.get(gladiator).get('totalPoints')} skill`)
        let sortedSkills = [...gladiatorsMap.get(gladiator).keys()].filter(el => el !== 'totalPoints').sort(function (teh1, teh2) {
            let firstCriteria = gladiatorsMap.get(gladiator).get(teh2) - gladiatorsMap.get(gladiator).get(teh1)
            if (firstCriteria === 0) {
                return teh1.localeCompare(teh2)
            } else {
                return firstCriteria
            }
        });
        for (let technique of sortedSkills) {
            // console.log(`- ${technique} <!> ${gladiatorsMap.get(gladiator).get(technique)}`)
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