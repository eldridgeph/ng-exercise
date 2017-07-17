import angular from 'angular';

export default function ($translateProvider) {
    return class ArcLoadTranslation {
        constructor(config) {
            ArcLoadTranslation.load(config);
            ArcLoadTranslation.setPreferred('en');
        }
        static getDefaultLangCode() {
            return 'en';
        }
        static setPreferred(langCode = this.getDefaultLangCode()) {
            this.preferredLangCode = langCode;
            $translateProvider.preferredLanguage(this.preferredLangCode);
            $translateProvider.useSanitizeValueStrategy('escapeParameters');
            return this;
        }
        static set(preferredLanguage = this.getDefaultLangCode(), translations) {
            this.setPreferred(preferredLanguage);
            angular.forEach(translations, (language, filename) => $translateProvider.translations(filename.replace(/\.json/, ''), language.src));
            return this;
        }
        static load(translations) {
            this.set(this.preferredLangCode, translations);
            return this;
        }
        static $get() {

        }
    }
}