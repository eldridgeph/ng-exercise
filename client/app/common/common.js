import angular from 'angular';
import LanguageModule from './language/language.module';
import UiModule from './ui/ui.component';
import SessionModule from './session/session.module';

const CommonModule = angular
        .module('app.common', [
            LanguageModule,
            UiModule,
            SessionModule
        ])
        .name;

export default CommonModule;