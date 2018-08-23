function initializeTable() {

    $('#createLink').click(addCountry);
    createRow('Bulgaria', 'Sofia');
    createRow('Germany', 'Berlin');
    createRow('Russia', 'Moscow');
    fixLinks();


    function fixLinks() {
        $('table tr td').find('a').css('display','inline');
        $('table tr:nth-child(3)').find(' a:contains(Up)').css('display','none');
        $('table tr:last').find('a:contains(Down)').css('display','none')
    }

    function addCountry() {
        let newCountry = $('#newCountryText').val();
        let newCapital = $('#newCapitalText').val();

        createRow(newCountry, newCapital);
        $('#newCountryText').val('');
        $('#newCapitalText').val('');

    }

    function createRow(nameCapital, nameCountry) {
        let row = $('<tr>')
            .append($(`<td>${nameCapital}</td>`))
            .append($(`<td>${nameCountry}</td>`))
            .append($(`<td></td>`)
                .append($(`<a href="#">[Up]</a>`).click(moveUp))
                .append($(`<a href="#">[Down]</a>`).click(moveDown))
                .append($(`<a href="#">[Delete]</a>`).click(deleteRow)));
        $('#countriesTable').append(row);
        row.css('display','none');
        row.fadeIn();
        fixLinks()
    }
    
    function moveUp() {
        let row = $(this).parent().parent();
        row.fadeOut(function () {
            row.insertBefore(row.prev());
            row.fadeIn();
            fixLinks()
        });
    }
    function moveDown() {
        let row = $(this).parent().parent();
        row.fadeOut(function () {
            row.insertAfter(row.next());
            row.fadeIn();
            fixLinks()
        });
    }
    function deleteRow() {
        let row = $(this).parent().parent();
        row.fadeOut(function () {
            row.remove();
            fixLinks()
        });
    }
}