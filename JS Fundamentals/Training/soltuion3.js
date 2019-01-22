function solve(input) {
    let sentence = input[0].split('. ');
    let notMatches = [];
    for (let i = 0; i < sentence.length; i++) {
        let bookRegex = /("[A-Za-z0-9 \-'\/:!?,]+")->(\b[A-Za-z\/' -]+\b)->(\b[1]{1}[0-9]{3}\b)/gm;
        let authorRegex = /_([A-Z][.]*[a-z]*)[ ]([a-z]*[ ]{0,1})([A-Za-z']+)_/gm;
        let current = sentence[i];
        let resultAuthor = current.match(authorRegex);
        let bookInfo = current.match(bookRegex);



        if (resultAuthor === null && bookInfo === null) {
            notMatches.push(i + 1);
        } else if (bookInfo === null) {
            let authorResult = resultAuthor[0].substr(1, resultAuthor[0].length - 2);
            console.log(`No books of ${authorResult} are currently in stock.`);
        } else {
            let authorResult = resultAuthor[0].substr(1, resultAuthor[0].length - 2);
            console.log(`${authorResult}: ${bookInfo.length}`);
            bookInfo.sort();
            for (let j = 0; j < bookInfo.length; j++) {
                let [bookName, genre, year] = bookInfo[j].split('->');
                console.log(`->Book name: ${bookName} Genre: ${genre} Year: ${year}`)
            }
        }
    }
    if (notMatches.length > 0) {
        console.log(`Sentences with missing information: ${notMatches.join(', ')}`);
    }
}