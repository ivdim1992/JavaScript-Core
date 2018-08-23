function variableNames(str) {
    let pattern = /_[a-zA-Z0-9]+/g;
    let match = pattern.exec(str);
    let result = [];

    while (match){
        result.push(match[0])
        match = pattern.exec(str);
    }
    console.log(result.join(',').split('_').filter(el => el !== '').join(''))
}

variableNames('The _id and _age variables are both integers.');