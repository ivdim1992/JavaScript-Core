function words(str) {
    let patternt = /\w+/g;

    let matchedWords = str.match(patternt);
    console.log(matchedWords.join('|'))
}
words('A Regular Expression needs to have the global flag in order to match all occurrences in the text')