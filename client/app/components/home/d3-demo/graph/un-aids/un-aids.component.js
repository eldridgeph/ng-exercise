import angular from 'angular';
import data from './un-aids.data.csv';
import template from './un-aids.html';
import * as d3 from 'd3';

export const UnAidsComponent = {
    template,
    controller: class UnAidsController {
        constructor($timeout, d3Graph, d3Axis) {
            this.$timeout = $timeout;
            this.d3Graph = d3Graph;
            this.d3Axis = d3Axis;
        }
        $onInit() {
            this.$timeout(this.draw.bind(this));
        }
        draw() {
            new this.d3Graph()
                    .setContainer('#un-aids-graph')
                    .add(
                            new this.d3Axis()
                            .setDomain(new Date(1976, 1, 1), new Date(2011, 1, 1))
                            .setRange(0, 350)
                            .createBottom()
                            )
                    .implement();

        }
    }
};