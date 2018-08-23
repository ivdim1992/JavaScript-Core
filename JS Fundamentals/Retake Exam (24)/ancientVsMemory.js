function solve(strArr) {
    let numArr = strArr.join(' ').split(' ');
   // console.log(numArr)
    for (let i = 0; i < numArr.length; i++) {
        if(numArr[i] === '32656' && numArr[i + 1] === '19759' &&  numArr[i + 2] === '32763'){
            let size = Number(numArr[i + 4]);
            let copy = numArr.slice(i + 6,i + 6 + size);
            console.log(copy.map(ch => String.fromCharCode(ch)).join(''))
        }

    }

}
solve([
    '32656 19759 32763 0 5 0 80 101 115 104 111 0 0 0 0 0 0 0 0 0 0 0',
    '0 32656 19759 32763 0 7 0 83 111 102 116 117 110 105 0 0 0 0 0 0 0 0'
]);