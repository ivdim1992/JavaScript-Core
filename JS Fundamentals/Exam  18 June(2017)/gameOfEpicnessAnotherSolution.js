function gameOfEpicness(kingdoms, battles) {
    //Object where I store the armies.
    let armies = {};

    //Populating object
    for (let kingdom of kingdoms) {
        if (!armies.hasOwnProperty(kingdom.kingdom)) {
            armies[kingdom.kingdom] = {};

        }
        if (!armies[kingdom.kingdom].hasOwnProperty(kingdom.general)) {
            armies[kingdom.kingdom]['kingdomWins'] = 0;
            armies[kingdom.kingdom]['kingdomLoses'] = 0;
            armies[kingdom.kingdom][kingdom.general] = {};
            armies[kingdom.kingdom][kingdom.general]['army'] = 0;
        }

        armies[kingdom.kingdom][kingdom.general]['army'] += Number(Math.floor(kingdom.army));
        armies[kingdom.kingdom][kingdom.general]['wins'] = 0;
        armies[kingdom.kingdom][kingdom.general]['loses'] = 0;
    }

    //Battles
    for (let battle of battles) {
        for (let i = 0; i < battle.length; i += 4) {
            //Fak me. This is noobish.
            let attackerKingdom = battle[i];
            let attackerGeneral = battle[i + 1];
            let defenderKingdom = battle[i + 2];
            let defenderGeneral = battle[i + 3];

            if (attackerKingdom === defenderKingdom) {
                continue;
            } else {
                if (armies.hasOwnProperty(attackerKingdom) && armies.hasOwnProperty(defenderKingdom)) {
                    let attackerGeneralArmy = armies[attackerKingdom][attackerGeneral]['army'];
                    let attackerGeneralWins = armies[attackerKingdom][attackerGeneral]['wins'];
                    let attackerGeneralLoses = armies[attackerKingdom][attackerGeneral]['loses'];

                    let defenderGeneralArmy = armies[defenderKingdom][defenderGeneral]['army'];
                    let defenderGeneralWins = armies[defenderKingdom][defenderGeneral]['wins'];
                    let defenderGeneralLoses = armies[defenderKingdom][defenderGeneral]['loses'];

                    // console.log(armies);
                    if (attackerGeneralArmy > defenderGeneralArmy) {
                        armies[attackerKingdom]['kingdomWins']++;
                        armies[defenderKingdom]['kingdomLoses']++;
                        attackerGeneralArmy = Math.floor(attackerGeneralArmy * 1.1);
                        defenderGeneralArmy = Math.floor(defenderGeneralArmy * 0.9);
                        attackerGeneralWins++;
                        defenderGeneralLoses++;
                    } else if (attackerGeneralArmy < defenderGeneralArmy) {
                        armies[defenderKingdom]['kingdomWins']++;
                        armies[attackerKingdom]['kingdomLoses']++;
                        attackerGeneralArmy = Math.floor(attackerGeneralArmy * 0.9);
                        defenderGeneralArmy = Math.floor(defenderGeneralArmy * 1.1);
                        attackerGeneralLoses++;
                        defenderGeneralWins++;
                    }

                    armies[attackerKingdom][attackerGeneral]['army'] = attackerGeneralArmy;
                    armies[attackerKingdom][attackerGeneral]['wins'] = attackerGeneralWins;
                    armies[attackerKingdom][attackerGeneral]['loses'] = attackerGeneralLoses;

                    armies[defenderKingdom][defenderGeneral]['army'] = defenderGeneralArmy;
                    armies[defenderKingdom][defenderGeneral]['wins'] = defenderGeneralWins;
                    armies[defenderKingdom][defenderGeneral]['loses'] = defenderGeneralLoses;
                }
            }
        }
    }

    //Sorting kingdoms by total wins descending then by total loses ascending and finally by name alphabetically.
    let sortedKingdoms = Object.keys(armies).sort((k1, k2) => {
        let diffInWins = armies[k2]['kingdomWins'] - armies[k1]['kingdomWins'];
        if (diffInWins === 0) {
            let diffInLoses = armies[k1]['kingdomLoses'] - armies[k2]['kingdomLoses'];
            if (diffInLoses === 0) {
                return k1.localeCompare(k2);
            }
            return diffInLoses;
        }
        return diffInWins;
    });

    //Sorting generals by army descending.
    let sortedGenerals = Object.keys(armies[sortedKingdoms[0]]).filter(i => i !== 'kingdomWins' && i !== 'kingdomLoses').sort((g1, g2) => {
        return armies[sortedKingdoms[0]][g2]['army'] - armies[sortedKingdoms[0]][g1]['army'];
    });

    //Printing the result.
    console.log(`Winner: ${sortedKingdoms[0]}`);
    for (let i = 0; i < sortedGenerals.length; i++) {
        console.log(`/\\general: ${sortedGenerals[i]}
---army: ${armies[sortedKingdoms[0]][sortedGenerals[i]]['army']}
---wins: ${armies[sortedKingdoms[0]][sortedGenerals[i]]['wins']}
---losses: ${armies[sortedKingdoms[0]][sortedGenerals[i]]['loses']}`);

    }
}

gameOfEpicness([{kingdom: "Maiden Way", general: "Merek", army: 5000},
        {kingdom: "Stonegate", general: "Ulric", army: 4900},
        {kingdom: "Stonegate", general: "Doran", army: 70000},
        {kingdom: "YorkenShire", general: "Quinn", army: 0},
        {kingdom: "YorkenShire", general: "Quinn", army: 2000},
        {kingdom: "Maiden Way", general: "Berinon", army: 100000}],
    [["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Stonegate", "Ulric", "Stonegate", "Doran"],
        ["Stonegate", "Doran", "Maiden Way", "Merek"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"],
        ["Maiden Way", "Berinon", "Stonegate", "Ulric"]]
);

// console.log('-------------------');
//
// gameOfEpicness([ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
//         { kingdom: "Stonegate", general: "Ulric", army: 4900 },
//         { kingdom: "Stonegate", general: "Doran", army: 70000 },
//         { kingdom: "YorkenShire", general: "Quinn", army: 0 },
//         { kingdom: "YorkenShire", general: "Quinn", army: 2000 } ],
//     [ ["YorkenShire", "Quinn", "Stonegate", "Doran"],
//         ["Stonegate", "Ulric", "Maiden Way", "Merek"] ]
// )