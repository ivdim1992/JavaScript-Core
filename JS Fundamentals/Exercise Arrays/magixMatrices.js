function matrix(arr) {
    let sumOfFirstRow = arr[0].reduce((a,b) => a + b);
   ////let sumRow = 0;
   //let sumColon = 0;

    for (let row = 0; row < arr.length; row++){
        let sumRow,sumColon = 0;

        for (let col = 0; col < arr.length; col++){
            sumRow += arr[row][col];
            sumColon += arr[col][row];

        }
        if(sumRow !== sumColon || sumColon !== sumOfFirstRow){
            return false
        }
    }
    return true
}

console.log(matrix([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]));