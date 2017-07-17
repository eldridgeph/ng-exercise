import angular from 'angular';
import service from './session.service';

const SessionModule = angular
        .module('common.session', [])
        .service('sessionService', service)
        .name;

export default SessionModule;