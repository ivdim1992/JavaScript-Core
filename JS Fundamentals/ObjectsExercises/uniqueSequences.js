function sequences(strArr) {
    let unique = [];

    for(let row of strArr){
        let numArr = JSON.parse(row).map(Number).sort((a,b) => b-a);
        let currentSum = numArr.reduce((a,b) => a + b);
        if(!unique.find(arr => arr.reduce((a,b) => a + b) === currentSum)){
            unique.push(numArr)
        }
    }

        unique.sort((a,b) => a.length > b.length).forEach(arr => console.log(`[${arr.join(', ')}]`))
}

sequences([
    '[-3, -2, -1, 0, 1, 2, 3, 4]',
    '[10, 1, -17, 0, 2, 13]',
    '[4, -3, 3, -2, 2, -1, 1, 0]'
]);