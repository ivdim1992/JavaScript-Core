function gladiator(lostFights,helmetPrice,swordPrice,shieldPrice,armorPrice) {
    let expenses = 0;

    let countBrokenHelmets = 0;
    let countBrokenSwords = 0;
    let countBrokenShield = 0;
    let countBrokenArmor = 0;


    for (let i = 1; i <= lostFights; i++){
       if(i % 2 === 0){
           countBrokenHelmets++;

       }
       if(i % 3 === 0){
           countBrokenSwords++;

       }
       if(i % 2 === 0 && i % 3 === 0){
           countBrokenShield++;
       }

    }
   for (let i = 1; i <= countBrokenShield; i++){
        if(i % 2 === 0){
            countBrokenArmor++;
        }
   }
    let expensesHelmet = countBrokenHelmets * helmetPrice;
    let expensesSword = countBrokenSwords * swordPrice;
    let expensesShield = countBrokenShield * shieldPrice;
    let expensesArmor = countBrokenArmor * armorPrice;

    expenses = expensesHelmet + expensesSword + expensesShield + expensesArmor;
console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)


}
gladiator(23, 12.50, 21.50, 40, 200);
