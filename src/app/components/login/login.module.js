import angular from 'angular';
import loginService from './login.service';
import {LoginComponent} from './login.component';
import {translations, uiRouting} from './login.config';

export default angular
        .module('components.login', [
        ])
        .config(translations)
        .config(uiRouting)
        .service('loginService', loginService)
        .component('loginView', LoginComponent)
        .name;