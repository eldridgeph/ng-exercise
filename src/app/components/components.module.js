import angular from 'angular';
import HomeModule from './home/home.module';
import LoginModule from './login/login.module';

const ComponentsModule = angular
        .module('app.components', [
            HomeModule,
            LoginModule
        ]).name;

export default ComponentsModule;