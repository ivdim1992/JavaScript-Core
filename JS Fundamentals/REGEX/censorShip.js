function solve(str,text) {

    for (let word of text) {
        let replaced = '-'.repeat(word.length);

        while (str.indexOf(word) > -1){
            str = str.replace(word,replaced)
        }
    }
    console.log(str)
}

solve('roses are red, violets are blue', [', violets are', 'red']);