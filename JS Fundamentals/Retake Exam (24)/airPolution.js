function solve(matrixValues, strArr) {
    let matrix = [];
    let pollutedAreas = [];
    for (let i = 0; i < matrixValues.length; i++) {
        matrix[i] = matrixValues[i].split(' ').map(Number)
    }

    for (let commands of strArr) {
        let [command, index] = commands.split(' ');
        index = Number(index);


        if (command === 'breeze') {
            for (let col = 0; col < matrix.length; col++) {
                matrix[index][col] -= 15;
                if(matrix[index][col] < 0){
                    matrix[index][col] = 0;
                }
            }
        }else if(command === 'gale'){
            for (let row = 0; row < matrix.length; row++){
                matrix[row][index] -= 20;
                if(matrix[row][index] < 0){
                    matrix[row][index] = 0;
                }
            }
        }else if(command === 'smog'){
            for (let row = 0; row < matrix.length; row++){
                for (let col = 0; col < matrix[row].length; col++){
                    matrix[row][col] += index;
                }

            }
        }

    }

    for (let row = 0; row < matrix.length; row++){
        for (let col = 0; col < matrix[row].length; col++){
            if(matrix[row][col] >= 50){
                pollutedAreas.push(`[${row}-${col}]`)
            }
        }

    }

    if(pollutedAreas.length > 0){
        console.log(`Polluted areas: ${pollutedAreas.join(', ')}`)

    }else{
        console.log('No polluted areas')
    }


}

solve([
        '5 7 72 14 4',
        '41 35 37 27 33',
        '23 16 27 42 12',
        '2 20 28 39 14',
        '16 34 31 10 24',
    ],
    ['smog 11', 'gale 3','breeze 1', 'smog 2']);
