function solve(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i+=2){
        let towns = arr[i]
        let income = Number(arr[i + 1]);

        if(!obj.hasOwnProperty(towns)){
            obj[towns] = 0;
        }
        obj[towns] += income;
    }
    console.log(JSON.stringify(obj))
}
solve([
    'Sofia',
    '20',
    'Varna',
    '3',
    'Sofia',
    '5',
    'Varna',
    '4'
]);