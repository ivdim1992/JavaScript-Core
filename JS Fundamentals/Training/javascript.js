function market(strArr) {

    let systemsMap = new Map();

    for(let row of strArr){
        let [systemName,componentName,subcomponentName] = row.split(' | ');

        if(!systemsMap.has(systemName)){
            systemsMap.set(systemName,new Map())
        }
        if(!systemsMap.get(systemName).has(componentName)){
            systemsMap.get(systemName).set(componentName,[])
        }
        systemsMap.get(systemName).get(componentName).push(subcomponentName)
    }

    let sortedSystems = [...systemsMap.keys()].sort(sortationSystem)


    for(let system of sortedSystems){
        console.log(system)
        let sortedComponents = Array.from(systemsMap.get(system).keys()).sort((sub1,sub2) => sortedValues(system,sub1,sub2))
        for(let component of sortedComponents){
            console.log(`|||${component}`)
            systemsMap.get(system).get(component).forEach(cm => console.log(`||||||${cm}`))
        }
    }

    function sortedValues(system,sub1,sub2) {
        return systemsMap.get(system).get(sub2).length - systemsMap.get(system).get(sub1).length
    }

    function sortationSystem(sys1,sys2) {
        if(systemsMap.get(sys1).size !== systemsMap.get(sys2).size){
            return systemsMap.get(sys1) - systemsMap.get(sys2)
        }else {
            return sys1.localeCompare(sys2)
        }

    }
}

market([
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