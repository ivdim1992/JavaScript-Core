let auth = (() => {

    function saveSessionAfterLogin(data) {
        localStorage.setItem('username', data.username);
        localStorage.setItem('userId', data._id);
        localStorage.setItem('authtoken', data._kmd.authtoken);
    }

    // LOGIN FUNCTION FOR USERS
    function login(username, password) {
        return remote.post('user', 'login', {username, password}, 'basic');
    }

    // Register User
    async function register(username, password) {
        return remote.post('user', '', {username, password}, 'basic');
    }

    // LOGOUT the USER
    async function logout() {
        return remote.post('user', '_logout', {authtoken: localStorage.getItem('authtoken')});
    }

    return {saveSessionAfterLogin,login,register,logout}
})();