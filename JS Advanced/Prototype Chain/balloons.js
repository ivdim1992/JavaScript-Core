function solve() {

    class Balloon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = Number(gasWeight)
        }
    }

    class PartyBalloon extends Balloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight);
            this.ribbonColor = ribbonColor;
            this.ribbonLength = Number(ribbonLength);
            this.ribbon = {
                color: ribbonColor,
                length: ribbonLength
            }
        }

        get ribbon() {
            return this._ribbon
        }

        set ribbon(value) {
            return this._ribbon = value
        }
    }

    class BirthdayBalloon extends PartyBalloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
            super(color, gasWeight, ribbonColor, ribbonLength);
            this.text = text;
        }
    }

    return {
        Balloon,
        PartyBalloon,
        BirthdayBalloon
    }

}
let Balloon = solve().Balloon;
console.log(Balloon);

let PartyBalloon = solve().PartyBalloon;

let birthdayBallon = new PartyBalloon("Tumno-bqlo", 20.5, "Svetlo-cherno", 10.25);

birthdayBallon.ribbon.color = 'red';
birthdayBallon.ribbon.length = 18;
console.log(birthdayBallon.ribbon)