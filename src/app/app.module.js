import angular from 'angular';
import ngTranslate from 'angular-translate';
import ngSanitize from 'angular-sanitize';

import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import CommonModule from './common/common.module';
import ComponentModule from './components/components.module';
import {AppComponent} from './app.component';
 
angular
        .module('food-app', [
            ngTranslate,
            ngSanitize,
            CommonModule,
            ComponentModule
        ])
        .component('appView', AppComponent);