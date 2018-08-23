function createBook(selector,title,author,isbn) {

    let bookGenerate = (function () {
        let id = 1;

        return function(selector,title,author,isbn){
            let container = $(selector);
            
            let createBook = $('<div>');

            createBook.addClass('id',`book${id++}`);
            createBook.append($('<p>').addClass('title').text(`${title}`));
            createBook.append($('<p>').addClass('author').text(`${author}`));
            createBook.append($('<p>').addClass('isbn').text(`${isbn}`));
            let selectBtn = $('<button>').text('Select');
            let deselectBtn = $('<button>').text('Deselect');



            selectBtn.click(function () {
                createBook.css('border','2px solid blue')
            });

            deselectBtn.click(function () {
                createBook.css('border','none')
            });

            createBook.append(selectBtn);
            createBook.append(deselectBtn);
            container.append(createBook)
        }

    }());

     bookGenerate(selector,title,author,isbn)
}