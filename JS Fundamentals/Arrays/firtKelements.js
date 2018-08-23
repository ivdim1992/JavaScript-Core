function solve(arr) {

    let k = arr.shift();
    let firstElements = arr.slice(0,k);
    let secondElements = arr.slice(-k);
    console.log(firstElements.join(' '));
    console.log(secondElements.join(' '));


}
solve([2,7,8,9,]);