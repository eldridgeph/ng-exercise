import angular from 'angular';
import template from './random-bubbles.html';
import * as d3 from 'd3';

export const RandomBubblesComponent = {
    template,
    controller: class RandomBubblesController {
        constructor($interval, $timeout, d3Behavior) {
            this.d3Behavior = d3Behavior;
            this.$timeout = $timeout;
            this.$interval = $interval;
        }
        $onInit() {
            this.$timeout(() => {
                this.draw();
            });
        }
        draw() {

            let self = this;
            let data = {
                children: [
                    {"country": "Taiwan", "value": 23000000},
                    {"country": "China", "value": 1369550000},
                    {"country": "India", "value": 1270440000},
                    {"country": "United_States", "value": 320892000},
                    {"country": "Indonesia", "value": 255461700},
                    {"country": "Brazil", "value": 204234000},
                    {"country": "Philippines", "value": 204234000},
                    {"country": "Thailand", "value": 204234000},
                    {"country": "Cambodia", "value": 204234000},
                    {"country": "UK", "value": 204234000},
                    {"country": "England", "value": 204234000},
                ]
            };

            let pack = d3.layout.pack();

            pack = pack.padding(2).size([300, 300]).sort(function (a, b) {
                return b.value - a.value;
            });

            let nodes = pack.nodes(data);

            nodes = nodes.filter((it) => it.parent);

            let color = d3.scale.category20();
            let svg = d3.select('#d3-bubbles')
                    .attr('width', '100%')
                    .attr('height', 400);

            nodes.forEach(function (node) {

                let nodeGroup = svg.append('g')
                        .call(self.d3Behavior.draggable)
                        ;

                nodeGroup
                        .append('circle')
                        .attr({
                            cx: node.x,
                            cy: node.y,
                            r: node.r,
                            fill: color(node.country)
                        });

                nodeGroup
                        .append('text')
                        .attr({
                            x: node.x,
                            y: node.y,
                            'text-anchor': 'middle'
                        })
                        .text(node.country);

                function getRandom() {
                    let max = Math.round(Math.random() * 300);
                    return Math.round(Math.random() * max);
                }

                self.$interval(function () {
                    let randomX = getRandom();
                    let randomY = getRandom();
                    nodeGroup
                            .transition()
                            .delay(1)
                            .attr('transform', `translate(${randomX},${randomY})`);
                }, 2000);

            });
        }
    }
};