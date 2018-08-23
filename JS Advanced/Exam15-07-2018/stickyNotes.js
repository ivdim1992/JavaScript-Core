function addSticker() {

    let stickerBoard = $('.stickerBoard');
    let inputTitle = $('.title-input > input');
    let inputText = $('.text-input > input');


    if (inputTitle.val() !== '' && inputText.val() !== '') {

            let li = $('<li>').addClass('note-content')
                .append($('<a>').addClass('button').text('x').on('click', function () {
                    $(this).parent().remove()
                }))
                .append($('<h2>').text(inputTitle.val()))
                .append($('<hr>'))
                .append($('<p>').text(inputText.val()))
        $('#sticker-list').append(li)

        inputTitle.val('');
        inputText.val('')
    }

}

