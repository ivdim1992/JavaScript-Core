function solve(a,b) {

    function divisor(a,b) {
        if(b === 0){
            return a
        }else {
            return divisor(b, a % b)
        }
    }

    return divisor(a,b)

}

console.log(solve(0, 125));