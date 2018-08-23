function extractText() {
    let items = document.querySelector('#items').textContent;
    let textArea = document.getElementById('result');
console.log(items)
    for(let item of items){
        textArea.value += item
    }

}