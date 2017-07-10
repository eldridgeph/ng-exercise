import angular from 'angular';
import ngTranslate from 'angular-translate';
import ngSanitize from 'angular-sanitize';

import './app.css';
import 'bootstrap-loader';

import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';

angular
        .module('food-app', [
            ngTranslate,
            ngSanitize,
            Common,
            Components
        ])
        .component('appView', AppComponent);