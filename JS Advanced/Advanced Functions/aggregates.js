function aggregate(arr){

    function reducer(arr,func) {
        let result = arr[0];

        for(let nextEl of arr.slice(1)){
            result = func(result,nextEl)
            return result
        }

    }

    console.log(`Sum = ` + reducer(arr, (a, b) => a + b));
    console.log(`Min = ` + reducer(arr, (a, b) => a > b ? a : b));
    console.log(`Max = ` + reducer(arr, (a, b) => a > b ? b : a));
    console.log('Product = ' + reducer(arr, (a, b) => a * b));
    console.log('Join = ' + reducer(arr, (a, b) => '' + a + b));

}
let arr = [2,3,10,15]
aggregate(arr);





