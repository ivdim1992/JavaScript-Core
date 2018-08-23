function solve(n,k) {
    let result = [1];
    for (let i = 1; i < n; i++){
        let startNum = Math.max(0,i - k);
        let sumElements = result.slice(startNum,i).reduce((a,b) => a+b);
        result.push(sumElements);

    }

console.log(result)
}
solve(6,3);