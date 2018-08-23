function startApp() {
    const adsDiv = $('#ads');
    const templates = {};


    loadTemplates()
    async function loadTemplates(){
        let [adsCatalogTemplate, adBoxTemplate] = await Promise
            .all([$.get('./templates/ads-Catalog.html'),
                  $.get('./templates/ad-box-partial.html')
            ]);

        templates['catalog'] = Handlebars.compile(adsCatalogTemplate)
        Handlebars.registerPartial('adBox', adBoxTemplate)
    }


    // showing all links
    $('#menu').find('a').show();

    function showView(view) {
        $('main').find('section').hide();
        switch (view){
            case 'home': $('#viewHome').show();
                break;
            case 'login': $('#viewLogin').show();
                break;
            case 'register': $('#viewRegister').show();
                break;
            case 'ads': $('#viewAds').show();
                loadAds();
                break;
            case 'create': $('#viewCreateAd').show();
                break;
            case 'details': $('#viewDetailsAd').show();
                break;
            case 'edit': $('#viewEditAd').show();
                break;
        }
    }
    // // showing the link which we clicked on
    // function showNavigationLinks(el) {
    //     $('main').find('section').hide();
    //     let target = $(el.target).attr('data-target')
    //     $('#' + target).show();
    // }

    //Attach event listeners
    $('#linkHome').click(() => showView('home'));
    $('#linkLogin').click(() => showView('login'));
    $('#linkRegister').click(() => showView('register'));
    $('#linkListAds').click(() => showView('ads'));
    $('#linkCreateAd').click(() => showView('create'));
    $('#linkLogout').click(logout);



    // attach event on Login Button
    $('#buttonLoginUser').click(login);
    // attach event on Register Button
    $('#buttonRegisterUser').click(register);
    $('#buttonCreateAd').click(createAd);



    // NOTIFICATIONS -------

    // Attach AJAX "loading" event listener
    $(document).on({
        ajaxStart: function() { $("#loadingBox").show() },
        ajaxStop: function() { $("#loadingBox").fadeOut() }
    });

    $('#infoBox').click((event) => $(event.target).hide());
    $('#errorBox').click((event) => $(event.target).hide());

    function showInfo(message) {
        $('#infoBox').text(message);
        $('#infoBox').show();
        setTimeout(() => $('#infoBox').fadeOut(),2000);
    }

    function showError(errorMsg) {
        $('#errorBox').text("Error: " + errorMsg);
        $('#errorBox').show();
    }

    function handleError(response) {
        showError(response.responseJSON.description);
    }
// ------------------


    let requester = (() => {

        const appKey = 'kid_SJAntqpVQ';
        const appSecret = 'ebd3dd2ac23343bf9901ac0a5adf5607';
        const baseUrl = 'https://baas.kinvey.com/';

        // checking what the authorizations is -> Basic or Kinvey
        function makeAuth(type) {
            if (type === 'basic') {
                return 'Basic ' + btoa(appKey + ':' + appSecret)
            } else {
                return 'Kinvey ' + localStorage.getItem('authtoken');
            }
        }

        // making the request
        function makingRequest(method, module, url, auth) {
            return {
                method,
                url: baseUrl + module + '/' + appKey + '/' + url,
                headers: {
                    'Authorization': makeAuth(auth),
                }
            };

        }

        function get(module, url, auth) {
            return $.ajax(makingRequest('GET', module, url, auth));
        }

        function post(module, url, data, auth) {
            let req = makingRequest('POST', module, url, auth);
            req.data = JSON.stringify(data);
            req.headers['Content-Type'] = 'application/json';
            return $.ajax(req)
        }

        function update(module, url, data, auth) {
            let req = makingRequest('PUT', module, url, auth);
            req.data = JSON.stringify(data);
            return $.ajax(req)
        }

        function remove(module, url, auth) {
            return $.ajax(makingRequest('DELETE', module, url, auth))

        }

        return {
            get, post, update, remove
        }
    })();

    if (localStorage.getItem('authtoken') !== null && localStorage.getItem('username') !== null) {
        userLoggedIn();
    } else {
        userLoggedOut();
    }
    $('#viewHome').show();

    function userLoggedIn() {
        $('#loggedInUser').text(`Welcome, ${localStorage.getItem('username')}!`);
        $('#loggedInUser').show();
        $('#linkLogin').hide();
        $('#linkRegister').hide();
        $('#linkLogout').show();
        $('#linkListAds').show();
        $('#linkCreateAd').show();
    }

    function userLoggedOut() {
        $('#loggedInUser').hide();
        $('#linkLogin').show();
        $('#linkRegister').show();
        $('#linkLogout').hide();
        $('#linkListAds').hide();
        $('#linkCreateAd').hide();
    }

    // saving responseRequest for the User who is logged in
    function saveSessionAfterLogin(data) {
        localStorage.setItem('username', data.username);
        localStorage.setItem('userId', data._id);
        localStorage.setItem('authtoken', data._kmd.authtoken);
        userLoggedIn();
    }

    // LOGIN FUNCTION FOR USERS
    async function login() {
        let form = $('#formLogin');
        let username = form.find('input[name="username"]').val();
        let password = form.find('input[name=passwd]').val();

        try {
            let data = await requester.post('user', 'login', {username, password}, 'basic');
            saveSessionAfterLogin(data);
            $('#viewLogin').hide();
            showView('ads')
        } catch (err) {
            handleError(err)
        }

    }

    // Register User
    async function register() {
        let form = $('#formRegister');
        let username = form.find('input[name="username"]').val();
        let password = form.find('input[name=passwd]').val();

        try {
            let data = await requester.post('user', '', {username, password}, 'basic');
            saveSessionAfterLogin(data);
            $('#viewRegister').hide();
            $('#viewAds').show();
        } catch (err) {
            handleError(err)
        }
    }

    // LOGOUT the USER
    async function logout() {
        try {
            let data = await requester.post('user', '_logout', {authtoken: localStorage.getItem('authtoken')});
            localStorage.clear();
            userLoggedOut();
            showView('home')
        } catch (err) {
            handleError(err)
        }
    }

    async function loadAds() {
        let content = $('#content');
        content.empty();
        let ads = await requester.get('appdata','advertise');
        ads.forEach(a => {
            if(a._acl.creator === localStorage.getItem('userId')){
                a.isAuthor = true;
            }
        });
        let context = {
            ads
        };


        let html = templates['catalog'](context);
        content.html(html)
        let editBtn = $(content).find('.ad-box').find('.edit');
        let deleteBtn = $(content).find('.ad-box').find('.delete');
        editBtn.click(openEditAd)
        deleteBtn.click(deleteAd)


    }

    async function deleteAd() {
        let id = $(this).parent().attr('data-id');
        await requester.remove('appdata', 'advertise/' + id);
        showInfo('Ad deleted')
        showView('ads')
    }

    async function openEditAd() {

        let id = $(this).parent().attr('data-id');
        let ad = await requester.get('appdata',`advertise/${id}`)

        let form = $('#formEditAd');
        form.find('input[name="title"]').val(ad.title)
        form.find('textarea[name="description"]').val(ad.description)
        form.find('input[name="price"]').val(Number(ad.price)   )
        form.find('input[name="image"]').val(ad.imageURL)


        let date = ad.date
        let publisher = ad.publisher


        form.find('#buttonEditAd').click(() => editAd(id,date,publisher))
        showView('edit')
    }

    async function editAd(id,date,publisher) {
        let form = $('#formEditAd');
        let title = form.find('input[name="title"]').val()
        let description = form.find('textarea[name="description"]').val()
        let price = form.find('input[name="price"]').val()
        let imageURL = form.find('input[name="image"]').val()


        if(title.length === 0){
            showError('Title can not be empty')
            return;
        }

        if(Number.isNaN(price)){
            showError('Price can not be empty')
            return;
        }

        let edittedAd = {
            title,description,price,imageURL,date,publisher
        };

        try {
            await requester.update('appdata','advertise/' + id, edittedAd)
            showView('ads')
        }catch (err) {
            handleError(err)
        }
    }

    async function createAd() {
        let form = $('#formCreateAd')
        let title = form.find('input[name=title]').val();
        let description = form.find('textarea[name=description]').val();
        let price = Number(form.find('input[name=price]').val());
        let imageURL = form.find('input[name=image]').val();
        let date = (new Date()).toString('yyyy-MM-dd');
        let publisher = localStorage.getItem('username');

        if(title.length === 0){
            showError('Title can not be empty')
            return;
        }

        if(Number.isNaN(price)){
            showError('Price can not be empty')
            return;
        }

        let newAd = {
            title,description,price,imageURL,date,publisher
        }

        try {
            await requester.post('appdata','advertise', newAd)
            showView('ads')
        }catch (err) {
            handleError(err)
        }


    }
}
