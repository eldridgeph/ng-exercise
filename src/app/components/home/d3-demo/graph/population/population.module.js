import angular from 'angular';
import {PopulationComponent} from './population.component';
import uiGrid from 'angular-ui-grid/ui-grid.min.js';
import uiGridStyle from 'angular-ui-grid/ui-grid.min.css';
import GridModule from './grid/grid.module';

const PopulationModule = angular
        .module('graph.population', [
            GridModule
        ])
        .component('populationGraph', PopulationComponent)
        .name;

export default PopulationModule;