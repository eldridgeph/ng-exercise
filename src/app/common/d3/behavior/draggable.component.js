import * as d3 from 'd3';
import {event as d3Event} from 'd3';
import {controller as d3Dimension} from '../util/dimension.component';

export const DraggableComponent = {
    controller: new class DraggableComponent {
        constructor() {
            return d3.behavior.drag()
                    .on('dragstart', function () {
                        d3Event.sourceEvent.stopPropagation();
                    })
                    .on('drag', function (shape) {
                        d3Dimension
                                .setElement(this)
                                .setLeft(d3Event.x)
                                .setTop(d3Event.y);
                    })
                    .on('dragend', function () {

                    });
        }
    }
};