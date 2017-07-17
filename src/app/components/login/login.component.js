import angular from 'angular';
import template from './login.html'; 

export const LoginComponent = {
    template,
    controller: class LoginComponent {
        constructor(loginService) {
            this.loginService = loginService;
        }
    }
};