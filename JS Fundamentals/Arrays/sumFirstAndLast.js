function solve(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = Number(arr[0]) + Number(arr[arr.length - 1]);
    }
    console.log(sum)
}

solve(['20','30','40']);