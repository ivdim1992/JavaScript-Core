function rotate(arr) {
    let rotates = Number(arr.pop());


    for (let i = 0; i < rotates % arr.length; i++){
       arr.unshift(arr.pop())
    }

    console.log(arr.join(' '))
}
rotate(['1','2','3','4','5','2']);