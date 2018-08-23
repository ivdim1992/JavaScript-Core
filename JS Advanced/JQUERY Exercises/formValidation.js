function validate() {
    let username = $('#username');
    let email = $('#email');
    let password = $('#password');
    let confirmPassword = $('#confirm-password');
    let checkBox = $('#company');
    let companyInfo =  $('#companyInfo');
    let companyNumber = $('#companyNumber');
    let submitBtn = $('#submit');
    let validDiv = $('#valid');
    let isValid = true;

    checkBox.change(function () {
        if(checkBox.is(':checked')){
           companyInfo.css('display','block')
        }else {
            companyInfo.css('display','none')
        }
    });

    submitBtn.click(function (ev) {
        ev.preventDefault();
        validateForms();
        if(isValid){
            validDiv.css('display','block')
        }
    });


    function validateForms() {
        validateRegex(username,/^[0-9A-Za-z]{3,20}$/);
        validateRegex(email,/^.*?@.*?\..*$/);

        if(password.val() === confirmPassword.val()){
            validateRegex(password,/^\w{5,15}$/g);
            validateRegex(confirmPassword,/^\w{5,15}$/g);
        }else {
            password.css('border-color','red');
            confirmPassword.css('border-color','red');
            isValid = false;
        }

        if(checkBox.is(':checked')){
            if(+companyNumber.val() >= 1000 && +companyNumber.val() <= 9999){
                companyNumber.css('border','none')
            }else {
                companyNumber.css('border-color','red');
                isValid = false;
            }
        }
    }


    function validateRegex(input,pattern) {
        if(pattern.test(input.val())){
            input.css('border','none');
        }else {
            input.css('border-color','red');
            isValid = false;
        }
    }

}
