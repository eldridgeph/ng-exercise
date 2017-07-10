import angular from 'angular';
import template from './login.html';
import controller from './login.controller';

let componentAttrs = {template, controller};

export default angular
        .module('login', [])
        .config(loginTranslationConfig)
        .component('loginView', componentAttrs)
        .name;

function loginTranslationConfig($translateProvider) {

    $translateProvider.translations('en', {
        TITLE: 'Arcanys team lunch',
        LOGIN: 'Log in',
        EMAIL: 'Email',
        PASSWORD: 'Password',
        PLS_ENTER_USERNAME: 'Please enter username',
        PLS_ENTER_PASSWORD: 'Please enter password',
        REMEMBER_ME: 'Remember me',
        EXAMPLE_EMAIL_ADDRESS: 'example@email.com'
    });

    $translateProvider.translations('de', {
        TITLE: 'Arcanys Team Mittagessen',
        LOGIN: 'Einloggen Einloggen',
        EMAIL: 'Email',
        PASSWORD: 'Passwort',
        PLS_ENTER_USERNAME: 'Bitte Benutzernamen eingeben',
        PLS_ENTER_PASSWORD: 'Bitte Passwort eingeben',
        REMEMBER_ME: 'Erinnere dich an mich',
        EXAMPLE_EMAIL_ADDRESS: 'example@email.com'
    });


    $translateProvider.preferredLanguage('en');
}