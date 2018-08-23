function modify(number) {
    let strNumber = number.toString();
    let average = sumAverage(strNumber);


     let addNine = (num) => num + '9';

    function sumAverage(strNumber) {
        let sum = 0;
        for (let i = 0; i < strNumber.length; i++){
            sum += Number(strNumber[i]);
        }
        return sum / strNumber.length;
    }

    while (average <= 5){
        strNumber = addNine(strNumber);
        average = sumAverage(strNumber);
    }
    console.log(strNumber)
}

modify(5789);