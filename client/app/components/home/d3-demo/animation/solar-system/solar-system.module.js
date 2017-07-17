import angular from 'angular';
import {SolarSystemComponent} from './solar-system.component';

const SolarSystemModule = angular
        .module('animation.solar-system', [])
        .component('solarSystem', SolarSystemComponent)
        .name;

export default SolarSystemModule;