function sort(colIndex, descending) {
    let items = $('#products tbody tr');

    if(colIndex === 0){
        if(descending){
            items.sort((a,b) => $($(b).children()[0]).text().localeCompare($($(a).children()[0]).text()))
        }else {
            items.sort((a,b) => $($(a).children()[0]).text().localeCompare($($(b).children()[0]).text()))
        }
    }else {
        if(descending){
            items.sort((a,b) => $($(b).children()[1]).text() - $($(a).children()[1]).text())
        }else {
            items.sort((a,b) => $($(a).children()[1]).text() - $($(b).children()[1]).text())
        }
    }

    $('#products').append(items)
}