import angular from 'angular';
import template from './app.html';

export const AppComponent = {
    template,
    controller: class AppComponent {
        constructor(loginService) {
            this.loginService = loginService;
        }
    }
};