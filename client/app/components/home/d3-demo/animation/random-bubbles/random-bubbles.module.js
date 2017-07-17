import angular from 'angular'; 
import {RandomBubblesComponent} from './random-bubbles.component';
 
const RandomBubbleModule = angular
        .module('random-bubbles', [])
        .component('randomBubbles', RandomBubblesComponent)
        .name;

export default RandomBubbleModule;