import LoginService from '../login/login.service';
import * as d3 from 'd3';
import d3Image from './assets/d3.svg';
import d3FlareCsv from './assets/flare.csv';
global.d3 = d3;

export default class HomeController {
    constructor() {
        this.d3ImageUrl = d3Image;
    }
    logout() {
        LoginService.isAuthenticated = false;
    }
    $onInit() {
        this.initD3();
        this.getBubbleChartCsv();
    }
    initD3() {
        let svgContainer = d3.select("#d3-init")
                .attr("width", "100%")
                .attr("height", 100)
                .attr("style", "border:solid green 1px;")

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

        let svg = d3.select("#d3-bubble-chart"),
                width = +svg.attr("width"),
                height = +svg.attr("height"),
                format = d3.format(",d"),
                color = d3.scaleOrdinal(d3.schemeCategory20c),
                pack = d3.pack().size([width, height]).padding(1.5);

        d3.csv("flare.txt", csvAccessor, csvCallback);


        function csvAccessor(d) {
            d.value = +d.value;
            if (d.value)
                return d;
        }

        function csvCallback(error, classes) {

            if (error)
                throw error;

            let root = d3
                    .hierarchy({children: classes})
                    .sum(function (d) {
                        return d.value;
                    })
                    .each(function (d) {
                        if (id = d.data.id) {
                            var id, i = id.lastIndexOf(".");
                            d.id = id;
                            d.package = id.slice(0, i);
                            d.class = id.slice(i + 1);
                        }
                    });

            let node = svg.selectAll(".node")
                    .data(pack(root).leaves())
                    .enter().append("g")
                    .attr("class", "node")
                    .attr("transform", function (d) {
                        return "translate(" + d.x + "," + d.y + ")";
                    });

            node.append("circle")
                    .attr("id", function (d) {
                        return d.id;
                    })
                    .attr("r", function (d) {
                        return d.r;
                    })
                    .style("fill", function (d) {
                        return color(d.package);
                    });

            node.append("clipPath")
                    .attr("id", function (d) {
                        return "clip-" + d.id;
                    })
                    .append("use")
                    .attr("xlink:href", function (d) {
                        return "#" + d.id;
                    });

            node.append("text")
                    .attr("clip-path", function (d) {
                        return "url(#clip-" + d.id + ")";
                    })
                    .selectAll("tspan")
                    .data(function (d) {
                        return d.class.split(/(?=[A-Z][^A-Z])/g);
                    })
                    .enter().append("tspan")
                    .attr("x", 0)
                    .attr("y", function (d, i, nodes) {
                        return 13 + (i - nodes.length / 2 - 0.5) * 10;
                    })
                    .text(function (d) {
                        return d;
                    });

            node.append("title")
                    .text(function (d) {
                        return d.id + "\n" + format(d.value);
                    });
        }
    }
}