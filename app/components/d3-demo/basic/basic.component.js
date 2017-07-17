import angular from 'angular';
import template from './basic.html';
import controller from './basic.controller';

let component = {template, controller};

export default angular
        .module('basic', [

        ])
        .component('d3DemoBasic', component)
        .name