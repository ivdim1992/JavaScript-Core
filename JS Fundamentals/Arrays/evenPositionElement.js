function solve(arr) {
    console.log(arr.filter((el, ind) => ind % 2 === 0).join(' '));
}
solve(['20','30','40']);
