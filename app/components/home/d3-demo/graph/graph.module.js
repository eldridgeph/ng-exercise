import angular from 'angular';
import './graph.css';

import UnAidsModule from './un-aids/un-aids.module';
import {GraphComponent} from './graph.component';

const GraphModule = angular
        .module('d3-demo.graph', [
            UnAidsModule
        ])
        .component('d3DemoGraph', GraphComponent)
        .name;

export default GraphModule;