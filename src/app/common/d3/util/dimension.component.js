import * as d3 from 'd3';
import {UtilComponent} from './util.component';
import {event as d3Event} from 'd3';
import angular from 'angular';

export const DimensionComponent = {
    controller: class DimensionComponent extends UtilComponent.controller {
        static setTop(value) {

            if (!this.isGroup()) {
                let yAxis = this.isCircle() ? 'cy' : 'y';
                this.selection.attr(yAxis, value);
            } else {
                this.setTransform([, value]);
            }

            return this;
        }
        static setLeft(value) {

            if (!this.isGroup()) {
                let xAxis = this.isCircle() ? 'cx' : 'x';
                this.selection.attr(xAxis, value);
            } else {
                this.setTransform([value, ]);
            }

            return this;
        }

        static setTransform([xValue = 0, yValue = 0]) {

            let yPattern = /\,[\-\.0-9]{1,}\)/;
            let xPattern = /\([\-\.0-9]{1,}\,/;
            let svgDimension = this.getSvg().dimension;

            let oldTransform = this.selection.attr('transform') || `translate(${d3Event.x},${d3Event.y})`;
            let newTransform;

            if (yValue) {
                newTransform = oldTransform.replace(yPattern, ',' + (yValue - svgDimension.top) + ')');
            }
            if (xValue) {
                newTransform = oldTransform.replace(xPattern, '(' + (xValue) + ',');
            }

            this.selection.attr('transform', newTransform);
        }
    }
};