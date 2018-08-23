const app = Sammy('#main', function () {
    this.use('Handlebars', 'hbr')

    this.get('index.html', () => {
        this.swap('<h2>Home Page</h2>');
    });
    this.get('#/about', () => {

        this.swap('<h2>About Page</h2>');
    });
    this.get('#/contact', () => {

        this.swap('<h2>Contact Page</h2>');
    });

    this.get('#/catalog', displayCatalog)


    this.get('#/catalog/:productId', displayCatalog)

    function displayCatalog(context) {
        context.swap(`<h2>Catalog</h2>
<a href="#/catalog/01">Catalog 1</a>
<a href="#/catalog/02">Catalog 2</a>`);

        console.log(context.params)
    }

    this.get('#/login', () => {
        this.swap(`<form action="#/login" method="post">
User: <input name="user" type="text"><br>
Pass: <input name="password" type="password"><br>
<input type="submit" value="Login">`)
    });

    this.post('#/login', (context) => {
        console.log(context.params.user);
        console.log(context.params.password)
        context.redirect('#/catalog')
    });

    this.get('#/greet/:name',function (context){
        context.loadPartials({
            first_partial: './templates/partial1.hbr',
            second_partial: './templates/partial2.hbr'
        }).then(function(){
            console.log(context)
            console.log(this)
            context.partials = this.partials
            context.title = 'Handlebars';
            context.name = context.params.name;
            context.partial('./templates/greeting.hbr')

        })


    })
});
$(() => {
    app.run();
});