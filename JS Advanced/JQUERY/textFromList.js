function extractText() {
    let result = [];
    let items = $('#items').find('li');

    for(let item of items){
        result.push(item.textContent)
    }
    $('#result').text(result.join(', '))
}