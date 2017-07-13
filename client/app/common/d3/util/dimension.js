import * as d3 from 'd3';
import Util from './util';
import {event as d3Event} from 'd3';
import angular from 'angular';

export default class Dimension extends Util {
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

    static setTransform(value) {

        let yValue = value[1];
        let xValue = value[0];

        let yPattern = /\,[\-\.0-9]{1,}\)/;
        let xPattern = /\([\-\.0-9]{1,}\,/;
        let svgDimension = this.getSvg().dimension;

        let oldTransform = this.selection.attr('transform') || `translate(${d3Event.x},${d3Event.y})`;
        let newTransform;

        console.log({svgDimension});

        if (yValue) {
            newTransform = oldTransform.replace(yPattern, ',' + (yValue - svgDimension.top) + ')');
        }
        if (xValue) {
            newTransform = oldTransform.replace(xPattern, '(' + (xValue) + ',');
        }

        this.selection.attr('transform', newTransform);
    }
}