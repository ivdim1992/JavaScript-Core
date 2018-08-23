function solve2(strArr) {

    let companies = strArr.shift().toLowerCase();
    let delimeter = strArr.shift();
    companies = companies.split(delimeter);

    let validSentence = [];
    let invalidSentence = [];

    for (let sentence of strArr) {
        sentence = sentence.toLowerCase();


        if(sentence.includes(companies[0]) && sentence.includes(companies[1]) && sentence.includes(companies[2])){
            validSentence.push(sentence)
        }else{
            invalidSentence.push(sentence)
        }

    }


    if(validSentence.length > 0 && invalidSentence.length > 0){
        console.log(`ValidSentences`);
        for (let i = 0; i < validSentence.length; i++){
            console.log(`${i + 1}. ${validSentence[i]}`)
        }

        console.log('='.repeat(30));

        console.log('InvalidSentences');
        for (let i = 0; i < invalidSentence.length; i++){
            console.log(`${i + 1}. ${invalidSentence[i]}`)
        }
    }else if(validSentence.length > 0){
        console.log(`ValidSentences`);
        for (let i = 0; i < validSentence.length; i++){
            console.log(`${i + 1}. ${validSentence[i]}`)
        }
    }else if(invalidSentence.length > 0){
        console.log(`InvalidSentences`);
        for (let i = 0; i < invalidSentence.length; i++){
            console.log(`${i + 1}. ${invalidSentence[i]}`)
        }
    }

}
solve2(["bulgariatour@, minkatrans@, koftipochivkaltd",
    "@,",
    "Mincho e KoftiPochivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
    "dqdo mraz some text but is KoftiPochivkaLTD MinkaTrans",
    "someone continues as no "]
);
solve2(["bulgariatour@, minkatrans@, koftipochivkaltd",
    "@,",
    "Mincho  e KoftiPochivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
    "We will koftipochivkaLTD travel e expenses no MinkaTrans mu e BulgariaTour",
    "dqdo BuLGariaTOUR mraz some text but is KoftiPochivkaLTD minkaTRANS"]

);