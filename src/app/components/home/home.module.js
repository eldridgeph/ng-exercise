import angular from 'angular';
import ngUiRouter from 'angular-ui-router';
import ngUiBootstrapTabs from 'angular-ui-bootstrap/src/tabs';

import D3DemoModule from './d3-demo/d3-demo.module';
import {HomeComponent} from './home.component';
import {translations, uiRouting} from './home.config';

const HomeModule = angular
        .module('components.home', [
            ngUiRouter,
            ngUiBootstrapTabs,
            D3DemoModule
        ])
        .config(translations)
        .config(uiRouting)
        .component('homeView', HomeComponent)
        .name;

export default HomeModule;