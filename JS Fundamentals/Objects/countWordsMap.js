function countWords(arr) {
    let text = arr.join('\n').toLowerCase();
    let pattern = /\w+/g;
    let words = text.match(pattern);
    let map = new  Map();

    for(let word of words){
        map.has(word) ? map.set(word,map.get(word) + 1) : map.set(word,1);
    }

    let allWords = Array.from(map.keys()).sort();
    allWords.forEach(word => {
        console.log(`'${word}' -> ${map.get(word)} times`)
    });

}
countWords(['Far too slow, you\'re far too slow.']);