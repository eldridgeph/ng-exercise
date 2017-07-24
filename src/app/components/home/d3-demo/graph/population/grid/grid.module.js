import angular from 'angular';
import {GridComponent} from  './grid.component';

const GridModule = angular
        .module('population.grid', [
            'ui.grid',
            'ui.grid.selection'
        ])
        .component('populationGrid', GridComponent)
        .name;

export default GridModule;