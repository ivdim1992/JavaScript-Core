const url = 'https://addcontacts-3aaef.firebaseio.com/';
const tableContacts = $('#phonebook')
const btnCreate = $('#btnCreate');
const btnLoad = $('#btnLoad');


btnCreate.on('click',addContact);
btnLoad.on('click',loadContacts);

function loadContacts() {

    $.ajax({
        method: 'GET',
        url: url + '.json'
    }).then(appendContact).catch(throwError)
}

function appendContact(contacts) {
    tableContacts.empty()
    for (let key in contacts) {
        let li = $('<li>').text(`${contacts[key].name}: ${contacts[key].phone}`)
        let a = $('<button>').text( 'Delete').on('click',function () {
            $.ajax({
                method: 'DELETE',
                url: url + '/' + key + '.json'
            }).then(function () {
                li.remove()
            }).catch(throwError)
        })
        li.append(a)
        tableContacts.append(li)
    }
}


function addContact() {
    let name = $('#person').val();
    let phone = $('#phone').val();
    if(name !== '' && phone !== ''){
        $.ajax({
            method: 'POST',
            url: url + '.json',
            data: JSON.stringify({name:name,phone:phone})
        }).then(function () {
            $('#person').val('')
            $('#phone').val('')
        }).catch(throwError)
    }

}

function throwError(err) {
    console.log(err)
}
