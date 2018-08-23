function solve(arr) {
    let newArr = [];
    for (const el of arr) {
        if(el < 0){
            newArr.unshift(Number(el))
        }else {
            newArr.push(Number(el))
        }
    }
    console.log(newArr.join('\n'))
}
solve([7,-2,-1,8]);