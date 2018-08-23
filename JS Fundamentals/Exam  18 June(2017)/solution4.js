function solve(strArr) {
    let result = new Map();

    for (let row of strArr) {
        let [countryName, townName, travelCost] = row.split(/\s>\s/);
        travelCost = Number(travelCost);

        townName = townName.charAt(0).toUpperCase() + townName.slice(1);
        if(!result.has(countryName)){
            result.set(countryName,new Map())
        }
        if(!result.get(countryName).has(townName)){
            result.get(countryName).set(townName,Number.POSITIVE_INFINITY)
        }

        if(result.get(countryName).get(townName) > travelCost){
            result.get(countryName).set(townName,travelCost)
        }
    }
    let sortedCountry = Array.from(result.keys()).sort((c1,c2) => {
        return c1.localeCompare(c2)
    });

    let final = [];

    for (let country of sortedCountry) {
        final.push(`${country} -> `);

        let sortedTowns = Array.from(result.get(country)).sort((a,b) => a[1] - b[1]);
      //  console.log(sortedTowns)


        for (let [town,price] of sortedTowns) {
            final.push(`${town} -> ${price} `)

        }
        console.log(final.join(''));
        final = [];
    }

  // console.log(final)

}

solve(["Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"]
);