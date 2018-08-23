function matrix(matrix) {
    let firstDiagonal = 0;
    let secondDiagonal = 0;
    for (let row = 0; row < matrix.length; row++) {

         firstDiagonal += matrix[row][row];
         secondDiagonal += matrix[row][matrix[row].length - 1 - row];
    }
    console.log(firstDiagonal, secondDiagonal)
}

matrix([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]);