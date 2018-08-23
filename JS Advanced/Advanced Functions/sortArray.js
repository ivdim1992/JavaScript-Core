function solve(arr,str) {
    let ascending = function (a,b) {
        return a - b
    };
    let descending = function (a,b) {
        return b-a
    };

    let commands = {
        'asc': ascending,
        'desc': descending
    };

    return arr.sort(commands[str])
}
solve([14, 7, 17, 6, 8], 'des');