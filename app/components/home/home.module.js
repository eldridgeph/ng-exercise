import angular from 'angular';

import ngUIBootstrapTabs from 'angular-ui-bootstrap/src/tabs';
import D3DemoModule from './d3-demo/d3-demo.module';
import {HomeComponent} from './home.component';

const HomeModule = angular
        .module('components.home', [
            ngUIBootstrapTabs,
            D3DemoModule
        ])
        .config(($arcTranslateProvider) => new $arcTranslateProvider(require('dir-loader!./languages/config.js')))
        .component('homeView', HomeComponent)
        .name;

export default HomeModule;