import Core from './core';

class Graph extends Core {
    constructor(d3Axis) {
        super();
        this.elements = [];
        this.d3Axis = d3Axis;
    }
    axis() {
        return new this.d3Axis;
    }
    add(element) {
        element.setContainer(this.setContainer.input);
        this.elements.push(element);
        return this;
    }
    implement() {
        angular.forEach(this.elements, (element) => {
            element.create();
        });
    }
}

export default function (d3Axis) {
    return function () {
        return new Graph(d3Axis)
    };
}