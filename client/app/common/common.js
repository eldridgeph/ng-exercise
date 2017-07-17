import angular from 'angular';
import LanguageComponent from './language/language.component';
import UiComponent from './ui/ui.component';
import sessionService from './session/session.service';

export default angular
        .module('common', [
            LanguageComponent,
            UiComponent
        ])
        .service('sessionService', sessionService)
        .name;