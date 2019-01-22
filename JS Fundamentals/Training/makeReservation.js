function makeReservation() {
    $('#submit').click(submitForm);
    $('#edit').click(editMessage);
    $('#continue').click(continueFunc)
    
    function submitForm() {
        let fullName = $('#fullName');
        let email = $('#email');
        let phoneNumber = $('#phoneNumber');
        let address = $('#address');
        let postalCode = $('#postalCode');

        if(fullName.val() !== '' && email.val() !== ''){
            let container = $('#infoPreview');
            container
                .append($('<li>').text(`Name: ${fullName.val()}`))
                .append($('<li>').text(`E-mail: ${email.val()}`))
                .append($('<li>').text(`Phone: ${phoneNumber.val()}`))
                .append($('<li>').text(`Address: ${address.val()}`))
                .append($('<li>').text(`Postal Code: ${postalCode.val()}`))

            $('#submit').attr('disabled',true);
            $('#edit').attr('disabled',false);
            $('#continue').attr('disabled',false)
        }

        fullName.val('');
        email.val('');
        phoneNumber.val('');
        address.val('');
        postalCode.val('');


    }
    
    function editMessage() {

        let oldInfo = $('#infoPreview').find('li');
        $('#fullName').val(oldInfo[0].textContent.substring(6));
        $('#email').val(oldInfo[1].textContent.substring(8));
        $('#phoneNumber').val(oldInfo[2].textContent.substring(7));
        $('#address').val(oldInfo[3].textContent.substring(9));
        $('#postalCode').val(oldInfo[4].textContent.substring(13));

        $('#edit').attr('disabled',true);
        $('#continue').attr('disabled',true);
        $('#submit').attr('disabled',false);

        $('#infoPreview').empty();
    }

    function continueFunc() {
        $('#submit').attr('disabled',true);
        $('#edit').attr('disabled',true);
        $('#continue').attr('disabled',true)


        $('#container')
            .append($('<h2>').text('Payment Details'))
            .append($('<select>').attr('id','paymentOptions').addClass('custom-select')
                .append($('<option selected disabled hidden>').text('Choose'))
                .append($('<option value="creditCard">').text('Credit Card'))
                .append($('<option value="bankTransfer">').text('Bank Transfer')))


        $('#paymentOptions').change(paymentDetails)


    }

    function paymentDetails() {
        let selectedPaymentMethod = $('#paymentOptions').find(":selected").val();

        $('#extraDetails').empty();

        if(selectedPaymentMethod === 'creditCard'){
            $('#extraDetails').empty();
            let extraDetails = $('<div>').attr('id','extraDetails');
            extraDetails.append($(`<div class="inputLabel">Card Number<input></div><br>`))
                .append($(`<div class="inputLabel">Expiration Date<input></div><br>`))
                .append($(`<div class="inputLabel">Security Numbers<input></div><br>`))
                .append($(`<button id="checkOut">Check Out</button>`));
            $('#container').append(extraDetails)
        }else {
            $('#extraDetails').empty();
            let extraDetails = $('<div>').attr('id','extraDetails');
            extraDetails.append($(`<p>You have 48 hours to transfer the amount to:<br>IBAN: GR96 0810 0010 0000 0123 4567 890</p>`))
                .append($(`<button id="checkOut">Check Out</button>`));
            $('#container').append(extraDetails)
        }

        $('#checkOut').click(successReservation)
    }
    
    function successReservation() {
        $('#wrapper').empty();
        $('#wrapper').append($('<h4>').text('Thank you for your reservation!'))
    }
}