import angular from 'angular';
import template from './login.html';
import controller from './login.controller';
import loginService from './login.service';
import LanguageComponent from '../../common/language/language.component';

let component = {template, controller};

export default angular
        .module('login', [
        ])
        .config(($arcTranslateProvider) => new $arcTranslateProvider(require('dir-loader!./languages/config.js')))
        .service('loginService', loginService)
        .component('loginView', component)
        .name;