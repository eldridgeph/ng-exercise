import angular from 'angular';
import angularTranslate from 'angular-translate';
import angularSanitize from 'angular-sanitize';

import './app.css';
import 'bootstrap-loader';

import {LoginComponent, AppComponent, HomeComponent} from './app.component';
import {LoginService} from './app.service.js';

angular
        .module('food-app', [
            angularTranslate,
            angularSanitize,
            LoginComponent,
            HomeComponent
        ])
        .component('appView', AppComponent);