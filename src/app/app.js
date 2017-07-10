import angular from 'angular';
import ngTranslate from 'angular-translate';
import ngSanitize from 'angular-sanitize';

import './app.css';
import 'bootstrap-loader';

import {LoginComponent, AppComponent, HomeComponent, LanguageComponent} from './app.component';

angular
        .module('food-app', [
            ngTranslate,
            ngSanitize,
            LoginComponent,
            HomeComponent,
            LanguageComponent
        ])
        .component('appView', AppComponent);