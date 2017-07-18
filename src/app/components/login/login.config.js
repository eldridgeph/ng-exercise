
export const translations = $arcTranslateProvider => new $arcTranslateProvider(require('dir-loader!./languages/config.js'))

export const uiRouting = ($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $urlRouterProvider.otherwise('/login');

    $stateProvider
            .state('login', {
                url: '/login',
                component: 'loginView'
            });
};