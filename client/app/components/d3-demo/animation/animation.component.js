import angular from 'angular';
import template from './animation.html';
import controller from './animation.controller';

let component = {template, controller};

export default angular
        .module('d3-demo.animation', [])
        .component('d3DemoAnimation', component)
        .name