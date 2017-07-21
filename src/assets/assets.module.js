import angular from 'angular';
import d3SvgUrl from './d3-logo.svg';
import populationData from './population.data.csv';

const AssetsModule = angular
        .module('assets', [])
        .factory('globalAssets', function () {
            return {
                d3SvgUrl,
                populationData
            };
        })
        .name;

export default AssetsModule;