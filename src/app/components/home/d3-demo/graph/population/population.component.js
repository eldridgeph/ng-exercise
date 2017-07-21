import angular from 'angular';
import template from './population.html';
import * as d3 from 'd3';

export const PopulationComponent = {
    template,
    controller: class PopulationComponent {
        constructor($timeout, globalAssets, d3Graph, d3Axis) {
            this.$timeout = $timeout;
            this.assocData = [];
            this.data = globalAssets.populationData;
            this.d3Graph = d3Graph;
            this.d3Axis = d3Axis;
        }
        $onInit() {
            this.$timeout(() => {
                this.draw();
            });
        }
        draw() {

            let svg = d3.select("#population-graph");
            const jQsvg = angular.element(svg.node());
            const graph = {width: jQsvg.width(), height: jQsvg.height()};
            let margin = {top: 20, right: 40, bottom: 30, left: 70},
                    width = graph.width - margin.left - margin.right,
                    height = graph.height - margin.top - margin.bottom;

            let parseDate = d3.time.format("%d-%b-%y").parse;
            let mainGroup = svg
                    .attr("width", '100%')
                    .attr("height", height + margin.top + margin.bottom)
                    .append("g")
                    .attr("transform", `translate(${margin.left},${margin.top})`);

            const assocData = this.getAssociativePopulation();
            const scale = {thickness: 20};

            let xAxis = d3.time.scale().range([0, width]).nice();
            let yAxis = d3.scale.linear().range([height, 0]);

            let xScale = d3.svg.axis().scale(xAxis).orient("bottom").ticks(5);
            let yScale = d3.svg.axis().scale(yAxis).orient("left").ticks(5);

            let line = d3.svg.line()
                    .x((d) => xAxis(new Date(d.year, 1, 1)))
                    .y((d) => yAxis(d.population));

            xAxis
                    .domain([new Date(1800, 1, 1), new Date(2015, 1, 1)])
                    .nice();

            yAxis.domain([0, this.getMaxPopulation()]);

            angular.forEach(this.getAssociativePopulation(), (associativePopulation) => {
                mainGroup.append("path")
                        .style('stroke', this.getRandomColor())
                        .style('stroke-width', 1)
                        .attr("d", line(associativePopulation));
            });

            mainGroup.append("g")
                    .attr("class", "x axis")
                    .attr("transform", "translate(0," + height + ")")
                    .call(xScale);

            mainGroup.append("g")
                    .attr("class", "y axis")
                    .style("fill", "steelblue")
                    .call(yScale);

        }

        createXAxis( {svg, scale, graph}) {

            let years = this.getYearsRange();
            let d3Scale = d3.time.scale()
                    .range([0, graph.width - (scale.thickness * 6)])
                    .domain(d3.extent([years.start, years.end]))
                    .nice();

            let d3Axis = d3.svg.axis()
                    .scale(d3Scale)
                    .orient('bottom')
                    .ticks(d3.time.year, 30);

            svg.append('g')
                    .attr('class', 'x axis')
                    .attr('transform', `translate(${scale.thickness * 4},${graph.height - scale.thickness})`)
                    .call(d3Axis);

            return {
                d3Scale,
                d3Axis
            };
        }

        createYAxis( {svg, scale, graph}){
            let scaleHeight = graph.height - (scale.thickness * 2);
            let d3Scale = d3.scale.linear()
                    .range([0, scaleHeight])
                    .domain([30000000, 0])
                    .nice();

            let d3Axis = d3.svg.axis()
                    .scale(d3Scale)
                    .orient('left');

            svg.append('g')
                    .attr('class', 'y axis')
                    .attr('transform', `translate(${scale.thickness * 4},${scale.thickness})`)
                    .call(d3Axis);

            return {
                d3Axis,
                d3Scale
            };
        }

        getRandomColor() {
            let metrocolors = this.getMetroColors();
            return metrocolors[Math.round(Math.random() * (metrocolors.length - 1))];
        }

        getMetroColors() {
            return [
                'PURPLE',
                'MAGENTA',
                'TEAL',
                'LIME',
                'BROWN',
                'PINK',
                'ORANGE',
                'BLUE',
                'RED',
                'GREEN'
            ];
        }

        getYearsRange() {
            const columns = this.getIntegerColumns();
            const start = new Date(d3.min(columns), 1, 1);
            const end = new Date(d3.max(columns), 1, 1);

            return {
                start,
                end
            };
        }

        getMaxPopulation() {
            let highest = 0;
            angular.forEach(this.getAssociativePopulation(), (row) => {
                angular.forEach(row, (data) => {
                    highest = data.population > highest ? data.population : highest;
                });
            });
            return highest;
        }

        getAssociativePopulation() {

            if (this.assocData.length) {
                return this.assocData;
            }

            let countryColIndex = 'Total population';

            angular.forEach(this.data, (row, rowIndex) => {
                if (!rowIndex)
                    return;
                let assocRow = [];
                angular.forEach(row, function (population, year) {
                    if (year === countryColIndex)
                        return;
                    year = year * 1;
                    population = parseInt((population + '').replace(/\,/, '')) || 0;
                    assocRow.push({rowIndex, year, population});
                });
                this.assocData[rowIndex] = assocRow;
            });

            return this.assocData;
        }

        getColumns() {
            return angular.isArray(this.data) && Object.keys(this.data[0] || {});
        }

        getIntegerColumns() {
            let columns = [];
            angular.forEach(this.getColumns(), (column) => {
                let parseColumn = column * 1;
                !isNaN(parseColumn) && columns.push(parseColumn);
            });
            return columns;
        }
    }
};