function solve(string,substrin) {
    if(string.endsWith(substrin)){
        return true
    }else {
        return false
    }

}

console.log(solve('How have you been?', 'how'));