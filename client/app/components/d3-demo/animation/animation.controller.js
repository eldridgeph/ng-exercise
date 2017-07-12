import * as d3 from 'd3';

export default class  AnimationController {
    constructor($interval, $timeout, $scope) {
        this.$timeout = $timeout;
        this.$interval = $interval;
        this.$scope = $scope;
    }
    $onInit() {
        let self = this;
        self.$scope.$on('tab.animation.opened',function(){
            
        });
        self.$timeout(function () {
            self.initBubbleAnimation();
        });
    }
    initBubbleAnimation() {

        let self = this;
        let data = {
            children: [
                {"country": "Taiwan", "value": 23000000},
                {"country": "China", "value": 1369550000},
                {"country": "India", "value": 1270440000},
                {"country": "United_States", "value": 320892000},
                {"country": "Indonesia", "value": 255461700},
                {"country": "Brazil", "value": 204234000},
                {"country": "Philippines", "value": 204234000},
                {"country": "Thailand", "value": 204234000},
                {"country": "Cambodia", "value": 204234000},
                {"country": "UK", "value": 204234000},
                {"country": "England", "value": 204234000},
            ]
        };

        let pack = d3.layout.pack();

        pack = pack.padding(2).size([300, 500]).sort(function (a, b) {
            return b.value - a.value;
        });

        let nodes = pack.nodes(data);

        nodes = nodes.filter(function (it) {
            return it.parent;
        });

        let color = d3.scale.category20();
        let svg = d3.select('#d3-bubbles')
                .attr('width', '100%')
                .attr('height', '600');

        nodes.forEach(function (node) {

            var nodeGroup = svg.append('g');

            nodeGroup
                    .append('circle')
                    .attr({
                        cx: node.x,
                        cy: node.y,
                        r: node.r,
                        fill: color(node.country),
                    });

            nodeGroup
                    .append('text')
                    .attr({
                        x: node.x,
                        y: node.y,
                        'text-anchor': 'middle'
                    })
                    .text(node.country);

            function getRandom() {
                let max = Math.round(Math.random() * 300);
                return Math.round(Math.random() * max);
            }

            self.$interval(function () {
                let randomX = getRandom();
                let randomY = getRandom();
                nodeGroup
                        .transition()
                        .delay(1)
                        .attr('transform', 'translate($x,$y)'.replace('$x', randomX).replace('$y', randomY))
            }, 2000);

        });

    }
}