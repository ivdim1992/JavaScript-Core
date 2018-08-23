const handlers = {};


$(() => {

    const app = Sammy('#main',function () {
        this.use('Handlebars','hbs');

        this.get('index.html',displayWelcome);

        function displayWelcome() {
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/welcome.hbs')
            });
        }

        this.get('#/register',function () {
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/register.hbs')
            })
        });

        this.get('#/contacts',handlers.contactController);

        this.get('#/profile',function () {
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/profile.hbs')
            });
        });

        this.get('#/logout',function () {
            auth.logout()
                .then(() => {
                    localStorage.clear();
                    this.redirect('index.html')
                })
        });

        this.post('#/login',function () {
            let username = this.params.username;
            let password = this.params.password;
            auth.login(username,password)
                .then((data) => {
                    auth.saveSessionAfterLogin(data)
                    this.redirect('#/contacts')
                })
        });

        this.post('#/register',function () {
            // register
        });

        this.post('#/profile',function () {
            // handle login
        })
    }).run();

    // home // login
    //register
    //contact book
    // profile
    //logout

    // post login
    // post register
    // post  edit profile
    // *user search
    // *messages
});
