import angular from 'angular';
import HomeComponent from './home/home.component';
import LoginComponent from './login/login.component';

export default angular.module('app.components', [
    HomeComponent,
    LoginComponent
]).name;