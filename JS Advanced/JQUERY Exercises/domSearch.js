function domSearch(selector,isSensitive) {

    
    let divAddControls = $('<div>').addClass('add-controls')
        .append($('<label>').text('Enter text:').append($('<input>')))
        .append($('<a>Add</a>')
            .addClass('button')
            .click(function () {

            let inputText = $('.add-controls input');
            if(inputText.val() !== ''){
                let ulItems = $('.result-controls .items-list');
                ulItems
                    .append($('<li>').addClass('list-item')
                        .append($('<a>').addClass('button').text('X').click(function () {
                            $(this).parent().remove()
                        }))
                        .append($('<strong>').text(`${inputText.val().trim()}`)));

                inputText.val('')
            }
        }));

    let divSearchControls = $('<div>')
        .addClass('search-controls')
        .append($('<label>').text('Search:').append($('<input>')
            .on('input',function () {
            let searchVal = $(this).val();
            let items = $('.list-item strong').toArray();

            for(let item of items){
                let current = $(item);

                if(isSensitive){
                    if(current.text().indexOf(searchVal) < 0){
                        current.parent().css('display','none')
                    }else {
                        current.parent().css('display','block')
                    }
                }else {
                    if(current.text().toLowerCase().indexOf(searchVal.toLowerCase()) < 0){
                        current.parent().css('display', 'none')
                    }else {
                        current.parent().css('display', 'block')
                    }
                }
            }
        })));


    let divResultControls = $('<div>').addClass('result-controls')
        .append($('<ul>').addClass('items-list'));

    $(selector).append(divAddControls).append(divSearchControls).append(divResultControls)


}