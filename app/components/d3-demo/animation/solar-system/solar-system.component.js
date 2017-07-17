import angular from 'angular';
import template from './solar-system.html';
import controller from './solar-system.controller';

let component = {template,controller};

export default angular
        .module('solar-system', [])
        .component('solarSystem', component)
        .name;