let remote = (() => {


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