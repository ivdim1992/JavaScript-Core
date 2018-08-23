function orbit(arr) {
    let [rows,cols,x,y] = arr;
    let matrix = [];

    for (let i = 0; i < rows; i++){
        matrix.push('0'.repeat(cols).split('').map(Number))
    }

    let num = 1;
    matrix[x][y] = num;
    let currentRow = x;
    let currentCol = y;
    let counter = 1;

    while (true){
        let isFilled = false;
        num++;

        let startRow = Math.max(0,currentRow - counter);
        let endRow = Math.min(matrix.length - 1,currentRow + counter);
        let startCol = Math.max(0,currentCol - counter);
        let endCol = Math.min(matrix[0].length - 1,currentCol + counter);

        for (let row = startRow; row <= endRow; row++){
            for (let col = startCol; col <= endCol; col++){
                if(matrix[row][col] === 0){
                    matrix[row][col] = num;
                    isFilled = true;
                }
            }
        }

        counter++;
        if(!isFilled){
            break;
        }
    }
console.log(matrix.map(row => row.join(' ')).join('\n'))
}
orbit([4,4,0,0]);