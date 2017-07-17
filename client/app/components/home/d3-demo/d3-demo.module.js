import angular from 'angular';

import D3DemoBasicModule from './basic/basic.module';
import D3DemoGraphModule from './graph/graph.module';
import D3DemoAnimationModule from './animation/animation.module';

const D3DemoModule = angular
        .module('home.d3-demo', [
            D3DemoBasicModule,
            D3DemoGraphModule,
            D3DemoAnimationModule
        ])
        .name;

export default D3DemoModule;