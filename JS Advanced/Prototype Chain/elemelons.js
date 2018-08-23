function elemelons() {
    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new Error("Cannot make instance of abstract class Melon.");
            }
            this.weight = Number(weight);
            this.melonSort = melonSort;
            this.element = '';
            this._elementIndex = this.weight * this.melonSort.length
        }

        get elementIndex() {
            return this._elementIndex
        }

        toString() {

            return `Element: ${this.element}\n` +
                `Sort: ${this.melonSort}\n` +
                `Element Index: ${this.elementIndex}`
        }
    }

    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = 'Water'
        }
    }

    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = 'Fire'
        }
    }

    class Earthmelon extends Melon {
        constructor(weight, melonSort, elementIndex) {
            super(weight, melonSort);
            this.element = 'Earth'
        }
    }

    class Airmelon extends Melon {
        constructor(weight, melonSort, elementIndex) {
            super(weight, melonSort);
            this.element = 'Air'
        }
    }

    class Melolemonmelon extends Watermelon {
        constructor(weight, melonSort) {
            super(weight, melonSort)
            this.element = 'Water';
            this.elements = ['Fire', 'Earth', 'Air', 'Water'];
            this.currentIndex = 0;
        }

        morph() {
            this.element = this.elements[this.currentIndex++ % 4]
        }
    }
    return {Melon,Watermelon,Airmelon,Earthmelon,Firemelon,Melolemonmelon}
}

let waterMelon = new Melolemonmelon(10, 'strange');
waterMelon.morph();
waterMelon.morph();
waterMelon.morph();
waterMelon.morph();
waterMelon.morph();
console.log(waterMelon.toString());

