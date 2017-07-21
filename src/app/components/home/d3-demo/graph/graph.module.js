import angular from 'angular';
import './graph.css';

import UnAidsModule from './un-aids/un-aids.module';
import {GraphComponent} from './graph.component';
import PopulationModule from './population/population.module';

const GraphModule = angular
        .module('d3-demo.graph', [
            UnAidsModule,
            PopulationModule
        ])
        .component('d3DemoGraph', GraphComponent)
        .name;

export default GraphModule;