import angular from 'angular';
import template from './panel.html';
import controller from './panel.controller';

let transclude = true;
let replace = true;
let bindings = {'title': '@'};
let component = {template, transclude, replace, bindings, controller};

export default angular
        .module('ui.panel', [])
        .component('commonUiPanel', component)
        .name