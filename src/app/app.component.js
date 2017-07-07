
import angular from 'angular';
import template from './app.html';
import controller from './app.controller';

import HomeComponent from './home/home.component';
import LoginComponent from './login/login.component';

let AppComponent = {template, controller};

export {AppComponent, LoginComponent, HomeComponent};