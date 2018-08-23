function solve(strArr) {
    let totalAmountOfGold = 0;
    let specializedProfessions = ['Programming', 'Hardware maintenance', 'Cooking', 'Translating', 'Designing'];
    let averageProfessions = ['Driving', 'Managing', 'Fishing', 'Gardening'];
    let clumsyProfessions = ['Singing', 'Accounting', 'Teaching', 'Exam-Making', 'Acting', 'Writing', 'Lecturing', 'Modeling', 'Nursing']

    let count = 1;

    for (let i = 0; i < strArr.length; i++) {
        let [profession, goldOffered] = strArr[i].split(' : ');
        goldOffered = Number(goldOffered);

        if (specializedProfessions.includes(profession) && goldOffered >= 200) {


            if(count % 2 === 0){
                totalAmountOfGold += 200;

            }
            totalAmountOfGold += goldOffered * 0.8;
            count++;
        }

        else if (clumsyProfessions.includes(profession)) {

            if(count  % 2 === 0){
                goldOffered -= goldOffered * 0.05;
            }

            if(count % 3 === 0){
                goldOffered -= goldOffered * 0.1;
            }
            count++;
            totalAmountOfGold += goldOffered;
        }

        else if(averageProfessions.includes(profession)){
            totalAmountOfGold += goldOffered
        }
    }

    console.log(`Final sum: ${totalAmountOfGold.toFixed(2)}`);
    if(totalAmountOfGold < 1000){
        console.log(`Mariyka need to earn ${(1000 - totalAmountOfGold).toFixed(2)} gold more to continue in the next task.`)
    }else{
        console.log(`Mariyka earned ${(totalAmountOfGold - 1000).toFixed(2)} gold more.`)
    }

}

solve(["Programming : 500", "Driving : 243.55", "Acting : 200", "Singing : 100", "Cooking : 199","Hardware maintenance : 800", "Gardening : 700", "Programming : 500"]);