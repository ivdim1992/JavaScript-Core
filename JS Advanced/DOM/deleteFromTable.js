function deleteByEmail() {
    let inputValue = document.getElementsByName('email')[0].value;
    let data = document.getElementById('customers').children[0].children;


    for (let i = 0; i < data.length; i++) {
        if(data[i].lastChild.textContent === inputValue){
            let button = document.getElementsByTagName('button')[0];
            data[i].parentNode.removeChild(data[i]);
            document.getElementById('result').textContent = 'Deleted';
            return
        }
    }
    document.getElementById('result').textContent = 'Not found'

}