import angular from 'angular';
import {PopulationComponent} from './population.component';

const PopulationModule = angular
        .module('graph.population', [])
        .component('populationGraph', PopulationComponent)
        .name;

export default PopulationModule;