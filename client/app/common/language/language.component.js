import angular from 'angular';
import template from './language.html';
import controller from './language.controller';
import provider from './language.provider';

let component = {template, controller};

export default angular
        .module('language', [
        ])
        .provider('$arcTranslate', provider)
        .config(($arcTranslateProvider) => new $arcTranslateProvider(require('dir-loader!./languages/config.js')))
        .component('languageSelect', component)
        .name;