import angular from 'angular';
import d3Graph from './graph/graph';
import d3Axis from './graph/axis';
import d3Behavior from './behavior/behavior';

export default angular
        .module('d3', [])
        .service('d3Graph', d3Graph)
        .service('d3Axis', d3Axis)
        .service('d3Behavior', d3Behavior)
        .name;