function validate() {
    let email = document.getElementById('email');
    let regex = /^[a-z]+@[a-z]+\.[a-z]+$/;

    email.addEventListener('change',function () {
        if(!regex.test(email.value.trim())){
            email.classList.add('error')
        }else {
            email.classList.remove('class')
            email.value = ''
        }
    })
}