import angular from 'angular';

import ngUIBootstrapTabs from 'angular-ui-bootstrap/src/tabs';
import D3DemoComponents from '../d3-demo/d3-demo.component';
import {HomeComponent} from './home.component';

export default angular
        .module('components.home', [
            ngUIBootstrapTabs,
            D3DemoComponents
        ])
        .config(($arcTranslateProvider) => new $arcTranslateProvider(require('dir-loader!./languages/config.js')))
        .component('homeView', HomeComponent)
        .name;