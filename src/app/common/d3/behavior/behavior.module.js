import angular from 'angular';
import {BehaviorComponent} from './behavior.component';

const BehaviorModule = angular
        .module('d3.behavior', [])
        .service('d3Behavior', () => BehaviorComponent)
        .name;

export default BehaviorModule;