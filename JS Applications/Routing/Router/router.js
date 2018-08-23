$(() => {
    const content = {
        home: '<h2>Home page</h2>',
        about: '<h2>About page</h2>',
        contact: '<h2>Contact page</h2>'
    };
    const main = $('#main');

    $(window).on('hashchange', loadContent);



    function loadContent() {
        let hash = location.hash.substring(2);

        if (hash === '') {
            hash = 'home';
            location.hash = '#/' + hash;
        }

        if(content.hasOwnProperty(hash)){
            main.html(content[hash])
        }else {
            main.html('<p>404 Not Found!</p>')
        }
    }
});