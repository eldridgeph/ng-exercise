import angular from 'angular';
import LanguageComponent from './language/language.component';
import UiComponent from './ui/ui.component';
import SessionComponent from './session/session.component';

export default angular
        .module('common', [
            LanguageComponent,
            UiComponent,
            SessionComponent
        ])
        .name;