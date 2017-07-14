import languages from 'dir-loader!./languages/config.js';
import angular from 'angular';

function translation($translateProvider) {
    let langCode;
    angular.forEach(languages, function (language, file) {
        langCode = file.replace(/\.json/, '');
        $translateProvider.translations(langCode, language.src);
    });
    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy('escapeParameters');
}

export {translation};