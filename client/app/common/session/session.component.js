import angular from 'angular';
import service from './session.service';

export default angular
        .module('session', [])
        .service('sessionService', service)
        .name;