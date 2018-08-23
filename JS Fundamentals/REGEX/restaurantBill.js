function restaurant(arr) {
    let products = arr.filter((el,ind) => ind % 2 === 0);
    let sum = arr.filter((el,ind) => ind % 2 === 1).map(Number).reduce((a,b) => a + b)

    console.log(`You purchased ${products.join(', ')} for a total sum of ${sum}`)
}
restaurant(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69'])