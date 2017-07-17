import angular from 'angular';
import ngTranslate from 'angular-translate';
import ngSanitize from 'angular-sanitize';

import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import CommonModule from './common/common';
import ComponentModule from './components/components';
import {AppComponent} from './app.component';

import D3Module from './common/d3/d3';

angular
        .module('food-app', [
            ngTranslate,
            ngSanitize,
            CommonModule,
            ComponentModule,
            D3Module
        ])
        .component('appView', AppComponent);