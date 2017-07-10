import angular from 'angular';
import template from './language.html';
import controller from './language.controller';

let component = {template, controller};

export default angular
        .module('language', [
        ])
        .config(languageTranslation)
        .component('languageSelect', component)
        .name;


function languageTranslation($translateProvider) {
    $translateProvider.translations('en', {
        'en': 'English',
        'de': 'German'
    });
    $translateProvider.translations('de', {
        'en': 'Englisch',
        'de': 'Deutsch'
    });
}