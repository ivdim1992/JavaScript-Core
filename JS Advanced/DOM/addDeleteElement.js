function addItem() {

    let inputValue = document.getElementById('newText');

    if(inputValue !== ''){
        let li = document.createElement('li');
        li.textContent = inputValue.value;
        let anchor = document.createElement('a');
        anchor.addEventListener('click',function (event) {
            event.target.parentNode.parentNode.removeChild(event.target.parentNode)
        })
        anchor.href = '#';
        anchor.textContent = '[Delete]';
        li.appendChild(anchor)
        document.getElementById('items').appendChild(li);

    }
}

