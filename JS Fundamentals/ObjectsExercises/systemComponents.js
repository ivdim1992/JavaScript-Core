function components(strArr){
    let systemMap = new Map();

    for(let row of strArr){
        let [systemName,componentName,subcomponentName] = row.split(/\s\|\s/);

        if(!systemMap.has(systemName)){
            systemMap.set(systemName,new Map());
        }
        if(!systemMap.get(systemName).has(componentName)){
            systemMap.get(systemName).set(componentName,[]);
        }
        systemMap.get(systemName).get(componentName).push(subcomponentName);
    }

    let sortedSystems = Array.from(systemMap.keys()).sort(systemSorted);

    for(let system of sortedSystems){
        console.log(system);

        let sortedComponents = Array.from(systemMap.get(system).keys())
            .sort((com1,com2) => sortComponents(system,com1,com2));

        for(let component of sortedComponents){
            console.log(`|||${component}`);
            systemMap.get(system).get(component).forEach(cm => console.log(`||||||${cm}`));
        }
    }



    function sortComponents(system,com1,com2) {
        return systemMap.get(system).get(com2).length - systemMap.get(system).get(com1).length;
    }

    function systemSorted(sys1,sys2) {
        if(systemMap.get(sys1).size !== systemMap.get(sys2).size){
            return systemMap.get(sys2).size - systemMap.get(sys1).size;
        }else {
            return sys1.toLowerCase().localeCompare(sys2.toLowerCase());
        }
    }
}
components([
    "SULS | Main Site | Home Page",
    "SULS | Main Site | Login Page",
    "SULS | Main Site | Register Page",
    "SULS | Judge Site | Login Page",
    "SULS | Judge Site | Submittion Page",
    "Lambda | CoreA | A23",
    "SULS | Digital Site | Login Page",
    "Lambda | CoreB | B24",
    "Lambda | CoreA | A24",
    "Lambda | CoreA | A25",
    "Lambda | CoreC | C4",
    "Indice | Session | Default Storage",
    "Indice | Session | Default Security"
]);