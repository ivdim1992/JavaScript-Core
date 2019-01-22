function calculateTotalBooksPrice(orderedBooks) {

    let totalFantasyPrice = 0;
    let totalMysteryPrice = 0;
    let totalChildrenPrice = 0;
    let totalBooksPrice = 0;

    let fantasyCounter = 0;
    let mysteryCounter = 0;
    let childrenCounter = 0;
    let otherGenresCounter = 0;

    let month;

    for (let order = 0; order < orderedBooks.length; order++) {
        let orderInfo = orderedBooks[order].split(' - ');
        if (order === 0) {
            month = orderInfo[0];
            continue;
        }
        if (orderInfo[1] === undefined) {
            continue;
        }
        let bookName = orderInfo[0];
        let bookGenre;
        let bookPrice;
        if (!isNaN(orderInfo[1])) {
            bookPrice = Number(orderInfo[1]);
            otherGenresCounter++;
        } else {
            bookGenre = orderInfo[1];
            bookPrice = Number(orderInfo[2]);
            if (bookGenre === 'Mystery') {
                mysteryCounter++;
            } else if (bookGenre === 'Fantasy') {
                fantasyCounter++;
            } else if (bookGenre === 'Children') {
                childrenCounter++;
            } else {
                otherGenresCounter++;
            }
        }
        switch (month) {
            case 'January':
                if (bookGenre === 'Fantasy') {
                    totalFantasyPrice += bookPrice - bookPrice * 0.3;
                } else {
                    totalBooksPrice += bookPrice;
                }
                break;
            case 'February':
                if (bookGenre === 'Fantasy') {
                    totalFantasyPrice += bookPrice - bookPrice * 0.3;
                }
                if (bookGenre === 'Children') {
                    totalChildrenPrice += bookPrice - bookPrice * 0.2;
                } else {
                    totalBooksPrice += bookPrice;
                }
                break;
            case 'March':
                if (bookGenre === 'Children') {
                    totalChildrenPrice += bookPrice - bookPrice * 0.2;
                } else {
                    totalBooksPrice += bookPrice;
                }
                break;
            case 'November':
                if (bookGenre === 'Mystery') {
                    bookPrice = bookPrice + bookPrice * 0.2;
                    if (mysteryCounter % 2 === 0) {
                        totalMysteryPrice += bookPrice - (bookPrice * 2.2) / 100;
                    }
                } else {
                    totalBooksPrice += bookPrice;
                }
                break;
            default: totalBooksPrice+=bookPrice;
        }
        //calculate total cost
        if (order === orderedBooks.length) {
            if (month === 'February' || month === 'March') {
                totalFantasyPrice -= totalFantasyPrice * 0.3;
            }
            if (fantasyCounter > 5) {
                totalFantasyPrice -= totalFantasyPrice * 0.1;
            }
            if (mysteryCounter > 5) {
                totalMysteryPrice -= totalMysteryPrice * 0.1;
            }
            if (childrenCounter > 5) {
                totalChildrenPrice -= totalChildrenPrice * 0.1;
            }

            totalBooksPrice = totalChildrenPrice + totalMysteryPrice + totalFantasyPrice;

            if (childrenCounter + fantasyCounter + mysteryCounter + otherGenresCounter >= 10) {
                totalBooksPrice -= totalBooksPrice * 0.2;
            }
        }

    }
    let totalBooks = childrenCounter+fantasyCounter+mysteryCounter+otherGenresCounter;
    totalBooksPrice+=totalFantasyPrice+totalMysteryPrice+totalChildrenPrice;
    console.log(`Mariyka owe ${totalBooksPrice.toFixed(2)} money for ${totalBooks} books.`);
}