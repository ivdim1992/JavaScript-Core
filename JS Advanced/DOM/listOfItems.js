function addItem() {
    let data = document.getElementById('items');
    let inputValue = document.getElementById('newItemText').value;

    if(inputValue !== ''){
        let li = document.createElement('li');
        li.textContent = inputValue;
        data.appendChild(li);
        document.getElementById('newItemText').value = '';
    }

}