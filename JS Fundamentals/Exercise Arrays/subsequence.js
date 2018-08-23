function subsequence(arr) {
    let newArr = [];
    newArr.push(arr[0]);
    for (let i = 0; i < arr.length; i++){
        let currentNum = arr[i];

       if(currentNum <= arr[i + 1]){
           newArr.push(arr[i + 1])
       }

    }
console.log(newArr.join('\n'));

    let currentNum = arr[0];

    let result = arr.filter((num) => {
        if(currentNum <= num){
            currentNum = num;
            return true
        }
    });

}
subsequence([1,3,8,4,10,12,3,2,24]);