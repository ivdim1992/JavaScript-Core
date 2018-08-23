$(() => {


    // Attach Event Listeners
    (() => {
        $('header').find('a[data-target]').click(navigateTo);
        // REGISTER FORM
        $('#formRegister').submit(registerUser);
        //LOGIN FORM
        $('#formLogin').submit(loginUser);
        // LOGOUT
        $('#linkMenuLogout').click(logoutUser);
        // Inner button showing the PRODUCTS
        $('#linkUserHomeShop').click(() => {
            showView('Shop');
            listAllProducts();
        });
        //Inner button showing what you have in cart
        $('#linkUserHomeCart').click(() => {
            showView('Cart')

        })
    })();

    showView('AppHome');


    function registerUser(ev) {
        ev.preventDefault();
        let registerUsername = $('#registerUsername').val();
        let registerPasswd = $('#registerPasswd').val();
        let registerName = $('#registerName').val();
        auth.register(registerUsername, registerPasswd, registerName)
            .then((userInfo) => {
                showInfo('User registration successful.');
                userLoggedIn();
                saveSession(userInfo);
            }).catch(handleError)
    }


    function loginUser(ev) {
        ev.preventDefault();
        let username = $('#loginUsername').val();
        let password = $('#loginPasswd').val();

        auth.login(username, password)
            .then((userInfo) => {
                showInfo('Login successful.');
                userLoggedIn();
                saveSession(userInfo);
            }).catch(handleError)
    }

    function logoutUser() {
        auth.logout()
            .then(() => {
                sessionStorage.clear();
                userLoggedOut();
                showInfo('Logout successful');
                showView('AppHome')
            }).catch(handleError)

    }

    // List all the products from database
    function listAllProducts() {
        requester.get('appdata', 'products', 'Kinvey')
            .then((dataProducts) => {
                let divProduct = $('#shopProducts').find('tbody');
                divProduct.empty();

                for (let product of dataProducts) {
                    divProduct.append($('<tr>')
                        .append($('<td>').text(`${product.name}`))
                        .append($('<td>').text(`${product.description}`))
                        .append($('<td>').text(`${Number(product.price).toFixed(2)}`))
                        .append($('<td>').append($('<button>').text('Purchase').click(purchaseProduct.bind(null, product)))))
                }
            })
    }

    // purchaseProduct -> purchasing the product
    function purchaseProduct(product) {
        showInfo('Product purchased.')


        requester.get('user', sessionStorage.getItem('userId'), 'Kinvey')
            .then((userInfo) => {

                userInfo.cart = userInfo.cart || {};

                if (userInfo.cart.hasOwnProperty(product._id)) {
                    userInfo.cart[product._id].quantity = Number(userInfo.cart[product._id].quantity) + 1;
                } else {
                    userInfo.cart[product._id] = {
                        quantity: 1,
                        product: {
                            name: product.name,
                            description: product.description,
                            price: product.price
                        }
                    }
                }
                requester.update('user', sessionStorage.getItem('userId'), 'kinvey', userInfo)
                    .then(() => {
                        showInfo('Product Purchased');
                        showViewCart()
                    })
            })
    }

    // Showing the items in the cart
    function showViewCart() {
        showView('Cart');

        requester.get('user',sessionStorage.getItem('userId'),'kinvey')
            .then((userInfo) => {
                let cart = userInfo.cart || {}
                renderCart(cart)
            })
    }

    function renderCart(cart) {
        $('#viewCart .products').empty();
        let table = $("<table><thead><tr><th>Product</th><th>Description</th><th>Quantity</th><th>Total Price</th><th>Actions</th></tr></thead></table>");
        let tbody = $("<tbody>");
        table.append(tbody);
        for (let product in cart) {

            let discardButton = $("<button>Discard</button>")
                .click(discardProduct.bind(null, product));
            let tr = $("<tr>")
                .append($("<td>").text(cart[product].product.name))
                .append($("<td>").text(cart[product].product.description))
                .append($("<td>").text(cart[product].quantity))
                .append($("<td>").text((Number(cart[product].quantity) * Number(cart[product].product.price)).toFixed(2)))
                .append($("<td>").append(discardButton));
            tbody.append(tr);
        }
        $('#viewCart .products').append(table);
        // showInfo('Cart loaded successfully.');
    }



    function discardProduct(productId) {
        requester.get('user', sessionStorage.getItem('userId'), 'Kinvey')
            .then((userInfo) => {

                userInfo.cart = userInfo.cart || {};

                if (userInfo.cart.hasOwnProperty(productId)) {
                    delete userInfo.cart[productId];
                }


                requester.update('user', sessionStorage.getItem('userId'), 'kinvey', userInfo)
                    .then(() => {
                        showInfo('Product Purchased');
                        showViewCart()
                    })
            })

    }

    // checking if the user is LoggedIn or LoggOut and showing the appropriate VIEWS
    if (sessionStorage.getItem('authtoken') === null) {
        userLoggedOut()
    } else {
        userLoggedIn()
    }

    // showing views after clicking on the links
    function navigateTo() {
        let viewName = $(this).attr('data-target');
        showView(viewName)
    }

    // Shows View at a time
    function showView(viewName) {
        $('main > section').hide();
        $('#view' + viewName).show();
    }


    // what to show when user is loggedOut
    function userLoggedOut() {
        $('#spanMenuLoggedInUser').text('');
        $('.anonymous').show();
        $('.useronly').hide();
        showView('AppHome')
    }

    // what to show when user is loggedin
    function userLoggedIn() {
        let username = sessionStorage.getItem('username');
        $('#spanMenuLoggedInUser').text(`Welcome, ` + username + '!');
        $('#viewUserHomeHeading').text(`Welcome, ` + username + '!');
        $('.anonymous').hide();
        $('.useronly').show();
        showView('UserHome')
    }


    function saveSession(userInfo) {
        let userAuth = userInfo._kmd.authtoken;
        sessionStorage.setItem('authtoken', userAuth);
        let userId = userInfo._id;
        sessionStorage.setItem('userId', userId);
        let username = userInfo.username;
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('name', userInfo['name']);
        userLoggedIn();
    }

    function handleError(reason) {
        showError(reason.responseJSON.description);
    }

    function showInfo(message) {
        let infoBox = $('#infoBox');
        infoBox.text(message);
        infoBox.show();
        setTimeout(() => infoBox.fadeOut(), 3000);
    }

    function showError(message) {
        let errorBox = $('#errorBox');
        errorBox.text(message);
        errorBox.show();
        setTimeout(() => errorBox.fadeOut(), 3000);
    }


    // Handle notifications
    $(document).on({
        ajaxStart: () => $("#loadingBox").show(),
        ajaxStop: () => $('#loadingBox').fadeOut()
    });
});