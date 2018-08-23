function roadRadar(arr) {
    let [currentSpeed,area] = [Number(arr[0]),arr[1]];
    overTheLimit(currentSpeed,area);

    function overTheLimit(speed,area) {
        let speedOverTheLimit = speed - getLimitSpeed(area);

        if(speedOverTheLimit === 0){
            console.log()
        } else if(speedOverTheLimit <= 20){
            console.log('speeding')
        } else if (speedOverTheLimit <= 40){
            console.log('excessive speeding')
        }else{
            console.log('reckless driving')
        }
    }


    function getLimitSpeed(area) {
        switch (area){
            case 'motorway': return 130;
            case 'interstate': return 90;
            case 'city': return 50;
            case 'residential': return 20;
        }
    }

}
roadRadar([21,'residential']);