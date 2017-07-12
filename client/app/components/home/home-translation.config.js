export default function ($translateProvider) {

    $translateProvider.translations('en', {
        'LOGOUT': 'Logout',
        'BASIC': 'Basic'
    });

    $translateProvider.translations('de', {
        'LOGOUT': 'Ausloggen'
    });

    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy('escapeParameters');
}