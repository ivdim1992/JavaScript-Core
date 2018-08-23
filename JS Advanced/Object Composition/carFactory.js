function solve(carObj) {

    let engine;
    let carriage = {
        type: `${carObj.carriage}`,
        color: `${carObj.color}`
    };

    let wheels = [];
    for (let i = 0; i < 4; i++) {
        let size = carObj.wheelsize;
        if(size % 2 === 0){
            wheels.push(size - 1)
        }else {
            wheels.push(size)
        }
    }



    if (carObj.power <= 90) {
        engine = {
            power: 90,
            volume: 1800
        }
    } else if (carObj.power <= 120) {
        engine = {
            power: 120,
            volume: 2400
        }
    } else if (carObj.power <= 200) {
        engine = {
            power: 200,
            volume: 3500
        }
    }

    return newCar = {
        model: `${carObj.model}`,
        engine: engine,
        carriage: carriage,
        wheels: wheels
    }
}

let carObj = {
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}


console.log(solve(carObj));