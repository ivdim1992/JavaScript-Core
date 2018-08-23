function focus() {
    let inputs = document.getElementsByTagName('input');
    
    Array.from(inputs).forEach(el => {
        el.addEventListener('focus', function () {
            el.parentNode.classList = 'focused';
        });
        el.addEventListener('blur',function () {
            el.parentNode.classList.remove('focused')
        })
    })
}