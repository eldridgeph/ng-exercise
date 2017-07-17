import angular from 'angular';
import template from './random-bubbles.html';
import controller from './random-bubbles.controller';

let component = {template, controller};

export default angular
        .module('random-bubbles', [])
        .component('randomBubbles', component)
        .name;