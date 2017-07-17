import * as d3 from 'd3';
import angular from 'angular';
import template from './solar-system.html';

export const SolarSystemComponent = {
    template,
    controller: class SolarSystemController {

        constructor($timeout, d3Behavior) {
            this.d3Behavior = d3Behavior;
            this.$timeout = $timeout;
        }

        $onInit() {
            this.$timeout(this.initDraw.bind(this));
        }

        initDraw() {

            const planetGap = 5;
            let self = this,
                    previousPlanet = {},
                    sun,
                    svgHeight = 400,
                    planetData = [
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

            self.svg = d3.select('#d3-solar-system');
            self.svg
                    .attr('height', svgHeight)
                    .attr('width', 400);


            sun = self.createPlanet({
                cx: svgHeight / 2,
                cy: svgHeight / 2,
                r: 10,
                stroke: 'black',
                fill: 'yellow'
            });

            planetData.forEach(function (planetDataItem, index) {

                let newPlanet = {};

                if (previousPlanet.y) {
                    newPlanet.y = previousPlanet.selection.attr('cy') - ((previousPlanet.selection.attr('r') * 1) + (planetDataItem.size / 2) + planetGap)
                } else {
                    newPlanet.y = sun.attr('cy') - (sun.attr('r') * 2);
                }

                newPlanet.orbit = self.createOrbitTo({cy: newPlanet.y}, sun);
                newPlanet.selection = self.createPlanet({
                    key: planetDataItem.key,
                    cy: newPlanet.y,
                    cx: sun.attr('cx'),
                    r: planetDataItem.size / 1.6, //ratio
                    fill: planetDataItem.color,
                    stroke: 0
                });

                let angle = 1;

                setInterval(function () {

                    let orbit = newPlanet.orbit;
                    let orbitX = (orbit.attr('cx') * 1) + (orbit.attr('r') * 1) * Math.cos(angle);
                    let orbitY = (orbit.attr('cy') * 1) + (orbit.attr('r') * 1) * Math.sin(angle);

                    (angle = angle += (300 / (index + 1)) / 1000) && angle >= 90 && (angle = 1);

                    let planetLabel = getPlanetText(newPlanet.selection);

                    planetLabel
                            .transition()
                            .attr('x', orbitX)
                            .attr('y', orbitY + (newPlanet.selection.attr('r') * 1) + 10);

                    newPlanet
                            .selection
                            .transition()
                            .attr('cx', orbitX)
                            .attr('cy', orbitY);
                }, 100);

                previousPlanet = newPlanet;

            });

            function getPlanetText(planet) {
                let planetElement = planet.node();
                let planetNg = angular.element(planetElement);
                return d3.select(planetNg.parent()[0]).select('text');
            }

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

            let planet = this
                    .createCircle(properties)
                    .call(this.d3Behavior.draggable);

            let planetElement = planet[0][0];
            let planetNg = angular.element(planetElement);
            let planetGroup = planetNg.parent();

            d3.select(planetGroup[0])
                    .append('text')
                    .attr('x', 100)
                    .attr('y', 100)
                    .attr('font-size', 10)
                    .attr('fill', 'black')
                    .text(properties.key || '');

            return planet;
        }

        createOrbitTo(planet, sun) {
            return this
                    .createCircle({
                        'stroke-width': 1,
                        'stroke-dasharray': "10,5",
                        fill: 'transparent',
                        r: sun.attr('cy') - planet.cy,
                        cy: sun.attr('cy'),
                        cx: sun.attr('cx'),
                    });
        }
    }
};