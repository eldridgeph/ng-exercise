import angular from 'angular';
import BehaviorService from './behavior.service';
import d3BounceService from './bounce.service';
import d3DraggableService from './draggable.service';

const BehaviorModule = angular
        .module('d3.behavior', [])
        .service('d3BounceBehavior', d3BounceService)
        .service('d3DraggableBehavior', d3DraggableService)
        .service('d3Behaviors', () => BehaviorService)
        .name;

export default BehaviorModule;