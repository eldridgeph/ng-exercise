import angular from 'angular';
import template from './language.html';
import controller from './language.controller';
import provider from './language.provider';

let component = {template, controller};

export default angular
        .module('language', [
        ])
        .provider('$language', provider)
        .config(($languageProvider) => $languageProvider.load(require('dir-loader!./languages/config.js')))
        .component('languageSelect', component)
        .name;