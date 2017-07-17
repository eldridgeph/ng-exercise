import angular from 'angular';
import {UnAidsComponent} from './un-aids.component';

const UnAidsModule = angular
        .module('un-aids', [])
        .component('unAidsGraph', UnAidsComponent)
        .name;

export default UnAidsModule;