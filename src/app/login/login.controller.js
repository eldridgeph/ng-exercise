import LoginService from './login.service';

class LoginController {
    constructor() {
        this.isAuthenticated = false;
    }
    setLogin(value) {
        this.isAuthenticated = typeof value === 'undefined' ? false : value;
        LoginService.isAuthenticated = this.isAuthenticated;
        console.log('isAuthenticated', this.isAuthenticated);
    }
}

export default LoginController;
