function addItem() {
    let inputText = document.getElementById('newItemText').value;
    let inputValue = document.getElementById('newItemValue').value;
    let menu = document.getElementById('menu');

    let option = document.createElement('option');
    option.textContent = inputText + ' ' + inputValue;
    menu.appendChild(option);
    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}