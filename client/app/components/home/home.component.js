import angular from 'angular';
import template from './home.html';
import controller from './home.controller';

let component = {
    template, controller
};

export default angular
        .module('home', [])
        .component('homeView', component)
        .config(homeTranslationConfig)
        .name;


function homeTranslationConfig($translateProvider) {
    $translateProvider.translations('en', {
        'LOGOUT': 'Logout'
    });

    $translateProvider.translations('de', {
        'LOGOUT': 'Ausloggen'
    });

    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy('escapeParameters');
}