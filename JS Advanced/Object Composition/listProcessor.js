function solve(arr) {

    let myModule = (function () {
        let result = [];

        return {
            add: function (str) {
                result.push(str)
            },
            remove: function (str) {
                result = result.filter(el => el !== str)
            },
            print: function () {
                console.log(result.join(','))
            }
        }
    }());
    for (let command of arr){
        let commandTokens = command.split(' ');
        myModule[commandTokens[0]](commandTokens[1])
    }

}
solve(['add hello', 'add again', 'remove hello', 'add again', 'print'])

