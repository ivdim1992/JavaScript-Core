function solve(workerObj) {

    if(workerObj.handsShaking){
        workerObj.bloodAlcoholLevel += workerObj.weight * workerObj.experience * 0.1
        workerObj.handsShaking = false;
    }

    return workerObj

}

console.log(solve({
    weight: 120,
    experience: 20,
    bloodAlcoholLevel: 200,
    handsShaking: true
}));