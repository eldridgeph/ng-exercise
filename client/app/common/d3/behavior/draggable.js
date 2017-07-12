import * as d3 from 'd3';
import {event as d3Event} from 'd3';

export default d3.behavior.drag()
        .on('dragstart', function () {
            d3Event.sourceEvent.stopPropagation();
            return false;
        })
        .on('drag', function (shape) {
            d3.select(this).attr("cx", d3Event.x).attr("cy", d3Event.y);
        })
        .on('dragend', function () {

        });