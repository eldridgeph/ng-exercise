import angular from 'angular';
import template from './home.html';
import './home.css';

import angularUiBootstrapTabs from 'angular-ui-bootstrap/src/tabs';
import D3DemoComponents from '../d3-demo/d3-demo.component';

export const HomeComponent = {
    template,
    controller: class HomeComponent {
        constructor($log, $interval, $timeout, $scope, loginService) {
            this.$scope = $scope;
            this.$interval = $interval;
            this.$timeout = $timeout;
            this.$log = $log;
            this.loginService = loginService;
        }
        animationTabOpened() {
            this.$scope.$broadcast('tab.animation.opened', {});
        }
        $onInit() {
        }

    }
};
