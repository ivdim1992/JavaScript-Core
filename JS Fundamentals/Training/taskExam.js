let a = 5;
a = 5**
console.log(a)


/*function solve(strArr) {

    let teamsMap = new Map();

    for(let row of strArr){
        let [team,name,points] = row.split(' -> ');
        points = Number(points);

        if(!teamsMap.has(team)){
            teamsMap.set(team,new Map())
        }
        if(!teamsMap.get(team).has(name)){
            teamsMap.get(team).set(name,points)
        }else {
            teamsMap.get(team).set(name,teamsMap.get(team).get(name) + points)
        }
    }


    let sortedTeams = [...teamsMap.entries()].sort((a,b) => {
        console.log(a[1])
    }).slice(0,3)

    // console.log(sortedTeams)
}

solve([
    'Ferrari -> Kimi Raikonnen -> 25',
    'Ferrari -> Sebastian Vettel -> 18',
    'Mercedes -> Lewis Hamilton -> 10',
    'Mercedes -> Valteri Bottas -> 8',
    'Red Bull -> Max Verstapen -> 6',
    'Red Bull -> Daniel Ricciardo -> 4'
]);
*/
