function solve(strArr) {
    let resultMap = new Map();

    for (let row of strArr) {
        let [systemName, componentName, subComponentName] = row.split(/\s\|\s/);

        if (!resultMap.has(systemName)) {
            resultMap.set(systemName, new Map())
        }
        if (!resultMap.get(systemName).has(componentName)) {
            resultMap.get(systemName).set(componentName, [])
        }
        resultMap.get(systemName).get(componentName).push(subComponentName)

    }

    let sortedSystems = [...resultMap.keys()].sort(sortSystems);

    for(let system of sortedSystems){
       console.log(system);
       let sortedValues = [...resultMap.get(system).keys()].sort((comp1,comp2) => {
           sortedComponents(system,comp1,comp2)
       });
        for(let compName of sortedValues){
            console.log(`|||${compName}`);
            resultMap.get(system).get(compName).forEach(el => console.log(`||||||${el}`))
        }
    }
   // console.log(resultMap)

     function sortedComponents(sys,comp1,comp2) {
         return resultMap.get(sys).get(comp2).length - resultMap.get(sys).get(comp1).length
     }
    function sortSystems(sys1,sys2) {
        if(resultMap.get(sys1).size !== resultMap.get(sys2).size){
            return resultMap.get(sys2).size - resultMap.get(sys1).size;
        }else {
          return  sys1.toLowerCase().localeCompare(sys2.toLowerCase())
        }
    }
}

solve([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);