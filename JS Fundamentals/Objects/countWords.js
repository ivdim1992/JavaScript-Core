function countWords(arr) {
    let text = arr.join('\n');
    let pattern = /\w+/g;
    let words = text.match(pattern);
    let obj = {};

    for(let word of words){
        obj[word] ? obj[word]++ : obj[word] = 1;

    }

console.log(JSON.stringify(obj))

}
countWords(['Far too slow, you\'re far too slow.']);