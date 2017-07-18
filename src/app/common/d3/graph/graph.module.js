import angular from 'angular';
import graphService from './graph.service';
import axisService from './axis.service';

const GraphModule = angular
        .module('d3.graph', [])
        .service('d3Graph', graphService)
        .service('d3Axis', axisService)
        .name;

export default GraphModule;