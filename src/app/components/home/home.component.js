import angular from 'angular';
import template from './home.html';
import './home.css';

export const HomeComponent = {
    template,
    controller: class HomeComponent {
        constructor($log, $interval, $timeout, $scope, $location, loginService, $rootScope) {
            this.$rootScope = $rootScope;
            this.$location = $location;
            this.$scope = $scope;
            this.$interval = $interval;
            this.$timeout = $timeout;
            this.$log = $log;
            this.loginService = loginService;
            this.activeTab = 0;
            this.openTab();
        }
        animationTabOpened() {
            this.$scope.$broadcast('tab.animation.opened', {});
        }

        setTabActive(tabId) {
            let event = `tab.active.where[id=${tabId}]`;
            this.$location.search({tabId: tabId});
            this.$rootScope.$emit(event);
        }

        getActiveTab() {
            let tab = this.$location.search();
            let tabId = tab.tabId || this.activeTab;
            return tabId * 1;
        }

        openTab() {
            let activeTabId = this.getActiveTab();
            this.$location.search({tabId: activeTabId});
        }

        $onInit() {
            this.activeTab = this.getActiveTab();
            angular.element(document).ready(() => this.$timeout(() => this.setTabActive(this.activeTab)));
        }
        $onChanges() {}
    }
};
