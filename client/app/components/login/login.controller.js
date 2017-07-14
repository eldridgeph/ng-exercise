class LoginController {
    constructor(loginService) {
        this.loginService = loginService;
    }
    setLogin(value) {
        this.loginService.isAuthenticated = value;
    }
}

export default LoginController;
