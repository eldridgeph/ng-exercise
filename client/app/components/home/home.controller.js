import angular from 'angular';
import LoginService from '../../components/login/login.service';

import * as d3 from 'd3';

import d3FlareCsv from './assets/flare.csv';
import './home.css';

export default class HomeController {

    constructor($log, $interval, $timeout, $scope) {
        this.$scope = $scope;
        this.$interval = $interval;
        this.$timeout = $timeout;
        this.$log = $log;
    }
    logout() {
        LoginService.isAuthenticated = false;
    }
    animationTabOpened() {
        this.$scope.$broadcast('tab.animation.opened', {});
    }
    $onInit() {
    }

}