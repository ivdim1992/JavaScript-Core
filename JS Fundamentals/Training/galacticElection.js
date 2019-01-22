function solve(arrObj) {

    let systemsMap = new Map();

    for(let row of arrObj){
        let systems = row.system;
        let candidates = row.candidate;
        let votes = Number(row.votes);

        if(!systemsMap.has(systems)){
            systemsMap.set(systems,new Map())
        }
        if(!systemsMap.get(systems).has(candidates)){
            systemsMap.get(systems).set(candidates,votes)
        }else {
            systemsMap.get(systems).set(candidates,systemsMap.get(systems).get(candidates) + votes)
        }
    }

    let result = new Map();

    for(let [system,innerValues] of [...systemsMap]){

      let sortedValues = [...innerValues].sort((a,b) => {
          return b[1] - a[1]
      });

        sortedValues =  sortedValues.reduce((a,b) => {
            return [a[0], a[1] + b[1]]
        });

        let candidate = sortedValues[0];
        let votes = sortedValues[1];

        if(!result.has(candidate)){
            result.set(candidate,new Map())
        }
        if(!result.get(candidate).has(system)){
            result.get(candidate).set(system,votes)
        }
    }

    let ranking = [...result].map(([c, s]) =>
        [c, [...s].map(([s, v]) => v)
            .reduce((a, b) => a + b)]);

    ranking.sort((a,b) => {
        return b[1] - a[1]
    })

    let total = ranking.map(([c, v]) => v).reduce((a, b) => a + b);

    if (ranking[0][1] > total / 2) {
        console.log(`${ranking[0][0]} wins with ${ranking[0][1]} votes`);
        if (ranking.length > 1) {
            let runnerup = ranking[1][0];
            console.log(`Runner up: ${runnerup}`);
            [...result.get(runnerup)].sort(([s1, v1], [s2, v2]) => v2 - v1).forEach(s => console.log(`${s[0]}: ${s[1]}`))
        } else {
            console.log(`${ranking[0][0]} wins unopposed!`);
        }
    } else {
        console.log(`Runoff between ${ranking[0][0]} with ${Math.floor(ranking[0][1] / total * 100)}% and ${ranking[1][0]} with ${Math.floor(ranking[1][1] / total * 100)}%`);
    }

}

solve([
    { system: 'Theta', candidate: 'Flying Shrimp', votes: 10 },
    { system: 'Sigma', candidate: 'Space Cow', votes: 200 },
    { system: 'Sigma', candidate: 'Flying Shrimp', votes: 120 },
    { system: 'Tau', candidate: 'Space Cow', votes: 15 },
    { system: 'Sigma', candidate: 'Space Cow', votes: 60 },
    { system: 'Tau', candidate: 'Flying Shrimp', votes: 150 }
]);