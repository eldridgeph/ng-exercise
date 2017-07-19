
export const translations = $arcTranslateProvider => new $arcTranslateProvider(require('dir-loader!./languages/config.js'));

export const uiRouting = ($stateProvider, $urlRouterProvider) => {
    "ngInject";
    $stateProvider
            .state('home', {
                url: '/home/{tabId}',
                component: 'homeView'
            });
};