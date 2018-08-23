function validityChecker(input) {
    let x1 = input[0];
    let y1 = input[1];
    let x2 = input[2];
    let y2 = input[3];

    let distanceTo0x1 = Math.sqrt(Math.pow(x1,2) + Math.pow(y1,2));
    if (distanceTo0x1 === parseInt(distanceTo0x1)){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    }else{
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }

    let distanceTo0x2 = Math.sqrt(Math.pow(x2,2) + Math.pow(y2,2));
    if (distanceTo0x2 === parseInt(distanceTo0x2)){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    }else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
    }

    let distanceBetweenPoints = Math.sqrt(Math.pow(x2 - x1,2) + Math.pow(y2 - y1,2));
    if (distanceBetweenPoints === parseInt(distanceBetweenPoints)){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    }else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }
}