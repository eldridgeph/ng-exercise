import angular from 'angular';
import provider from './language.provider';
import {LanguageComponent} from './language.component';

export default angular
        .module('common.language', [])
        .provider('$arcTranslate', provider)
        .config(($arcTranslateProvider) => new $arcTranslateProvider(require('dir-loader!./languages/config.js')))
        .component('languageSelect', LanguageComponent)
        .name;