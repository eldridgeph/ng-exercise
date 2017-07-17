import angular from 'angular';

import SolarSystemModule from './solar-system/solar-system.module';
import RandomBubblesModule from './random-bubbles/random-bubbles.module';
import {AnimationComponent} from './animation.component';

const AnimationModule = angular
        .module('d3-demo.animation', [
            SolarSystemModule,
            RandomBubblesModule
        ])
        .component('d3DemoAnimation', AnimationComponent)
        .name;

export default AnimationModule;