function solve(strArr) {

    let fantasyPrice = 0;
    let mysteryPrice = 0;
    let childrenPrice = 0;
    let booksPrice = 0;

    let boughtFantasyBooks = 0;
    let boughtMysteryBooks = 0;
    let boughtChildrenBooks = 0;
    let boughtOtherBooks = 0;

    let month;

    for (let counter = 0; counter < strArr.length; counter++) {
        let tokens = strArr[counter].split(' - ');
        if (counter === 0) {
            month = tokens[0];
            continue;
        }
        if (tokens[1] === undefined) {
            continue;
        }
        let bookName = tokens[0];
        let genre;
        let price;
        if (!isNaN(tokens[1])) {
            price = Number(tokens[1]);
            boughtOtherBooks++;
        } else {
            genre = tokens[1];
            price = Number(tokens[2]);
            if (genre === 'Mystery') {
                boughtMysteryBooks++;
            } else if (genre === 'Fantasy') {
                boughtFantasyBooks++;
            } else if (genre === 'Children') {
                boughtChildrenBooks++;
            } else {
                boughtOtherBooks++;
            }
        }
        switch (month) {
            case 'January':
                if (genre === 'Fantasy') {
                    fantasyPrice += price - price * 0.3;
                } else {
                    booksPrice += price;
                }
                break;
            case 'February':
                if (genre === 'Fantasy') {
                    fantasyPrice += price - price * 0.3;
                }
                if (genre === 'Children') {
                    childrenPrice += price - price * 0.2;
                } else {
                    booksPrice += price;
                }
                break;
            case 'March':
                if (genre === 'Children') {
                    childrenPrice += price - price * 0.2;
                } else {
                    booksPrice += price;
                }
                break;
            case 'November':
                if (genre === 'Mystery') {
                    price = price + price * 0.2;
                    if (boughtMysteryBooks % 2 === 0) {
                        mysteryPrice += price - (price * 2.2) / 100;
                    }
                } else {
                    booksPrice += price;
                }
                break;
            default: booksPrice+=price;
        }
       
        
        if (counter === strArr.length-1) {
            if (month === 'February' || month === 'March') {
                fantasyPrice -= fantasyPrice * 0.3;
            }
            if (boughtFantasyBooks > 5) {
                fantasyPrice -= fantasyPrice * 0.1;
            }
            if (boughtMysteryBooks > 5) {
                mysteryPrice -= mysteryPrice * 0.1;
            }
            if (boughtChildrenBooks > 5) {
                childrenPrice -= childrenPrice * 0.1;
            }

            booksPrice += childrenPrice + mysteryPrice + fantasyPrice;

            if (boughtChildrenBooks + boughtFantasyBooks + boughtMysteryBooks + boughtOtherBooks >= 10) {
                booksPrice -= booksPrice * 0.2;
            }
        }

    }
    let totalBooks = boughtChildrenBooks+boughtFantasyBooks+boughtMysteryBooks+boughtOtherBooks;
    console.log(`Mariyka owe ${booksPrice.toFixed(2)} money for ${totalBooks} books.`);
}