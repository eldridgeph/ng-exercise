import * as d3 from 'd3';
import {draggable as D3Draggable} from '../../../../common/d3/behavior/behavior';
import angular from 'angular';

export default class SolarSystemController {

    constructor($timeout) {
        this.$timeout = $timeout;
    }

    $onInit() {

        let self = this;
        let svgHeight = 400;

        this.$timeout(function () {
            self.svg = d3.select('#d3-solar-system');
            self.svg
                    .attr('height', svgHeight)
                    .attr('width', 400);

            let planetData = [
                {key: 'mercury', color: 'gray', size: 5},
                {key: 'venus', color: 'orange', size: 8},
                {key: 'earth', color: 'blue', size: 10},
                {key: 'mars', color: 'red', size: 11},
                {key: 'jupiter', color: 'green', size: 30},
                {key: 'saturn', color: 'brown', size: 28},
                {key: 'uranus', color: 'skyblue', size: 15},
                {key: 'neptune', color: 'blue', size: 13},
                {key: 'pluto', color: 'milk', size: 3},
            ];

            let sun = self.createPlanet({
                cx: svgHeight / 2,
                cy: svgHeight / 2,
                r: 10,
                stroke: 'black',
                fill: 'yellow'
            });

            let newPlanet = {};
            
            planetData.forEach(function (planetDataItem) {

                if (newPlanet.y) {
                    newPlanet.y = newPlanet.selection.attr('cy') - (newPlanet.selection.attr('r') * 2 + 5)
                } else {
                    newPlanet.y = sun.attr('cy') - (sun.attr('r') * 2);
                }

                newPlanet.orbit = self.createOrbitTo({cy: newPlanet.y}, sun);
                newPlanet.selection = self.createPlanet({
                    cy: newPlanet.y,
                    cx: sun.attr('cx'),
                    r: planetDataItem.size / 1.6,
                    fill: planetDataItem.color,
                    stroke: 0
                });
            });

        });
    }

    createCircle(properties) {
        return this.svg
                .append('g')
                .append('circle')
                .attr(angular.extend({
                    r: 30,
                    stroke: 'black'
                }, properties));
    }

    createPlanet(properties = {}) {
        return this
                .createCircle(properties)
                .call(D3Draggable);
    }

    createOrbitTo(planet, sun) {
        return this
                .createCircle({
                    'stroke-width': 1,
                    fill: 'transparent',
                    r: sun.attr('cy') - planet.cy,
                    cy: sun.attr('cy'),
                    cx: sun.attr('cx')
                });
    }
}