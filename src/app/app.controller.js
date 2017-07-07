import LoginService from './login/login.service';

export default class AppController {
    constructor() {

    }
    isLoggedIn() {
        return !!LoginService.isAuthenticated;
    }
    login() {
        LoginService.isAuthenticated = true;
    }
    logout() {
        console.log('logout');
        LoginService.isAuthenticated = false;
    }
}