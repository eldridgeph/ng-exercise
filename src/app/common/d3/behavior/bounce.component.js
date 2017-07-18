import * as d3 from 'd3';

export const BounceComponent = {
    controller: function () {
        return new class BounceComponent {
            constructor(scope) {
                this.d3Scope = scope;
                return this.getBehavior;
            }
            getBehavior() {
                let scopeParent = this.d3Scope[0].parentNode, breaker = 0;

                while (!(scopeParent && scopeParent.tagName === 'svg')) {

                    scopeParent = scopeParent.parentNode;
                    this.parentNode = d3.select(scopeParent);

                    if (scopeParent.tagName === 'svg') {
                        break;
                    }
                    if (breaker >= 100) {
                        break;
                    }
                    breaker++;
                }

                this.parentNode = d3.select(scopeParent);
                let parentHeight = this.parentNode.attr('height');

                return this.d3Scope
                        .transition()
                        .each(function () {

                            let isCircle = this.tagName === 'circle';
                            let yAxisAttr = isCircle ? 'cy' : 'y';
                            let heightAttr = isCircle ? 'r' : 'height';

                            let shape = d3.select(this);
                            let height = isCircle ? shape.attr('r') : shape.attr('height');
                            let origY = parentHeight - height;

                            shape.attr(yAxisAttr, (parentHeight) - height);

                            let bounceTo = (callback) => shape
                                        .transition()
                                        .delay(shape.attr(heightAttr) * 10)
                                        .attr(yAxisAttr, callback);

                            setInterval(function () {

                                if (!origY) {
                                    origY = shape.attr(yAxisAttr);
                                }

                                bounceTo(() => origY - 40);
                                setTimeout(() => bounceTo(() => origY), 250);

                            }, 500);
                        })
                        ;
            }
        };
    }
};