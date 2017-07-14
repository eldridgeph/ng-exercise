export default class AppController {
    constructor(loginService) {
        this.loginService = loginService;
    }
    $onInit($timeout) {
        this.login();
    }
    isLoggedIn() {
        return !!this.loginService.isAuthenticated;
    }
    login() {
        this.loginService.isAuthenticated = true;
    }
    logout() {
        this.loginService.isAuthenticated = false;
    }
}