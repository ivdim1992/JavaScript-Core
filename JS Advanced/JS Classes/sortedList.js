class List {
    constructor(){
        this.list = [];
        this.size = 0;
    }

    add(item){
        this.list.push(item);
        this.size++;
        this.sort();
    }

    remove(index){
        if(index >= 0 && index < this.list.length){
            this.list.splice(index,1);
            this.size--;
        }

    }

    get(index){
        if(index >= 0 && index < this.list.length){
            return this.list[index]
        }

    }

    sort(){
        this.list.sort((a,b) => a - b)
    }
}

let list = new List();
list.add(5);
list.add(2);
list.add(9);
console.log(list)
console.log(list.get(-1))
console.log(list.size)
