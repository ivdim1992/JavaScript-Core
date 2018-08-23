function solve() {

    let num1 = 0;
    let num2 = 1;

    return function fibonacci() {
        let num3 = num1 + num2;
        [num1, num2] = [num2, num3];

        console.log(num1)
    }

}

console.log(solve(8));