import * as d3 from 'd3';
import {event as d3Event} from 'd3';
import {DimensionComponent as d3Dimension} from '../util/dimension.component';

export default function () {
    return d3.behavior.drag()
            .on('dragstart', function () {
                d3Event.sourceEvent.stopPropagation();
            })
            .on('drag', function () {
                d3Dimension.controller
                        .setElement(this)
                        .setLeft(d3Event.x)
                        .setTop(d3Event.y);
            })
            .on('dragend', function () {

            });
};