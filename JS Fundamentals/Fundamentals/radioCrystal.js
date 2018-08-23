function crystal(arr) {
    let targetThickness = arr[0];

    let cut = (num) => num / 4;
    let lap = (num) => num * 0.8;
    let grind = (num) => num - 20;
    let etch = (num) => num - 2;

    let xray = (num) => {
        console.log('X-ray x1');
        return ++num;
    };
    let transportAndWashing = (num) => {
        console.log('Transporting and washing');
        return Math.floor(num);
    };

    for (let i = 1; i < arr.length; i++){
        let microns = arr[i];
        console.log(`Processing chunk ${microns} microns`);
        microns = checkingTheOperations(targetThickness,microns,'Cut',cut);
        microns = checkingTheOperations(targetThickness,microns,'Lap',lap);
        microns = checkingTheOperations(targetThickness,microns,'Grind',grind);
        microns = checkingTheOperations(targetThickness,microns,'Etch',etch);

        if(targetThickness - microns === 1){
            xray(microns);
        }

        console.log(`Finished crystal ${targetThickness} microns`)
    }
    
    function checkingTheOperations(targetNumber,microns,operationName,operation) {
        let counter = 0;
        while (operation(microns) >= targetNumber || microns - targetNumber === 1){
            microns = operation(microns);
            counter++;
        }

        if(counter > 0){
            console.log(`${operationName} x${counter}`);
            microns = transportAndWashing(microns);
        }
        return microns;
    }

}
crystal([1375, 50000]);