import angular from 'angular';
import LanguageModule from './language/language.module';
import UiModule from './ui/ui.component';
import SessionModule from './session/session.module';
import D3Module from './d3/d3.module';

const CommonModule = angular
        .module('app.common', [
            LanguageModule,
            UiModule,
            SessionModule,
            D3Module
        ])
        .name;

export default CommonModule;