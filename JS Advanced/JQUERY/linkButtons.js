function attachEvents() {
    $('a.button').click(select);

    function select() {
        $('.selected').removeClass('selected');
        $(this).addClass('selected')
    }
}
