import angular from 'angular';

import d3GraphModule from './graph/graph.module';
import d3BehaviorModule from './behavior/behavior.module';
import d3UtilModule from './util/util.module';

const D3Module = angular
        .module('d3', [
            d3GraphModule,
            d3BehaviorModule,
            d3UtilModule
        ])
        .name;

export default D3Module;