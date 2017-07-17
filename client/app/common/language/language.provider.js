import angular from 'angular';

export default function ($translateProvider) {
    return new class LanguageProvider {
        constructor() {
            this.setPreferred('en');
            $translateProvider.useSanitizeValueStrategy('escapeParameters');
        }
        setPreferred(langCode = 'en') {
            this.preferredLangCode = langCode;
            $translateProvider.preferredLanguage(this.preferredLangCode);
            return this;
        }
        set(preferredLanguage = 'en', translations) {
            this.setPreferred(preferredLanguage);
            angular.forEach(translations, (language, filename) => $translateProvider.translations(filename.replace(/\.json/, ''), language.src));
            return this;
        }
        load(translations) {
            this.set(this.preferredLangCode, translations);
            return this;
        }
        $get() {

        }
    }
}