import angular from 'angular';
import LoginService from '../../components/login/login.service';

import * as d3 from 'd3';
import d3AxesData from './assets/d3.axes.advance.csv';
//import * as d3Svg from 'd3-svg';

import d3Image from './assets/d3.svg';
import d3FlareCsv from './assets/flare.csv';
import './home.css';
import D3Graph from '../../common/d3/graph.component';

export default class HomeController {

    constructor($log, $interval) {
        this.$interval = $interval;
        this.$log = $log;
        this.d3ImageUrl = d3Image;
    }
    logout() {
        LoginService.isAuthenticated = false;
    }
    $onInit() {
        this.d3InitialDemo();
        this.d3LineInterpolationDemo();
        this.d3ObjectGroupings();
        this.d3AxesCreation();
        this.d3AxesRandom();
        this.d3AxesAdvance();
        this.d3Bubbles();
    }
    d3LineInterpolationDemo() {

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

        let svgContainer = d3.select("#line-interpolation")
                .style('border', "solid green 1px;")
                .attr("width", "100%")
                .attr("height", 100);

        let lineGraph = svgContainer.append("path")
                .attr("d", lineFunction(lineData))
                .attr("stroke", "blue")
                .attr("stroke-width", 2)
                .attr("fill", "none");
    }
    d3InitialDemo() {
        let svgContainer = d3.select("#d3-init")
                .attr("width", "100%")
                .attr("height", 100)
                .style('border', "solid green 1px;")

        let circleSettings = [
            {diameter: 40, color: 'green'},
            {diameter: 30, color: 'blue'},
            {diameter: 20, color: 'purple'},
        ]
        let circles = svgContainer.selectAll("circle")
                .data(circleSettings)
                .enter()
                .append("circle")

        let circleAttributes = circles
                .attr("cx", 50)
                .attr("cy", 50)
                .attr("r", function (circleSetting) {
                    return circleSetting.diameter;
                })
                .style("fill", function (circleSetting) {
                    return circleSetting.color;
                });
    }
    getBubbleChartCsv() {
//        let svg = d3.select("#d3-bubble-chart"),
//                width = +svg.attr("width"),
//                height = +svg.attr("height"),
//                format = d3.format(",d"),
//                color = d3.scaleOrdinal(d3.schemeCategory20c),
//                pack = d3.pack().size([width, height]).padding(1.5);
//        d3.csv("flare.txt", csvAccessor, csvCallback);
//        function csvAccessor(d) {
//            d.value = +d.value;
//            if (d.value)
//                return d;
//        }
//
//        function csvCallback(error, classes) {
//
//            if (error)
//                throw error;
//            let root = d3
//                    .hierarchy({children: classes})
//                    .sum(function (d) {
//                        return d.value;
//                    })
//                    .each(function (d) {
//                        if (id = d.data.id) {
//                            var id, i = id.lastIndexOf(".");
//                            d.id = id;
//                            d.package = id.slice(0, i);
//                            d.class = id.slice(i + 1);
//                        }
//                    });
//            let node = svg.selectAll(".node")
//                    .data(pack(root).leaves())
//                    .enter().append("g")
//                    .attr("class", "node")
//                    .attr("transform", function (d) {
//                        return "translate(" + d.x + "," + d.y + ")";
//                    });
//            node.append("circle")
//                    .attr("id", function (d) {
//                        return d.id;
//                    })
//                    .attr("r", function (d) {
//                        return d.r;
//                    })
//                    .style("fill", function (d) {
//                        return color(d.package);
//                    });
//            node.append("clipPath")
//                    .attr("id", function (d) {
//                        return "clip-" + d.id;
//                    })
//                    .append("use")
//                    .attr("xlink:href", function (d) {
//                        return "#" + d.id;
//                    });
//            node.append("text")
//                    .attr("clip-path", function (d) {
//                        return "url(#clip-" + d.id + ")";
//                    })
//                    .selectAll("tspan")
//                    .data(function (d) {
//                        return d.class.split(/(?=[A-Z][^A-Z])/g);
//                    })
//                    .enter().append("tspan")
//                    .attr("x", 0)
//                    .attr("y", function (d, i, nodes) {
//                        return 13 + (i - nodes.length / 2 - 0.5) * 10;
//                    })
//                    .text(function (d) {
//                        return d;
//                    });
//            node.append("title")
//                    .text(function (d) {
//                        return d.id + "\n" + format(d.value);
//                    });
//        }
    }
    d3ObjectGroupings() {

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
                .attr("height", 200)
                .style('border', "solid green 1px;");

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

// * Note * that the rectangles are added to the svgContainer, not the circleGroup
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
    d3AxesCreation() {

        let svgContainer = d3.select("#d3-axes")
                .style('border', 'solid green 1px')
                .attr("width", '100%')
                .attr("height", 100);

        let axisScale = d3.scale.linear()
                .domain([0, 100])
                .range([0, 400]);

        let xAxis = d3.svg.axis()
                .scale(axisScale);

        let xAxisGroup = svgContainer.append("g")
                .call(xAxis);
    }
    d3AxesRandom() {
//        let margin = {top: 30, right: 40, bottom: 30, left: 50},
//                width = 600 - margin.left - margin.right,
//                height = 270 - margin.top - margin.bottom;
//
//        let yScale = d3.scale.linear().range([height, 0]);
//        let xScale = d3.
    }
    d3AxesAdvance() {

        let parseDate = d3.time.format("%d-%b-%y").parse;
        let data = d3AxesData;
        let Graph = new D3Graph();

        Graph
                .data(data, function (item) {
                    if (typeof item.date === 'string') {
                        return item.date = parseDate(item.date);
                    }
                    return false;
                })
                .draw();
    }
    d3Bubbles() {

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
        pack = pack.padding(2).size([800, 600]).sort(function (a, b) {
            return b.value - a.value;
        });
        let interval = this.$interval;

        let nodes = pack.nodes(data);
        nodes = nodes.filter(function (it) {
            return it.parent;
        });

        let color = d3.scale.category20();
        let svg = d3.select('#d3-bubbles')
                .attr('width', '100%')
                .attr('height', '600')
                .style('border', 'solid green 1px');

        nodes.forEach(function (node) {

            var nodeGroup = svg.append('g');

            nodeGroup
                    .append('circle')
                    .attr({
                        cx: node.x,
                        cy: node.y,
                        r: node.r,
                        fill: color(node.country),
                        stroke: '#444',
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

            interval(function () {
                let randomX = getRandom();
                let randomY = getRandom();
                nodeGroup
                        .transition()
                        .delay(1)
                        .attr('transform', 'translate($x,$y)'.replace('$x', randomX).replace('$y', randomY))
            }, 2000);

        });

    }
}