import angular from 'angular';
import UiPanelModule from './panel/panel.module';

const UiModule = angular
        .module('common.ui', [
            UiPanelModule
        ])
        .name;

export default UiModule;