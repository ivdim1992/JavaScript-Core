function solve(arrObj,battles) {
    let kingdoms = {};

    for (let row of arrObj){
        let [kingdom,general,army] = [row.kingdom,row.general,row.army];

        if(!kingdoms.hasOwnProperty(kingdom)){
            kingdoms[kingdom] = {WON:0,LOST:0}
        }
        if(!kingdoms[kingdom].hasOwnProperty(general)){
            kingdoms[kingdom][general] = {army:0,wins:0,looses:0}
        }
        let currentArmy = kingdoms[kingdom][general].army;
        kingdoms[kingdom][general].army = currentArmy + army;
    }

    for(let battle of battles){
        let [attKing,attGen,defKing,defGen] = battle;

        if(attKing !== defKing){
            if(kingdoms[attKing][attGen].army > kingdoms[defKing][defGen].army){
                battleField(attKing,attGen,defKing,defGen,kingdoms)
            }else if(kingdoms[defKing][defGen].army > kingdoms[attKing][attGen].army){
                battleField(defKing,defGen,attKing,attGen,kingdoms)
            }
        }
    }



    let winnerKingdom = [...Object.keys(kingdoms)].sort((a, b) => findWinnerKingdom(a, b, kingdoms))[0];
    console.log(winnerKingdom);
    console.log("Winner: " + winnerKingdom);
    delete kingdoms[winnerKingdom].WON;
    delete kingdoms[winnerKingdom].LOST;
    let sortedArmies = [...Object.keys(kingdoms[winnerKingdom])].sort((a, b) => findBiggestArmy(a, b, kingdoms, winnerKingdom));

    for(let general of sortedArmies){
        console.log("/\\general: " + general);
        console.log("---army: " + kingdoms[winnerKingdom][general].army);
        console.log("---wins: " + kingdoms[winnerKingdom][general].wins);
        console.log("---losses: " + kingdoms[winnerKingdom][general].looses);
    }

    function battleField(winnerK, winnerG, looserK, looserG, result) {
        result[winnerK].WON = result[winnerK].WON + 1;
        let generalWins = result[winnerK][winnerG].wins;
        result[winnerK][winnerG].wins = generalWins + 1;
        result[winnerK][winnerG].army = Math.floor(result[winnerK][winnerG].army * 1.10);

        result[looserK].LOST = result[looserK].LOST + 1;
        let generalLooses = result[looserK][looserG].looses;
        result[looserK][looserG].looses = generalLooses + 1;
        result[looserK][looserG].army = Math.floor(result[looserK][looserG].army * 0.90)
    }

    function findBiggestArmy(gen1,gen2,kingdoms,king) {
        let firstArmy = kingdoms[king][gen1].army;
        let secondArmy = kingdoms[king][gen2].army;
        return secondArmy - firstArmy;
    }
    
    
    function findWinnerKingdom(kingA,kingB,kingdoms) {
        let firstKingdomWins = kingdoms[kingA].WON;
        let secondKingdomWins = kingdoms[kingB].WON;

        if(firstKingdomWins === secondKingdomWins){
            let kingOneLoses = kingdoms[kingA].LOST;
            let kingTwoLoses = kingdoms[kingB].LOST;

            if(kingOneLoses === kingTwoLoses){
              return  kingA.localeCompare(kingB)
            }
            return kingOneLoses - kingTwoLoses
        }

        return secondKingdomWins - firstKingdomWins
    }

//console.log(kingdoms)

}
solve([ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
        { kingdom: "Stonegate", general: "Ulric", army: 4900 },
        { kingdom: "Stonegate", general: "Doran", army: 70000 },
        { kingdom: "YorkenShire", general: "Quinn", army: 0 },
        { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
        { kingdom: "Maiden Way", general: "Berinon", army: 100000 } ],
    [ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Stonegate", "Ulric", "Stonegate", "Doran"],
        ["Stonegate", "Doran", "Maiden Way", "Merek"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"],
        ["Maiden Way", "Berinon", "Stonegate", "Ulric"] ]);