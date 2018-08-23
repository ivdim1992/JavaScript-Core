function spiralMatrix(rows,cols) {
    let matrix = fillZeroes(rows,cols);
    fillMatrix(matrix,0,0,1);

    function  fillMatrix(matrix,currentRow,currentCol,counter) {

        if(matrix[currentRow][currentCol] !== 0){
            return matrix;
        }

        //fill upper side
        for (let col = currentCol; col < rows - currentRow; col++){
            matrix[currentRow][col] = counter++;
        }

        //fill right side

        for (let row = 1 + currentRow; row < cols - currentCol; row++){
                matrix[row][rows - 1 - currentRow] = counter++;
        }


        fillMatrix(matrix,++currentRow,++currentCol,counter)
    }




    function fillZeroes(rows,cols) {
        let matrix = [];

        for (let i = 0; i < rows; i++){
            matrix.push('0'.repeat(cols).split('').map(Number));
        }

        return matrix;
    }

    console.log(matrix.map(el => el.join(' ')).join('\n'));
}
spiralMatrix(5,5);