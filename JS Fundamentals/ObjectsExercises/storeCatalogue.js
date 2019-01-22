function catalogue(strArr) {
    let summary = new  Map();

    for(let row of strArr){
        let [product,price] = row.split(/\s:\s/g);
        price = Number(price);
        let firstInitial = product[0];

        if(!summary.has(firstInitial)){
            summary.set(firstInitial,new Map());
        }
        let innerValues = summary.get(firstInitial);
        innerValues.set(product,price);

    }

    let sortedInitial = [...summary.entries()].sort(sortAlphabetically);
    for(let [firstInitial,innerValues] of sortedInitial){
        console.log(firstInitial);

        let sortedValues = [...innerValues].sort(sortAlphabetically);
        for(let [product,price] of sortedValues){
            console.log(`  ${product}: ${price}`);
        }
    }

    function sortAlphabetically(a,b) {
        return a[0].localeCompare(b[0]);
    }
}

catalogue([
    "Appricot : 20.4",
    "Fridge : 1500",
    "TV : 1499",
    "Deodorant : 10",
    "Boiler : 300",
    "Apple : 1.25",
    "Anti-Bug Spray : 15",
    "T-Shirt : 10"
]);