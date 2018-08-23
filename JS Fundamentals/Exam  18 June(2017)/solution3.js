function solve3(strArr) {
    let pattern = /\b[A-Z][a-z]+[A-Z]\b/g;
    let pattern1 = /\d{3}\.*[0-9]*/gm;
    let startingPoint = strArr[0];
    let endingPoint = strArr[1];
    let textToReplace = strArr[2];
    let text = strArr[3];
    
    let matches = pattern.exec(text);
    let matches1 = pattern1.exec(text);

    let country = matches[0];
    country = country.replace(country.substring(startingPoint,endingPoint + 1),textToReplace);
    country = country.toLowerCase();
    country = country.charAt(0).toUpperCase() + country.slice(1)





    let result = [];
    while (matches1) {
        let match1 = Math.ceil(matches1[0]);
        result.push(match1)
        matches1 = pattern1.exec(text);
    }

    let resultWord = result.map(ch => String.fromCharCode(ch)).join('');
    resultWord = capitalizeFirstLetter(resultWord)
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


console.log(`${country} => ${resultWord}`)



}
solve3(["3", "5", "gar","114 sDfia 1," +
" riDl10 confin$4%#ed117 likewise it humanity aTe114.223432 BultoriA - Varnd railLery101 an unpacked as he"]);