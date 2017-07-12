import angular from 'angular';
import template from './graph.html';
import controller from './graph.controller';
import './graph.css';

let component = {template, controller};

export default angular
        .module('d3-demo.graph', [])
        .component('d3DemoGraph', component)
        .name;