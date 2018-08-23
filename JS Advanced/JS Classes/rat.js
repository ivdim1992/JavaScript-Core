class Rat {
    constructor(name){
        this.rats = [];
        this.name = name;
    }

    unite(otherRat) {
        if(otherRat instanceof Rat){
            this.rats.push(otherRat)
        }
    }

    getRats() {
        return this.rats
    }

    toString(){
        let result = `${this.name} \n`;
        for(let rat of this.rats) {
            result += `##${rat} \n`
        }

        return result.trim();
    }
}

let rat = new Rat('Pesho');
console.log(rat)
console.log(rat.getRats())
rat.unite(new Rat('Georgi'))
console.log(rat.getRats())
console.log(rat.toString())
