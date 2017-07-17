import angular from 'angular';
import UiPanelModule from './panel/panel.component';

export default angular
        .module('common.ui', [
            UiPanelModule
        ])
        .name;