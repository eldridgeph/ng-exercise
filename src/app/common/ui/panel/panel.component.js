import angular from 'angular';
import template from './panel.html';

export const PanelComponent = {
    template,
    transclude: true,
    replace: true,
    bindings: {'title': '@', 'column': '@'},
    controller: class PanelComponent {
        constructor($timeout) {
            this.$timeout = $timeout;
        }
        $onInit() {
            this.columnClass = this.column ? ('col-sm-' + this.column) : 'col-sm-6';
        }
        getColumnClass() {
            return this.columnClass;
        }
    }
};