function solve(arr) {
    console.log(arr.filter((el,ind) => ind % 2 === 1).map(el => el * 2).reverse().join(' '));
}
solve([10,15,20,25]);