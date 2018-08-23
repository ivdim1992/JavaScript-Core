class BookCollection  {
    constructor(shelfGenre, room, shelfCapacity){
        this.shelfGenre = shelfGenre;
        this.room = room;
        this.shelfCapacity = Number(shelfCapacity);
        this.counter = 0;
        this.shelf = [];
    }

    get shelfCondition(){
        return this.shelfCapacity - this.counter
    }

    throwAwayBook(bookName){
        this.shelf = this.shelf.filter(b => b.bookName !== bookName)
    }
    showBooks(genre){
        let result = '';
        result += `Results for search "${genre}":\n`
        for(let book of this.shelf){
            if(genre === book.genre){
                result += `${"\uD83D\uDCD6"} ${book.bookAuthor} - "${book.bookName}"\n`
            }
        }
        return result
    }

    addBook(bookName, bookAuthor, genre){
        if(this.shelfCapacity <= this.counter){
            this.shelf.shift();
            this.shelf.push({bookName:bookName,bookAuthor:bookAuthor,genre:genre})
        }else {
            this.shelf.push({bookName:bookName,bookAuthor:bookAuthor,genre:genre})
            this.counter++;
        }

        this.shelf.sort((a,b) => a.bookAuthor > b.bookAuthor)
        return this
    }

    get room(){
        return this._room;
    }
    set room(value){
        if(value === 'livingRoom' || value === 'bedRoom' || value === 'closet'){
            return this._room = value;
        }else {
            throw new Error(`Cannot have book shelf in ${value}`)
        }
    }

    toString(){
        let result = '';
        if(this.shelf.length <= 0){
            result += 'It\'s an empty shelf'
        } else {
            result += `"${this.shelfGenre}" shelf in ${this.room} contains:\n`
            for(let book of this.shelf){
                result += `${"\uD83D\uDCD6"} "${book.bookName}" - ${book.bookAuthor}\n`
            }
        }
        return result.trim();
    }
}
let bedRoom = new BookCollection('Mixed', 'bedRoom', 5);
bedRoom.addBook("John Adams", "David McCullough", "history");
bedRoom.addBook("The Guns of August", "Cuentos para pensar", "history");
bedRoom.addBook("Atlas of Remote Islands", "Judith Schalansky");
bedRoom.addBook("Paddle-to-the-Sea", "Holling Clancy Holling");
console.log(bedRoom.shelfCondition)
bedRoom.throwAwayBook('John Adams')
console.log(bedRoom.shelfCondition)












