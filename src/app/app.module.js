import angular from 'angular';
import ngTranslate from 'angular-translate';
import ngSanitize from 'angular-sanitize';
import ngRouter from 'angular-ui-router';

import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AssetsModule from '../assets/assets.module';

import CommonModule from './common/common.module';
import ComponentModule from './components/components.module';
import {AppComponent} from './app.component';

angular
        .module('food-app', [
            ngTranslate,
            ngSanitize,
            ngRouter,
            AssetsModule,
            CommonModule,
            ComponentModule
        ])
        .component('appView', AppComponent);