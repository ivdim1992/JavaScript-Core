function lowestPrice(strArr) {
    let solution = new Map();
    for(let row of strArr){
        let [town,products,price] = row.split(' | ');
        // check if product exist

        if(!solution.has(products)){
            solution.set(products,new Map())
        }
        solution.get(products).set(town,Number(price))
    }

    for(let [products,values] of solution){
        let [town,price] = [...values].reduce((a,b) => {
            if(a[1] > b[1]){
                return b
            }else {
                return a
            }
        });
        console.log(`${products} -> ${price} (${town})`)
    }
}
lowestPrice([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);