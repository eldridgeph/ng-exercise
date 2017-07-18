import angular from 'angular';
import * as d3 from 'd3';
import CoreComponent from './core.component';

export const AxisComponent = {
    controller: class AxisComponent extends CoreComponent.controller {
        setRange(start, end) {
            this.setRange.start = start;
            this.setRange.end = end;
            return this;
        }
        setDomain(start = 0, end = 1) {
            this.setDomain.start = start;
            this.setDomain.end = end;
            return this;
        }
        createBottom() {
            this.create.position = 'bottom';
            return this;
        }

        createLeft() {
            return this.create('left');
        }

        create(position = this.createBottom.position) {

            let svg = this.getContainer();
            let jqSvg = this.getJqContainer();

            let scaleFn = this.getScaler()
                    .domain([this.setDomain.start, this.setDomain.end])
                    .range([this.setRange.start, this.setRange.end]);

            let axis = d3.svg.axis();
            let behavior = axis
                    .orient(position)
                    .scale(scaleFn);

            this.setFormat.callback && this.setFormat.callback(axis);

            let axisContainer = svg.append("g");

            axisContainer
                    .attr('transform', `translate(10,${jqSvg.height() - 20})`)
                    .call(behavior);

            return this;
        }

        setFormat(callback = null) {
            this.setFormat.callback = callback;
            return this;
        }
        getScaler() {

            if (angular.isDate(this.setDomain.start)) {
                return d3.time.scale();
            } else
            if (angular.isNumber(this.setDomain.start) || angular.isString(this.setDomain.start)) {
                return d3.scale.linear();
            }

            return false;
        }
    }
};