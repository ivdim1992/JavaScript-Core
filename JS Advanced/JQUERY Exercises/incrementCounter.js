function increment(selector) {
    let container = $(selector);
    let textArea = $('<textarea>').addClass('counter').attr('disabled','true').val(0).appendTo(container);
    let incrementBtn = $('<button>').addClass('btn').attr('id','incrementBtn').text('Increment').appendTo(container);
    let addBtn = $('<button>').addClass('btn').attr('id','addBtn').text('Add').appendTo(container);
    let ul = $('<ul>').addClass('results').appendTo(container);


    incrementBtn.click(increase);

    addBtn.click(addItem);


    function increase() {
        textArea.val(+textArea.val() + 1)
    }

    function addItem() {
        let li = $('<li>').text(`${textArea.val()}`);
        $('ul.results').append(li)
    }
    container.appendTo($('#wrapper'))
}