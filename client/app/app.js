import angular from 'angular';
import ngTranslate from 'angular-translate';
import ngSanitize from 'angular-sanitize';

import './app.css';
import 'bootstrap-loader';

import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';

import D3Module from './common/d3/d3';

angular
        .module('food-app', [
            ngTranslate,
            ngSanitize,
            Common,
            Components,
            D3Module
        ]) 
        .component('appView', AppComponent);