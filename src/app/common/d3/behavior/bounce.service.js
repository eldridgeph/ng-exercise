import * as d3 from 'd3';

export default function ($interval) {

    class BounceService {

        constructor(scope) {

            this.d3Selection = scope;

            let svg = this.getContainer();
            let svgHeight = svg.attr('height');

            this.d3Selection
                    .transition()
                    .each(function () {

                        let isCircle = this.tagName === 'circle';
                        let yAxisAttr = isCircle ? 'cy' : 'y';
                        let heightAttr = isCircle ? 'r' : 'height';

                        let shape = d3.select(this);
                        let height = isCircle ? shape.attr('r') : shape.attr('height');
                        let origY = svgHeight - height;

                        shape.attr(yAxisAttr, (svgHeight) - height);

                        let bounceTo = (callback) => shape
                                    .transition()
                                    .delay(shape.attr(heightAttr) * 10)
                                    .attr(yAxisAttr, callback);

                        $interval(function () {

                            if (!origY) {
                                origY = shape.attr(yAxisAttr);
                            }

                            bounceTo(() => origY - 40);
                            setTimeout(() => bounceTo(() => origY), 250);

                        }, 500);
                    })
                    ;
        }

        getContainer() {

            let scopeParent = this.d3Selection[0].parentNode, breaker = 0;
            let parentNode;

            while (!(scopeParent && scopeParent.tagName === 'svg')) {

                scopeParent = scopeParent.parentNode;
                parentNode = d3.select(scopeParent);

                if (scopeParent.tagName === 'svg') {
                    break;
                }
                if (breaker >= 100) {
                    break;
                }
                breaker++;
            }

            parentNode = d3.select(scopeParent);

            return parentNode;
        }

    }

    return function () {
        new BounceService(this);
    };
};