function load() {
    let ul = $('<ul>')
    ul
        .append($('<li>first item</li>').attr('data-selected','true'))
        .append($('<li>second item</li>').attr('data-selected','true'))
    $(document.body).append(ul)
}