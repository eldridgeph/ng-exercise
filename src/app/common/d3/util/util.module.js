import angular from 'angular';
import ColorService from './color.service';

const UtilModule = angular
        .module('d3.util', [])
        .service('d3Color', ColorService)
        .name;

export default UtilModule;
