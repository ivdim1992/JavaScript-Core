let module1 = (function () {
    let Suits = {
        CLUBS: "\u2663", // ♣
        DIAMONDS: "\u2666", // ♦
        HEARTS: "\u2665", // ♥
        SPADES: "\u2660" // ♠
    };

    class Card {

        constructor(face,suit){
            this.face = face;
            this.suit = suit;
        }

        get face() {
            return this._face;
        }

        set face(value) {
            if(!Card.validFaces.includes(value)){
                throw  new Error('Invalid face')
            }
            this._face = value;
        }

        get suit() {
            return this._suit;
        }

        set suit(value) {
            if(!Object.keys(Suits).map(suit => Suits[suit]).includes(value)){
                throw new Error('Invalid suite')
            }
            this._suit = value;
        }

        static get validFaces(){
            return Card._validFaces;
        }

        toString(){
            return this.face + this.suit
        }
    }

    Card._validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    return {Suits,Card}
}());

let Suits = module1.Suits;
let Card = module1.Card;
let card1 = new Card('3',Suits.SPADES)
console.log(card1.toString())