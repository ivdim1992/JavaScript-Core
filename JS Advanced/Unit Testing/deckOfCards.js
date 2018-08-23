function deckCards(cardsArr) {
    function makeCard(face, suit) {

        let validCardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let validSuits = ['S', 'H', 'D', 'C'];

        if (!validCardFaces.includes(face)) {
            throw  new Error('Invalid face')
        }

        if (!validSuits.includes(suit)) {
            throw  new Error('Invalid suit')
        }

        let card = {
            face: face,
            suit: suit,
            toString: function () {

                let cardColor = {
                    'S': "\u2660",
                    'H': "\u2665",
                    'D': "\u2666",
                    'C': "\u2663"
                };
                return `${card.face}${cardColor[card.suit]}`
            }
        };

        return card
    }

    let deck = [];


    for (let card of cardsArr) {
        let face = card.substring(0, card.length - 1)
        let suit = card[card.length - 1];


        try {
            deck.push(makeCard(face, suit))
        }catch (e) {
            console.log(`Invalid card: ${card}`);
            return;
        }
    }



    return deck.join(' ')

}

console.log(deckCards(['AS', '10D', 'KH']));
console.log(deckCards(['AS', '10D', '1H']));