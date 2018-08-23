function result() {

    let typeValues = {};
    for (let i = 0; i < arguments.length; i++)
    {
        let keys = arguments[i];
        let types = typeof  keys;
        console.log(`${types}: ${keys}`);

        if(!typeValues.hasOwnProperty(typeof keys)){
            typeValues[typeof keys] = 0;
        }
        typeValues[typeof keys]++

    }

    let sortedArr = [];
    for (let argumentType in typeValues){
        if(typeValues.hasOwnProperty(argumentType)){
            let value = typeValues[argumentType];
            sortedArr.push(argumentType,value)
        }
    }
    sortedArr.sort((a,b) => b[1] - a[1]);
    for (let i = 0; i < sortedArr.length; i+=2) {
        console.log(`${sortedArr[i]} = ${sortedArr[i + 1]}`)
    }
}
result('cat', 42, function () { console.log('Hello world!'); });