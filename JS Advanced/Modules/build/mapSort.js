function mapSort(map, sortFn) {
    if (!sortFn) {
        sortFn = function (a, b) {
            return a[0].toString().localeCompare(b[0].toString());
        };
    }

    let newMap = new Map();
    Array.from(map.entries()).sort(sortFn).forEach(e => newMap.set(e[0], map.get(e[0])));
    return newMap;
}
let map = new Map();
map.set(3, 'Gosho');
map.set(1, 'ivo');
map.set(5, 'Ivan');

module.exports = mapSort;
//# sourceMappingURL=mapSort.js.map