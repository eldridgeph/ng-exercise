import angular from 'angular';

import D3DemoBasic from './basic/basic.component';
import D3DemoGraph from './graph/graph.component';
import D3DemoAnimation from './animation/animation.component';

export default angular
        .module('d3-demo', [
            D3DemoBasic,
            D3DemoGraph,
            D3DemoAnimation
        ])
        .name;