import angular from 'angular';
import template from './animation.html';
 
export const AnimationComponent = {
    template,
    controller: class  AnimationController {
        constructor($interval, $timeout, $scope) {
            this.$timeout = $timeout;
            this.$interval = $interval;
            this.$scope = $scope;
        }
        $onInit() {

        }
    }
};
  