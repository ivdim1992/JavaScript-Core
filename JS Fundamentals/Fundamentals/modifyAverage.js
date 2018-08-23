function modify(number) {
    let numStr = String(number);

    let average = function(numStr) {
        let sum = 0;
        for (let i = 0; i < numStr.length; i++){
            sum += Number(numStr[i]);
        }
        return sum / numStr.length;
    };
    while (average(numStr) <= 5){
        numStr += 9;
    }
    console.log(Number(numStr))
}
modify(101);