function bookStore(arr) {

    let cartCapacity = arr.shift();
    let budget = arr.shift();
    let booksInfo = arr[0]

    let finalSum = 0;

    let purchasedBooks = [];


    let sorted = booksInfo.sort((b1, b2) => {
        return b1[2] > b2[2]
    });

    let nextBook = 0;
    while (purchasedBooks.length < cartCapacity) {
        purchasedBooks.push(sorted[nextBook])
        finalSum += Number(sorted[nextBook][2])
        nextBook++;
    }

    if (budget < finalSum) {
        for (let i = 0; i < purchasedBooks.length; i++) {
            finalSum -= Number(purchasedBooks[i][2]);
            purchasedBooks.shift();
            if (budget >= finalSum) {
                break;
            }
        }
    }

    if (purchasedBooks.length >= 5) {
        finalSum -= purchasedBooks[0][2] * 0.5
        purchasedBooks[0][2] -= purchasedBooks[0][2] * 0.5
    }


    let sortedBooks = purchasedBooks.sort(function (b1, b2) {
        return b1[0].localeCompare(b2[0])
    });

    let str = '';
    str += 'Books purchased:\n';
    for (let book of sortedBooks) {
        str += `-> Book: "${book[0]}"; Author: ${book[1]}; Price: ${Number(book[2]).toFixed(2)}\n`
    }
    str += `Final sum: ${finalSum.toFixed(2)} lv.`;

    console.log(str)

}

bookStore([2, 40,
    [['Little Women', 'Louisa May Alcott', '24.50'],
        ['The Cloud Atlas', 'David Mitchell', '18.20'],
        ['Jane Eyre', 'Charlotte Bronte', '13.65'],
        ['The Pilgrim\'s Progress', 'John Bunyan', '16.70'],
        ['The Scarlet Letter', 'Nathaniel Hawthorne', '14.25']]
]);