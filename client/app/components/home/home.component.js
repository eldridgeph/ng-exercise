import angular from 'angular';
import template from './home.html';
import controller from './home.controller';

import angularUiBootstrapTabs from 'angular-ui-bootstrap/src/tabs';
import D3DemoComponents from '../d3-demo/d3-demo.component';

let component = {
    template, controller
};

export default angular
        .module('home', [
            angularUiBootstrapTabs,
            D3DemoComponents
        ])
        .config(($arcTranslateProvider) => new $arcTranslateProvider(require('dir-loader!./languages/config.js')))
        .component('homeView', component)
        .name;