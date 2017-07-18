import angular from 'angular';
import CoreComponent from './core.component';

export const GraphComponent = {
    controller: class GraphComponent extends CoreComponent.controller {
        constructor(d3Axis) {
            super();
            this.elements = [];
            this.d3Axis = d3Axis;
        }
        axis() {
            return new this.d3Axis;
        }
        add(element) {
            element.setContainer(this.setContainer.input);
            this.elements.push(element);
            return this;
        }
        implement() {
            angular.forEach(this.elements, (element) => {
                element.create();
            });
        }
    }
};