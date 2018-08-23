function extract(targetText) {
    let text = document.getElementById(targetText).textContent;
    let pattern = /\(([^)]+)\)/;
    let result = [];

    let matches = pattern.exec(text)
    while (matches){
        result.push(matches[1])
        matches = pattern.exec(text)
    }
    return result.join('; ')
}