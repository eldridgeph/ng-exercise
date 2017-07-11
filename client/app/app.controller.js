import LoginService from './components/login/login.service';

export default class AppController {
    constructor() {

    }
    $onInit($timeout) {
            this.login();
    }
    isLoggedIn() {
        return !!LoginService.isAuthenticated;
    }
    login() {
        LoginService.isAuthenticated = true;
    }
    logout() {
        LoginService.isAuthenticated = false;
    }
}