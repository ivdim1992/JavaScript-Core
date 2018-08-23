function juice(strArr) {
    let bottles = new Map();
    let juice = new Map();

    for (let row of strArr) {
        let [juiceName, quantity] = row.split(' => ');
        quantity = Number(quantity);

        if (!juice.hasOwnProperty(juiceName)) {
            juice[juiceName] = quantity
        }else {
            juice[juiceName] += quantity
        }
        quantity = juice[juiceName]

        if (quantity >= 1000) {
            let currentBottles = Math.floor(quantity / 1000);
            bottles[juiceName] = currentBottles;
        }
    }
    for (let juiceName in bottles) {
        console.log(`${juiceName} => ${bottles[juiceName]}`)
    }
}

juice([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
]);