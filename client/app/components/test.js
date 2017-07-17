import angular from 'angular';
import template from './test.html';
import controller from './test.controller';
//import service from './test.service';

let component = {template, controller};

/**
 * test
 * @author Eldridge Torrefranca <e.torrefranca@arcanys.com>
 */
export default angular
        .module('test', [])
//        .service('testService', service)
        .component('testView', component)
        .name;