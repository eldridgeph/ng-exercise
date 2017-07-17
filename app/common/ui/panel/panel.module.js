import angular from 'angular'; 
import {PanelComponent} from './panel.component';
 
export default angular
        .module('ui.panel', [])
        .component('commonUiPanel', PanelComponent)
        .name