import angular from 'angular';
import template from './population.html';
import * as d3 from 'd3';

export const PopulationComponent = {
    template,
    controller: class PopulationComponent {
        constructor($scope, $timeout, globalAssets, d3Graph, d3Axis, uiGridConstants, $rootScope, d3Color) {
            this.uiGridConstants = uiGridConstants;
            this.$rootScope = $rootScope;
            this.$scope = $scope;
            this.$timeout = $timeout;
            this.assocData = [];
            this.data = globalAssets.populationData;
            this.d3Graph = d3Graph;
            this.d3Axis = d3Axis;
            this.gridComponent = null;
            this.populationByCountryId = {};
            this.drawInitialized = false;
            this.d3Color = d3Color;
            global.d3Color = d3Color;
        }
        $onInit() {
            this.$scope.$watch('gridComponent', (gridComponent) => {
                this.$rootScope.$on('tab.active.where[id=1]', () => {
                    if (gridComponent === undefined || this.drawInitialized) {
                        return;
                    }
                    this.gridComponent = gridComponent;
                    this.$timeout(() => this.draw());
                    this.drawInitialized = true;
                });
            });
        }
        draw() {

            let svg = d3.select("#population-graph");
            const jQsvg = angular.element(svg.node());
            const graph = {width: jQsvg.width(), height: jQsvg.height()};
            let margin = {top: 20, right: 40, bottom: 30, left: 70},
                    width = graph.width - margin.left - margin.right,
                    height = graph.height - margin.top - margin.bottom;

            let mainGroup = svg
                    .attr("width", '100%')
                    .attr("height", height + margin.top + margin.bottom)
                    .append("g")
                    .attr("transform", `translate(${margin.left},${margin.top})`);

            const assocData = this.getAssociativePopulation();

            let xAxis = d3.time.scale().range([0, width]).nice();
            let yAxis = d3.scale.linear().range([height, 0]);

            let xScale = d3.svg.axis().scale(xAxis).orient("bottom").ticks(5);
            let yScale = d3.svg.axis().scale(yAxis).orient("left").ticks(5);

            let d3Line = d3.svg.line()
                    .x((d) => xAxis(new Date(d.year, 1, 1)))
                    .y((d) => yAxis(d.population));

            xAxis
                    .domain([new Date(1800, 1, 1), new Date(2015, 1, 1)])
                    .nice();

            yAxis.domain([0, 300000000]);

            angular.forEach(this.gridComponent.gridApi.selection.getSelectedRows(), (entity) => {
                this.getLineElement({mainGroup, entity, d3Line});
            });

            this.$scope.$on('grid.rowSelectionChanged', (event, {row}) => {
                let entity = row.entity;
                let visibility = row.isSelected;
                this.setLineVisibility({mainGroup, entity, d3Line, visibility});
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

        setLineVisibility( {mainGroup, entity, d3Line, visibility = false}) {
            let lineElement = this.getLineElement({mainGroup, entity, d3Line});
            lineElement
                    .transition()
                    .style('opacity', visibility ? 1 : 0);
        }

        getLineElement( {mainGroup, entity, d3Line}){
            if (entity.lineElement) {
                return entity.lineElement;
            }

            let associativePopulation = this.getPopulationByCountryId(entity.id);
            let lineElement = mainGroup.append("path")
                    .style('stroke', entity.color)
                    .style('stroke-width', 3)
                    .attr("d", d3Line(associativePopulation));

            entity.lineElement = lineElement;

            this.$timeout(() => lineElement.transition().style('stroke-width', 1), 100);

            return entity.lineElement;
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
        getCountryById(id) {
            this.getCountries();
            return this.countriesById[id] || false;
        }
        getCountries() {

            if (this.countries) {
                return this.countries;
            }

            this.countries = [];
            this.countriesById = {};
            angular.forEach(this.data, (row, rowIndex) => {
                if (rowIndex) {
                    let id = rowIndex;
                    let color = this.d3Color.getRandom();
                    let country = {id, country: row['Total population'], color};
                    this.countriesById[id] = country;
                    this.countries.push(country);
                }
            });

            return this.countries;
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
            let countryColIndex = 'Total population', color, country;

            angular.forEach(this.data, (row, rowIndex) => {
                if (!rowIndex)
                    return;
                let assocRow = [];
                angular.forEach(row, (population, year) => {
                    if (year === countryColIndex)
                        return;
                    year = year * 1;
                    population = parseInt((population + '').replace(/\,/, '')) || 0;
                    country = this.getCountryById(rowIndex);
                    color = country.color;
                    let data = {rowIndex, year, population, color};
                    assocRow.push(data);
                });
                this.assocData[rowIndex] = assocRow;
            });

            return this.assocData;
        }
        getPopulationByCountryId(countryId) {
            let assocData = this.getAssociativePopulation();
            return assocData[countryId] || false;
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