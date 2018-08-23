function solve(arr) {
    let delimeter = arr.pop();
    let result = '';
    for (let i = 0; i < arr.length; i++){
        if(i === 0){
            result += arr[i]
        }else {
            result += delimeter + arr[i]
        }
    }
    console.log(result)
}
solve(['One','Two','Three','Four','Five','-']);