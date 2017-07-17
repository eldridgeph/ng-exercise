import angular from 'angular';
import loginService from './login.service';
import {LoginComponent} from './login.component';

export default angular
        .module('components.login', [
        ])
        .config(($arcTranslateProvider) => new $arcTranslateProvider(require('dir-loader!./languages/config.js')))
        .service('loginService', loginService)
        .component('loginView', LoginComponent)
        .name;