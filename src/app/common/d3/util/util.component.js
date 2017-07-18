import * as d3 from 'd3';
import angular from 'angular';

export const UtilComponent = {
    controller: class UtilComponent {
        static constructor(element) {
            this.element = element;
            this.selection = d3.select(element);
        }
        static setElement(element) {
            this.constructor(element);
            return this;
        }

        static isCircle() {
            return this.element.tagName === 'circle';
        }

        static isGroup() {
            return this.element.tagName === 'g';
        }

        static getAttr() {
        }

        static getSvg() {
            let ngElement = angular.element(this.element);
            let ngParent = ngElement.parent();
            let breaker = 0, breakLimit = 100;

            while (ngParent[0].tagName !== 'svg') {
                ngParent = ngParent.parent();
                if (breaker++ >= breakLimit) {
                    console.error('break');
                    break;
                }
            }

            ngElement = ngParent;
            let element = ngElement[0];
            let dimension = element.getBoundingClientRect();

            return {ngElement, element, dimension};
        }
    }
}