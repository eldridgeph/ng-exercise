import angular from 'angular';
import template from './home.html';
import controller from './home.controller';
import * as d3 from 'd3';
 
let componentAttrs = {
    template, controller
};

export default angular
        .module('home', [])
        .component('homeView', componentAttrs)
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
}