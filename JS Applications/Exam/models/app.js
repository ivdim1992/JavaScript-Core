$(() => {

    const kinveyBaseUrl = "https://baas.kinvey.com/";
    const kinveyAppKey = "kid_r14w_a9SX"; // APP KEY HERE
    const kinveyAppSecret = "a67d1257e7a4408daffcf64fe901acf7";


    // Attach event listeners
    (() => {
        // SHOWING THE CORRECT VIEWS
        $('#container').find('a[data-target]').click(navigateTo);
        $('#button-div').find('a:first-child').click(function () {
            showView('Login')
        });
        $('#button-div').find('a:nth-child(2)').click(function () {
            showView('Register')
        });
        // SignUp button
        $('#SignUpButton').click(function () {
            showView('Register')
        });
        // SignIn button
        $('#SignInButton').click(function () {
            showView('Login')
        });
        // REGISTER FORM
        $('#viewRegister').submit(registerUser);
        // LOGIN FORM
        $('#viewLogin').submit(loginUser);
        // LOGOUT
        $('#profile').find('a:nth-child(2)').click(logoutUser);


        $('#viewCreateCar').submit(createCar);
        $('#viewEditCar').submit(function (ev) {
            ev.preventDefault();
            editCar();
        });

        $('#container').find('nav').find('a[data-target=MyList]').click(getMyCars)

    })();

    // LOADING EDIT CAR
    function loadEditCar(car) {
        showView('EditCar');

        $('#carTitleEdit').val(car.title);
        $('#carDescriptionEdit').val(car.description);
        $('#carBrandEdit').val(car.brand);
        $('#carModelEdit').val(car.model);
        $('#carYearEdit').val(car.year);
        $('#carImageEdit').val(car.imageUrl);
        $('#carFuelTypeEdit').val(car.fuel);
        $('#carPriceEdit').val(car.price);
        $('#carId').val(car._id)

    }

    //CREATE CAR
    function createCar(ev) {
        ev.preventDefault();

        let title = $('#createTitle').val();
        let description = $('#createDescription').val();
        let brand = $('#createBrand').val();
        let model = $('#createModel').val();
        let year = $('#createYear').val();
        let imageUrl = $('#createImage').val();
        let fuel = $('#createFuel').val();
        let price = $('#createPrice').val();
        let seller = sessionStorage.getItem('username');

        let data = {
            title, description, brand, model, year, imageUrl, fuel, price, seller
        };

        if (title.length > 33 || !title) {
            showError('The title is required but its length must not exceed 33 characters!')
        } else if (description.length > 450 || description < 30) {
            showError('The description length must not exceed 450 characters and should be at least 30!')
        } else if (brand.length > 11 || !brand) {
            showError('The brand is required but its length must not exceed 11 characters!')
        } else if (fuel.length > 11 || !fuel) {
            showError('The fuel is required but its length must not exceed 11 characters!')
        } else if (model.length > 11 || !model) {
            showError('The model is required but its length must not exceed 11 characters!')
        } else if (year.length !== 4) {
            showError('The year must be only 4 chars long!')
        } else if (price > 1000000 || !price) {
            showError('The price cannot be null or more than 1000000$!')
        } else if (!imageUrl.startsWith('http') || !imageUrl) {
            showError('There should be image and its url should always start with “http”')
        } else {
            requester.post('appdata', 'cars', 'Kinvey', data)
                .then((data) => {
                    showView('CarListings');
                    showInfo('Successfully created car');
                    listAllCars();
                }).catch(handleError)
        }

    }

    // CAR DETAILS LISTING
    function carDetails(car) {
        showView('ListingDetails');
        $('#viewListingDetails').empty();
        let div = $('<div>')
            .addClass('my-listing-details')
            .append($('<p>').attr('id', 'auto-title').text(`${car.title}`))
            .append($('<img>').attr('src', `${car.imageUrl}`));

        let innerDiv = $('<div>').addClass('listing-props')
            .append($('<h2>').text(`Brand: ${car.brand}`))
            .append($('<h2>').text(`Model: ${car.model}`))
            .append($('<h2>').text(`Year: ${car.year}`))
            .append($('<h2>').text(`Fuel: ${car.fuel}`))
            .append($('<h2>').text(`Price: ${car.price}`));

        div.append(innerDiv);
        if (car._acl.creator === sessionStorage.getItem('acl')) {
            let lastDiv = $('<div>').addClass('listings-buttons')
                .append($('<a href="#" class="button-list">')
                    .text('Edit')
                    .click(function () {
                        loadEditCar(car)
                    }))
                .append($('<a href="#" class="button-list">')
                    .text('Delete')
                    .click(function () {
                        removeCar(car)
                    }));
            div.append(lastDiv)
        }
        div.append($('<p>')
            .attr('id', 'description-title')
            .text('Description'));
        div.append($('<p>')
            .attr('id', 'description-para')
            .text(`${car.description}`));
        $('#viewListingDetails').append(div)
    }

    // EDIT CAR
    function editCar() {

        let title = $('#carTitleEdit').val();
        let description = $('#carDescriptionEdit').val();
        let brand = $('#carBrandEdit').val();
        let model = $('#carModelEdit').val();
        let year = $('#carYearEdit').val();
        let imageUrl = $('#carImageEdit').val();
        let fuel = $('#carFuelTypeEdit').val();
        let price = $('#carPriceEdit').val();
        let seller = sessionStorage.getItem('username');
        let id = $('#carId').val();
        let data = {
            title, description, brand, model, year, imageUrl, fuel, price, seller
        };

        if (title.length > 33 || !title) {
            showError('The title is required but its length must not exceed 33 characters!')
        } else if (description.length > 450 || description < 30) {
            showError('The description length must not exceed 450 characters and should be at least 30!')
        } else if (brand.length > 11 || !brand) {
            showError('The brand is required but its length must not exceed 11 characters!')
        } else if (fuel.length > 11 || !fuel) {
            showError('The fuel is required but its length must not exceed 11 characters!')
        } else if (model.length > 11 || !model) {
            showError('The model is required but its length must not exceed 11 characters!')
        } else if (year.length !== 4) {
            showError('The year must be only 4 chars long!')
        } else if (price > 1000000 || !price) {
            showError('The price cannot be null or more than 1000000$!')
        } else if (!imageUrl.startsWith('http') || !imageUrl) {
            showError('There should be image and its url should always start with “http”')
        } else {
            $.ajax({
                method: 'PUT',
                url: kinveyBaseUrl + 'appdata/' + kinveyAppKey + '/cars/' + id,
                headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authtoken')},
                data: data
            }).then((data) => {
                showInfo(`Listing ${title} updated.`);
                showView('CarListings');
                listAllCars();
            }).catch(handleError)

        }
    }

    // REMOVE CAR
    function removeCar(car) {
        $.ajax({
            method: 'DELETE',
            url: kinveyBaseUrl + 'appdata/' + kinveyAppKey + '/cars/' + car._id,
            headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authtoken')},

        }).then((res) => {
            showInfo('Car Deleted.');
            showView('CarListings');
            listAllCars();
        }).catch(handleError)
    }

    // SHOWING THE CORRECT VIEW
    function showView(viewName) {
        $('#viewHome').hide();
        $('#viewLogin').hide();
        $('#viewRegister').hide();
        $('#viewCarListings').hide();
        $('#viewCreateCar').hide();
        $('#viewEditCar').hide();
        $('#viewMyList').hide();
        $('#viewListingDetails').hide();
        $('#view' + viewName).show();
    }

    showView('Home');

    // REGISTER USER
    function registerUser(ev) {
        ev.preventDefault();
        let registerUsername = $('#registerUsername').val();
        let registerPassword = $('#registerPassword').val();
        let registerRepeatPassword = $('#registerRepeatPassword').val();

        // Validation
        if (registerUsername.length >= 3 && /[A-Za-z]{3,}/.test(registerUsername)
            && registerPassword.length >= 6 && /[A-Za-z0-9]{6,}/.test(registerPassword) && registerPassword === registerRepeatPassword) {
            auth.register(registerUsername, registerPassword, registerRepeatPassword)
                .then((userInfo) => {
                    showView('CarListings');
                    $('#viewRegister').trigger('reset');
                    showInfo('User registration successful.');
                    userLoggedIn();
                    saveSession(userInfo)

                }).catch(handleError)
        } else if (registerUsername.length < 3) {
            showError('Username should be more than 3 character long')
        } else if (!/[A-Za-z]{3,}/.test(registerUsername)) {
            showError('Username should contain only english alphabet letters.')
        } else if (registerPassword.length < 6) {
            showError('The password should be more than 6 character long.')
        } else if (!/[A-Za-z0-9]{6,}/.test(registerPassword)) {
            showError('Password should contain only English letters and digits.')
        } else if (registerPassword !== registerRepeatPassword) {
            showError('Passwords do not match!')
        }


    }

    // LOGIN USER
    function loginUser(ev) {
        ev.preventDefault();

        let loginUsername = $('#loginUsername').val();
        let loginPassword = $('#loginPassword').val();

        auth.login(loginUsername, loginPassword)
            .then((userInfo) => {
                showInfo('Login successful.');
                userLoggedIn();
                saveSession(userInfo);
                showView('CarListings')
            }).catch(handleError);
        $('#loginUsername').val('');
        $('#loginPassword').val('');
    }


    function listAllCars() {
        requester.get('appdata', 'cars', 'Kinvey')
            .then((dataCars) => {
                displayCars(dataCars)
            }).catch(handleError)
    }


    // DISPLAYING THE CARS FROM DATABASE TO UI
    function displayCars(dataCars) {
        if (dataCars.length === 0) {
            $('.no-cars').show();
        } else {
            $('.no-cars').hide();

            let divCar = $('#listings');
            divCar.empty();

            for (let car of dataCars) {
                let divListin = $('<div>').addClass('listing');
                divListin
                    .append($('<p>').text(`${car.title}`))
                    .append($(`<img>`).attr('src', `${car.imageUrl}`))
                    .append($('<h2>').text(`Brand: ${car.brand}`));

                let classInfo = $('<div>').addClass('info');
                classInfo
                    .append($('<div>')
                        .attr('id', 'data-info')
                        .append($('<h3>').text(`Seller: ${car['seller']}`))
                        .append($('<h3>').text(`Fuel: ${car.fuel}`))
                        .append($('<h3>').text(`Year: ${car.year}`))
                        .append($('<h3>').text(`Price: ${car.price}$`)));

                let buttons = $('<div>').attr('id', 'data-buttons');

                if (car._acl.creator === sessionStorage.getItem('acl')) {
                    let ul = $('<ul>')
                        .append($('<li>')
                            .addClass('action')
                            .append($('<a href="#" class="button-carDetails">')
                                .text('Details')
                                .click(function () {
                                    carDetails(car)
                                })))
                        .append($('<li>')
                            .addClass('action')
                            .append($('<a href="#" class="button-carDetails">')
                                .text('Edit')
                                .click(function () {
                                    loadEditCar(car)
                                })))
                        .append($('<li>')
                            .addClass('action')
                            .append($('<a href="#" class="button-carDetails">')
                                .text('Delete')
                                .click(function () {
                                    removeCar(car)
                                })));
                    buttons.append(ul);
                    classInfo.append(buttons)
                } else {
                    classInfo.append(buttons);
                    classInfo.append($('<div>')
                        .attr('id', 'data-buttons')
                        .append($('<ul>')
                            .append($('<li>')
                                .addClass('action')
                                .append($('<a href="#" class="button-carDetails">')
                                    .text('Details')
                                    .click(function () {
                                        carDetails(car)
                                    })))))
                }
                divListin.append(classInfo);
                divCar.append(divListin)
            }

        }
    }

    // MY CAR LISTING
    function getMyCars() {
        requester.get('appdata', `cars?query={"seller":"${sessionStorage.getItem('username')}"}&sort={"_kmd.ect": -1}`, 'Kinvey')
            .then((res) => {
                displayMyCars(res)
            }).catch(handleError)
    }

    // DISPLAYING MY CARS
    function displayMyCars(cars) {
        let divMyList = $('#viewMyList');
        divMyList.empty();
        divMyList.append($('<h1>').text('My Car Listings'));
        if (cars.length === 0) {
            $('#viewMyList').append($('<p>')
                .addClass('no-cars')
                .text('No cars in database.'))
        } else {
            for (let car of cars) {
                let div = $('<div>')
                    .addClass('my-listing')
                    .append($('<p>').attr('id', 'listing-title').text(`${car.title}`))
                    .append($('<img>').attr('src', `${car.imageUrl}`));

                let innerDiv = $('<div>').addClass('listing-props')
                    .append($('<h2>').text(`Brand: ${car.brand}`))
                    .append($('<h2>').text(`Model: ${car.model}`))
                    .append($('<h2>').text(`Year: ${car.year}`))
                    .append($('<h2>').text(`Fuel: ${car.fuel}`))
                    .append($('<h2>').text(`Price: ${car.price}`));

                let lastDiv = $('<div>').addClass('my-listing-buttons');
                lastDiv.append($('<a href="#" class="my-button-list">').text('Details').on('click', function () {
                    carDetails(car);
                }));
                lastDiv.append($('<a href="#" class="my-button-list">').text('Edit').on('click', function () {
                    loadEditCar(car);
                }));
                lastDiv.append($('<a href="#" class="my-button-list">').text('Delete').on('click', function () {
                    removeCar(car);
                }));
                div.append(innerDiv);
                div.append(lastDiv);
                divMyList.append(div);
            }
        }
    }

    // LOGOUT USER
    function logoutUser() {
        auth.logout()
            .then(() => {
                sessionStorage.clear();
                userLoggedOut();
                showInfo('Logout successful');
                showView('Home')
            }).catch(handleError)

    }

    function navigateTo() {
        let viewName = $(this).attr('data-target');
        showView(viewName)
    }

    function userLoggedOut() {
        $('#profile').hide();
        $('a[data-target]').hide();
        $('a[data-target]:first-child').show();
    }

    function userLoggedIn() {
        let username = sessionStorage.getItem('username');
        $('#profile').find('a:first-child').text(`Welcome ${username}`);
        $('#profile').show();
        $('a[data-target]').show();
        listAllCars();
        $('a[data-target]:first-child').show().click(function () {

            showView('CarListings')
        })
    }

    // Checking if the User is loggedIn or loggedOut
    if (sessionStorage.getItem('authtoken') === null) {
        userLoggedOut()
    } else {
        userLoggedIn()
    }


    function saveSession(userInfo) {
        sessionStorage.setItem('authtoken', userInfo._kmd.authtoken);
        sessionStorage.setItem('username', userInfo.username);
        sessionStorage.setItem('userId', userInfo._id);
        sessionStorage.setItem('acl', userInfo._acl.creator);
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