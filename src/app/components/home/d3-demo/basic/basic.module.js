import angular from 'angular';
import {BasicComponent} from './basic.component';
import BasicFactory from './basic.factory';

export default angular
        .module('d3-demo.basic', [])
        .factory('d3BasicData', BasicFactory)
        .component('d3DemoBasic', BasicComponent)
        .name;