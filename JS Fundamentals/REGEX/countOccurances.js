function occurances(str,text) {
    let startInd = text.indexOf(str);
    let counter = 0;

    while (startInd !== -1){
        counter++;
        startInd = text.indexOf(str,startInd + 1)
    }
    console.log(counter)
}
occurances('the', 'the quick brown fox jumps over the lay dog.');