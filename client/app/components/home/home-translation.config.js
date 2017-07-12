import languages from 'dir-loader!./languages/config.js';
import angular from 'angular';

export default function ($translateProvider) {

    angular.forEach(languages, function (language, file) {
        let langCode = file.replace(/\.json/, '');
        $translateProvider.translations(langCode, language.src);
    });

    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy('escapeParameters');
}