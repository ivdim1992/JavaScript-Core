function solve(str) {
    let startInd = str.indexOf('(');
    let endInd = str.indexOf(')',startInd);
    let result = [];

    while (startInd > -1 && endInd > -1){
        let word = str.substring(startInd + 1,endInd);
        result.push(word);

        startInd = str.indexOf('(',endInd);
        endInd = str.indexOf(')',startInd);
}
    console.log(result.join(', '))
}
solve('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');