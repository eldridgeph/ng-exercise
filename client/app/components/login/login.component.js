import angular from 'angular';
import template from './login.html';
import controller from './login.controller';
import {translation} from './login.config.js';

let component = {template, controller};

export default angular
        .module('login', [])
        .config(translation)
        .component('loginView', component)
        .name;