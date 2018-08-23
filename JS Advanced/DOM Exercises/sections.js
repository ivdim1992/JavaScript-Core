function create(sentences) {

    let content = document.getElementById('content');
    for (let sentence of sentences){
        let div = document.createElement('div');
        let paragraph = document.createElement('p');
        paragraph.textContent = sentence;
        paragraph.style.display = 'none';
        div.appendChild(paragraph);
        div.addEventListener('click',function () {
            paragraph.style.display = 'block'
        });
        content.appendChild(div)
    }
}