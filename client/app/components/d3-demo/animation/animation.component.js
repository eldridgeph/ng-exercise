import angular from 'angular';
import template from './animation.html';
import controller from './animation.controller';
import SolarSystemComponent from './solar-system/solar-system.component';
import RandomBubblesComponent from './random-bubbles/random-bubbles.component';

let component = {template, controller};

export default angular
        .module('d3-demo.animation', [
            SolarSystemComponent,
            RandomBubblesComponent
        ])
        .component('d3DemoAnimation', component)
        .name