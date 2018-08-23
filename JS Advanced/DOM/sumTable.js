function sum() {

    let data = document.querySelectorAll('tr');
    let result = [];
    for (let i = 1; i < data.length -1; i++){
        result.push(Number(data[i].lastChild.textContent))
    }
    result = result.reduce((a,b) => a + b);


    document.getElementById('sum').textContent = result
}