import angular from 'angular';
import ngTranslate from 'angular-translate';
import ngSanitize from 'angular-sanitize';

import './app.css';
import 'bootstrap-loader';

import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';

import loginService from './components/login/login.service';
import sessionService from './common/session/session.service';

import d3Service from './common/d3/d3.service';

angular
        .module('food-app', [
            ngTranslate,
            ngSanitize,
            Common,
            Components
        ])
        .factory('loginService', loginService)
        .factory('sessionService', sessionService)
        .factory('d3Service', d3Service)
        .component('appView', AppComponent);