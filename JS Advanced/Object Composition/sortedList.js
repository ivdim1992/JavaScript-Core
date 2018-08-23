function sortedList() {

    return obj = {
        innerArr: [],
        size: 0,
        add: function (element) {
            this.innerArr.push(element)
            this.size++;
            this.sort()
        },

        remove: function (index) {
            if (index >= 0 && index < this.innerArr.length) {
                this.innerArr.splice(index, 1)
                this.size--;
            }
        },

        get: function (index) {
            if (index >= 0 && index < this.innerArr.length) {
                return this.innerArr[index]
            }

        },
        sort: function () {
            this.innerArr.sort((a, b) => a - b)
        },

        toString: function () {
            return this.innerArr.join(' ')
        }
    }
}

let input = sortedList();
input.add(5)
input.add(3)
console.log(input.get(1));
console.log(input.innerArr.toString())

