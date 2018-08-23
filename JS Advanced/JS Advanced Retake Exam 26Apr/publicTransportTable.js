class PublicTransportTable {
    constructor(town) {
        this.changeName(town)
    }

    changeName(name){
        $('table > caption').text(name + "'s Public Transport")
    }
    addVehicle(vehicleObj) {

        let isClicked = true;
        let tr = $('<tr>').addClass('hide-info')
            .append($('<td>').text(vehicleObj.type))
            .append($('<td>').text(vehicleObj.name))
            .append($('<td>').append($('<button>').text('More Info')))
        $('.vehicles-info').append(tr);

//-------------- Show More /// Show Less Button


        $('.vehicles-info tr:last-child button').on('click', function () {
            if (isClicked) {
                $(this).text('Less Info');
                let currentRow = $(this).parent().parent()
                let trInner = $('<tr>').addClass('more-info')
                    .append($('<td colspan="3">')
                        .append($('<table>')
                            .append($('<tbody>')
                                .append($('<tr>').append($('<td>').text('Ruote: ' + vehicleObj.route)))
                                .append($('<tr>').append($('<td>').text('Price: ' + vehicleObj.price)))
                                .append($('<tr>').append($('<td>').text('Driver: ' + vehicleObj.driver))))));
                trInner.insertAfter(currentRow)
            }

            if (!isClicked) {
                $(this).on('click', function () {
                    $(this).text('More Info')
                    $('.more-info').remove()
                })
            }
        })

//-------------  SEARCH Button

        let searchButton = $('table > thead tr:last-child > td:last-child button:first-child')
        let clearButton = $('table > thead tr:last-child > td:last-child button:last-child')

        let inputTypeFilter
        let inputNameFilter

        searchButton.on('click', function () {
             inputTypeFilter = $('table > thead tr:last-child > td:first-child input')
             inputNameFilter = $('table > thead tr:last-child > td:nth-child(2) input')


            let items = $('.vehicles-info > tr');

            for (let item of items) {
                let currentItem = $(item)
                if (currentItem.text().indexOf(inputTypeFilter.val()) === -1) {
                    currentItem.css('display', 'none')
                }else {
                    currentItem.css('display', '')
                }
                if(currentItem.text().indexOf(inputNameFilter.val()) === -1){
                    currentItem.css('display', 'none')
                }else {
                    currentItem.css('display', '')
                }
            }
        });

        //------------- CLEAR BUTTON

        clearButton.on('click', function () {
            let items = $('.vehicles-info > tr');
            for(let item of items){
                let current = $(item)
                current.show()
            }
            inputTypeFilter.val('')
            inputNameFilter.val('')
        })
    }
}
