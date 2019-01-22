function addDestination() {
    let city = $('.inputData')[0];
    let country = $('.inputData')[1];
    let seasons = $('#seasons').find(':selected').text();

    if (seasons === 'Summer') {
        let oldValue = Number($('#summaryBox').find('#summer').val());
        Number($('#summer').val(++oldValue));
    }else if(seasons === 'Autumn'){
        let oldValue = Number($('#summaryBox').find('#autumn').val());
        Number($('#autumn').val(++oldValue));
    }else if(seasons === 'Winter'){
        let oldValue = Number($('#summaryBox').find('#winter').val());
        Number($('#winter').val(++oldValue));
    }else {
        let oldValue = Number($('#summaryBox').find('#spring').val());
        Number($('#spring').val(++oldValue));
    }

    if(city.value !== '' && country.value !== ''){
        let container = $('#wrapper').find('#destinationsList');

        container
            .append($('<tr>')
                .append($('<td>').text(`${city.value}, ${country.value}`))
                .append($('<td>').text(`${seasons}`)));

        $('.inputData').val('');
        $('.inputData').val('');

    }
}