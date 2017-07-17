import * as d3 from 'd3';
import angular from 'angular';

export default class GraphCore {
    setContainer(input) {

        let d3Selection;

        this.setContainer.input = input;

        if (typeof input === 'string') {
            d3Selection = d3.select(input);
        } else {
            d3Selection = input;
        }

        this.setContainer.d3Selection = d3Selection;

        return this;
    }

    getContainer() {
        return this.setContainer.d3Selection;
    }

    getJqContainer() {
        return angular.element(this.setContainer.d3Selection.node());
    }
}