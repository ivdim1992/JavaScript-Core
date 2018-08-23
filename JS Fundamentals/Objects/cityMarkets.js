function market(strArr) {

    let summary = new  Map();

    for(let row of strArr){
        let [town,product,sales] = row.split(' -> ');
        sales = sales.split(' : ').reduce((a,b) => a * b);
        // check if the town exist
        if(!summary.has(town)){
            summary.set(town,new Map())
        }
        // check if the product exist in the town
        if(!summary.get(town).has(product)){
            summary.get(town).set(product,0)
        }
        let oldSales = summary.get(town).get(product);
        summary.get(town).set(product,oldSales + sales)

    }
    let sortedTowns = [...summary.entries()].sort(sortation)

    function sortation(a,b) {
        return a[0].localeCompare(b[0])
    }

    for(let [town,prudctsMap] of sortedTowns){
        console.log(town);
        for(let [name,price] of prudctsMap){
            console.log(`${name} -> ${price}`)
        }
    }

    // [...summary].forEach(([town,products]) => {
    //     console.log(`Town - ${town}`);
    //     [...products].forEach(([product,price]) => {
    //         console.log(`$$$${product} : ${price}`)
    //     })
    // });

}

market(['Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 100 : 20',
    'Montana -> Chereshas -> 1000 : 0.3'
]);