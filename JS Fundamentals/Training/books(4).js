function solve(input) {

    let shelf = new Map();


    for (let line of input) {
        if (line.bookInfo !== undefined && Number(line.bookInfo.pages) % 1 === 0 && line.bookInfo.genre !== undefined && line.bookInfo.name !== undefined && line.author !== undefined) {
            
            if (!shelf.has(line.bookInfo.genre)) {
                shelf.set(line.bookInfo.genre, new Map());
                shelf.get(line.bookInfo.genre).set(line.author, [{name: line.bookInfo.name, pages: line.bookInfo.pages}])
            }
            
            else if (!shelf.get(line.bookInfo.genre).has(line.author)) {
                shelf.get(line.bookInfo.genre).set(line.author, [{name: line.bookInfo.name, pages: line.bookInfo.pages}])
            }
           
            else if (!checkBookNames()) { 
                shelf.get(line.bookInfo.genre).get(line.author).push({
                    name: line.bookInfo.name,
                    pages: line.bookInfo.pages
                });
            }
        }

        function checkBookNames() {
            let books = shelf.get(line.bookInfo.genre).get(line.author); //get all books from current author
            for (let book of books) {
                if (book.name === line.bookInfo.name) {
                    return true;
                }
            }
            return false;
        }
    }

    for (let [genre, value] of shelf) {
        let pages = 0;
        console.log(genre + ':');
        value = new Map([...value.entries()].sort());
        for (let [author, innerValues] of value) {
            console.log("> " + author);
            innerValues = innerValues.sort((a, b) => a.pages - b.pages);
            for (let book of innerValues) {
                console.log(">>> Book name: \"" + book.name + "\", pages: " + book.pages);
                pages += Number(book.pages);
            }
        }
        console.log('*Total pages from genre ' + genre + ' to be read: ' + pages + '\n-------------');
    }

}
solve([
    {author: 'Ivan Vazov', bookInfo: {genre: 'Poeziq', name: 'Epopeq na zabravenite', pages: 50}},
    {author: 'Aleko Konstantinov', bookInfo: {genre: 'Patepis', name: 'Do chikago i nazad', pages: 200}},
    {author: 'Aleko Konstantinov', bookInfo: {genre: 'Feyleton', name: 'Bay Ganyo', pages: 250}},
    {author: 'Ivan Vazov', bookInfo: {genre: 'Roman', name: 'Pod Igoto', pages: 300}}

])