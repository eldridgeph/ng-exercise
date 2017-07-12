import * as d3 from 'd3';
import {event as d3Event} from 'd3';
import angular from 'angular';
import d3LogoUrl from './assets/d3-logo.svg';
import * as d3Behavior from '../../../common/d3/behavior/behavior';

export default class BasicController {
    constructor($timeout) {
        this.$timeout = $timeout;
        this.d3LogoUrl = d3LogoUrl;
    }
    $onInit() {
        let self = this;
        self.$timeout(function () {
            self.initShapes();
            self.initLineInterpolation();
            self.initObjectGroup();
        })
    }
    initShapes() {
        this.$timeout(function () {

            let svgContainer = d3.select("#d3-init")
                    .attr("width", "100%")
                    .attr("height", 100)

            let circleSettings = [
                {diameter: 40, color: 'green'},
                {diameter: 30, color: 'blue'},
                {diameter: 20, color: 'purple'},
            ]

            svgContainer.selectAll("circle")
                    .data(circleSettings)
                    .enter()
                    .append("circle")
                    .attr("cx", 50)
                    .attr("cy", 50)
                    .attr("r", function (circleSetting) {
                        return circleSetting.diameter;
                    })
                    .style("fill", function (circleSetting) {
                        return circleSetting.color;
                    })
                    .call(d3Behavior.draggable)
                    .call(d3Behavior.bounce);
        });
    }
    initLineInterpolation() {

        let lineData = [
            {"x": 1, "y": 5},
            {"x": 20, "y": 20},
            {"x": 40, "y": 10},
            {"x": 60, "y": 40},
            {"x": 80, "y": 5},
            {"x": 100, "y": 60}
        ];

        let lineFunction = d3.svg.line()
                .x(function (d) {
                    return d.x;
                })
                .y(function (d) {
                    return d.y;
                })
                .interpolate("basis");

        d3.select("#line-interpolation")
                .attr("width", "100%")
                .attr("height", 100)
                .append("path")
                .attr("d", lineFunction(lineData))
                .attr("stroke", "blue")
                .attr("stroke-width", 2)
                .attr("fill", "none");
    }
    initObjectGroup() {

        let circleData = [
            {"cx": 20, "cy": 20, "radius": 20, "color": "green"},
            {"cx": 70, "cy": 70, "radius": 20, "color": "purple"}
        ];

        let rectangleData = [
            {"rx": 110, "ry": 110, "height": 30, "width": 30, "color": "blue"},
            {"rx": 160, "ry": 160, "height": 30, "width": 30, "color": "red"}
        ];

        let svgContainer = d3.select("#d3-grouping")
                .attr("width", "100%")
                .attr("height", 200);

        let get = function (attr) {
            return function (d) {
                return d[attr];
            };
        };

        let circleGroup = svgContainer.append("g");
        let circles = circleGroup.selectAll("circle")
                .data(circleData)
                .enter()
                .append("circle");
        let circleAttributes = circles
                .attr("cx", get('cx'))
                .attr("cy", get('cy'))
                .attr("r", get('radius'))
                .style("fill", get('color'));

        let rectangleGroup = svgContainer.append('g').attr('transform', 'translate(200,0)');

        let rectangles = rectangleGroup.selectAll("rect")
                .data(rectangleData)
                .enter()
                .append("rect");

        let rectangleAttributes = rectangles
                .attr("x", get('rx'))
                .attr("y", get('ry'))
                .attr("height", get('height'))
                .attr("width", get('width'))
                .style("fill", get('color'));

        let textGroup = svgContainer
                .append('g').attr('transform', 'translate(100,0)');

        let text = textGroup
                .selectAll('text')
                .data(circleData)
                .enter()
                .append('text');

        text
                .attr('x', get('cx'))
                .attr('y', get('cy'))
                .attr('fill', 'red')
                .attr('font-size', '20px')
                .attr('font-weight', 'bold')
                .text(function (d) {
                    return 'coord($x, $y)'
                            .replace('$x', d.cx)
                            .replace('$y', d.cy);
                });
    }
}