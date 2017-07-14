import angular from 'angular';
import template from './graph.html';
import controller from './graph.controller';
import './graph.css';

import UnAidsComponent from './un-aids/un-aids.component';

let component = {template, controller};

export default angular
        .module('d3-demo.graph', [
            UnAidsComponent
        ])
        .component('d3DemoGraph', component)
        .name;