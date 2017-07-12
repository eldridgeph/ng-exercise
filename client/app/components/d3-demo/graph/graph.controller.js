import * as d3 from 'd3';
import d3GraphData from './graph.data.csv';

export default class GraphController {
    constructor($timeout, $element) {
        this.$element = $element;
        this.$timeout = $timeout;
    }
    $onInit() {
        let self = this;

        self.$timeout(function () {
            self.initGraphScale();
            self.initDualAxesGraph();
        });
    }
    initGraphScale() {
        let svgContainer = d3.select("#d3-axes")
                .attr("width", '100%')
                .attr("height", 100);

        let axisScale = d3.scale.linear()
                .domain([0, 100])
                .range([0, 400]);

        let xAxis = d3.svg.axis()
                .scale(axisScale);

        svgContainer.append("g")
                .call(xAxis);
    }
    initDualAxesGraph() {

        let margin = {top: 30, right: 40, bottom: 30, left: 50},
                width = 400 - margin.left - margin.right,
                height = 270 - margin.top - margin.bottom;
        let parseDate = d3.time.format("%d-%b-%y").parse;

        let x = d3.time.scale().range([0, width]);
        let y0 = d3.scale.linear().range([height, 0]);
        let y1 = d3.scale.linear().range([height, 0]);
        let xAxis = d3.svg.axis().scale(x).orient("bottom").ticks(5);
        let yAxisLeft = d3.svg.axis().scale(y0).orient("left").ticks(5);
        let yAxisRight = d3.svg.axis().scale(y1).orient("right").ticks(5);

        let valueline = d3.svg.line()
                .x(function (d) {
                    return x(d.date);
                })
                .y(function (d) {
                    return y0(d.close);
                });

        let valueline2 = d3.svg.line()
                .x(function (d) {
                    return x(d.date);
                })
                .y(function (d) {
                    return y1(d.open);
                });

        let svg = d3.select("#d3-dual-axes")
                .attr("width", '100%')
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform",
                        "translate(" + margin.left + "," + margin.top + ")");

        let data = d3GraphData;

        for (var index in data) {
            var stat = data[index];
            if (typeof stat.date === 'string') {
                stat.date = parseDate(stat.date);
            } else {
                break;
            }
        }

        // Scale the range of the data
        x.domain(d3.extent(data, function (d) {
            return d.date;
        }));
        y0.domain([0, d3.max(data, function (d) {
                return Math.max(d.close);
            })]);
        y1.domain([0, d3.max(data, function (d) {
                return Math.max(d.open);
            })]);

        svg.append("path")        // Add the valueline path.
                .attr("d", valueline(data));

        svg.append("path")        // Add the valueline2 path.
                .style("stroke", "red")
                .attr("d", valueline2(data));

        svg.append("g")            // Add the X Axis
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height + ")")
                .call(xAxis);

        svg.append("g")
                .attr("class", "y axis")
                .style("fill", "steelblue")
                .call(yAxisLeft);

        svg.append("g")
                .attr("class", "y axis")
                .attr("transform", "translate(" + width + " ,0)")
                .style("fill", "red")
                .call(yAxisRight);

    }
}