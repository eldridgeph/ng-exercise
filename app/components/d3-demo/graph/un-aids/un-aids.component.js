import angular from 'angular';
import data from './un-aids.data.csv';
import template from './un-aids.html';
import controller from './un-aids.controller';

let component = {template, controller};

export default angular
        .module('un-aids', [])
        .component('unAidsGraph', component)
        .name;