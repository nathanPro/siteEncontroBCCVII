'use strict';

/**
 * @ngdoc overview
 * @name encontroApp
 * @description
 * # encontroApp
 *
 * Main module of the application.
 */
angular
    .module('encontroApp', [
        'ui.bootstrap',
        'ngRoute',
        'ngTouch',
        'ngSanitize',
        'ngAnimate',
        'ui.calendar',
        'ngMap',
        'ui.router'
    ])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: 'views/main.html',
                views: {
                    'container': {
                        templateUrl: 'views/main.html',
                        controller: 'MainCtrl'
                    },
                    'top': {
                        templateUrl: 'views/terminal.html',
                        controller: 'TerminalCtrl'
                    }
                }
            })
            .state('about', {
                url: '/About',
                views: {
                    'container': {
                        templateUrl: 'views/about.html',
                        controller: 'AboutCtrl'
                    }
                }
            })
            .state('Acontece', {
                url: '/Acontece',
                views: {
                    'container': {
                        templateUrl: 'views/acontece.html',
                        controller: 'AconteceCtrl'
                    }
                }
            })
            .state('Programacao', {
                url: '/Programacao',
                views: {
                    'container': {
                        templateUrl: 'views/programacao.html',
                        controller: 'ProgramacaoCtrl'
                    }
                }
            })
            .state('Palestrantes', {
                url: '/Palestrantes',
                views: {
                    'container': {
                        templateUrl: 'views/palestrantes.html',
                        controller: 'PalestrantesCtrl'
                    }
                }
            })
            .state('Patrocinadores', {
                url: '/Patrocinadores',
                views: {
                    'container': {
                        templateUrl: 'views/patrocinadores.html',
                        controller: 'PatrocinadoresCtrl'
                    }
                }
            })
            .state('Historia', {
                url: '/Historia',
                views: {
                    'container': {
                        templateUrl: 'views/historia.html',
                        controller: 'HistoriaCtrl'
                    }
                }
            })
            .state('Colabore', {
                url: '/Colabore',
                views: {
                    'container': {
                        templateUrl: 'views/colabore.html',
                        controller: 'ColaboreCtrl'
                    }
                }
            })
            .state('Local', {
                url: '/Local',
                views: {
                    'top': {
                        templateUrl: 'views/local.html',
                        controller: 'LocalCtrl'
                    }
                }
            })
            .state('Chegando', {
                url: '/Chegando',
                views: {
                    'container': {
                        templateUrl: 'views/chegando.html',
                        controller: 'ChegandoCtrl'
                    }
                }
            })
            .state('Hack', {
                url: '/Hack',
                views: {
                    'container': {
                        templateUrl: 'views/hack.html',
                        controller: 'HackCtrl'
                    }
                }
            })
            .state('info', {
                url: '/info/:id',
                views: {
                    'container': {
                        templateUrl: 'views/info.html',
                        controller: 'InfoCtrl'
                    }
                }}
            );
            $urlRouterProvider.otherwise("/main");
    })

.directive('disableNgAnimate', ['$animate', function($animate) {
    return {
        restrict: 'A',
        link: function(scope, element) {
            $animate.enabled(false, element);
        }
    };
}]);
