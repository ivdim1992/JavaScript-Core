function solve(matrix) {
    let counter=0;
    for (let row = 0; row < matrix.length; row++){
        for (let col = 0; col < matrix[row].length; col++){

            if(matrix[row][col] === matrix[row][col+1]){
                counter++;
            }

            if(matrix[row+1] && matrix[row][col] === matrix[row+1][col]){
                counter++;
            }

        }
    }
    console.log(counter)
}
solve([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]);