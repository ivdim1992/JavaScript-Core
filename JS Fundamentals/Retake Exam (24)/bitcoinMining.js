function bitcoin(arr) {
    let money = 0;
    let bitcoinPrice = 11949.16;
    let dayOfPurchase = 0;


    for (let i = 0; i < arr.length; i++) {
        let goldPerDay = Number(arr[i]);
        if((i + 1) % 3 === 0){
            goldPerDay *= 0.7;
        }
        money += goldPerDay * 67.51;

        if(money >= bitcoinPrice && dayOfPurchase === 0){
            dayOfPurchase = i + 1;
        }

    }

    let bitcoins = Math.floor(money / bitcoinPrice);
    let moneyLeft = money - (bitcoinPrice * bitcoins);

    console.log(`Bought bitcoins: ${bitcoins}`);
    if(bitcoins > 0){
        console.log(`Day of the first purchased bitcoin: ${dayOfPurchase}`)
    }
    console.log(`Left money: ${moneyLeft.toFixed(2)} lv.`)

}
bitcoin(['100', '200', '300']);