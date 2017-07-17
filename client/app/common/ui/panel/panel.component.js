import angular from 'angular';
import template from './panel.html';

export const PanelComponent = {
    template,
    transclude: true,
    replace: true,
    bindings: {'title': '@'}
};