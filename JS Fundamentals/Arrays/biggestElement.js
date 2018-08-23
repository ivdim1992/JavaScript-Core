function matrix(matrix) {
    let smallestNum = Number.MIN_SAFE_INTEGER;
   for (let row = 0; row < matrix.length; row++){
        for (let col = 0; col < matrix[row].length; col++){
            if (matrix[row][col] > smallestNum){
                smallestNum = matrix[row][col];
            }
        }
   }
   console.log(smallestNum)

}
matrix([
    [20,50,10],
    [8,33,145]
]);