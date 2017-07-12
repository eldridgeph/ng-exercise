import * as d3 from 'd3';

class Bounce {
    constructor(scope) {

        this.d3Scope = scope;
        this.parentNode = d3.select(this.d3Scope[0].parentNode);

        let parentHeight = this.parentNode.attr('height');

        this.d3Scope
                .transition()
                .each(function () {

                    let origY;
                    let shape = d3.select(this);
                    let bounceTo = function (callback) {
                        shape
                                .transition()
                                .delay(shape.attr('r') * 10)
                                .attr('cy', callback);
                    };

                    setInterval(function () {

                        if (!origY) {
                            origY = shape.attr('cy');
                        }

                        bounceTo(function () {
                            return origY - 20;
                        });

                        setTimeout(function () {
                            bounceTo(function () {
                                return origY;
                            });
                        }, 250);
                    }, 500);
                })
                .attr('cy', function (property) {
                    let diameter = property.diameter;
                    let radius = diameter / 2;
                    return (parentHeight) - diameter;
                })
                ;
    }
}

export default function () {
    new Bounce(this);
};