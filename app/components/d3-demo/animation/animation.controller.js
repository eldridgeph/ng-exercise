import * as d3 from 'd3';

export default class  AnimationController {
    constructor($interval, $timeout, $scope) {
        this.$timeout = $timeout;
        this.$interval = $interval;
        this.$scope = $scope;
    }
    $onInit() {
       
    }
}