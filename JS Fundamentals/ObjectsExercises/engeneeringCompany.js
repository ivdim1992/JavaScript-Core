function company(strArr){
    let summaryMap = new Map();

    for(let row of strArr){
        let [carBrand,carModel,producedCars] = row.split(/\s\|\s/);
        producedCars = Number(producedCars);

        if(!summaryMap.has(carBrand)){
            summaryMap.set(carBrand,new Map())
        }
        if(!summaryMap.get(carBrand).has(carModel)){
            summaryMap.get(carBrand).set(carModel,producedCars)
        }else {
            summaryMap.get(carBrand).set(carModel,summaryMap.get(carBrand).get(carModel) + producedCars)
        }
    }

    for(let [car,innerMap] of summaryMap){
        console.log(car);
        for(let [carModel,producedCar] of innerMap){
            console.log(`###${carModel} -> ${producedCar}`)
        }
    }
}
company([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);