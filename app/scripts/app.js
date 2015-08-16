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
    'ngMap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/Acontece', {
        templateUrl: 'views/acontece.html',
        controller: 'AconteceCtrl',
        controllerAs: 'Acontece'
      })
      .when('/Programacao', {
        templateUrl: 'views/programacao.html',
        controller: 'ProgramacaoCtrl',
        controllerAs: 'Programacao'
      })
      .when('/Palestrantes', {
        templateUrl: 'views/palestrantes.html',
        controller: 'PalestrantesCtrl',
        controllerAs: 'Palestrantes'
      })
      .when('/Patrocinadores', {
        templateUrl: 'views/patrocinadores.html',
        controller: 'PatrocinadoresCtrl',
        controllerAs: 'Patrocinadores'
      })
      .when('/Historia', {
        templateUrl: 'views/historia.html',
        controller: 'HistoriaCtrl',
        controllerAs: 'Historia'
      })
      .when('/Colabore', {
        templateUrl: 'views/colabore.html',
        controller: 'ColaboreCtrl',
        controllerAs: 'Colabore'
      })
      .when('/Local', {
        templateUrl: 'views/local.html',
        controller: 'LocalCtrl',
        controllerAs: 'Local'
      })
      .when('/Chegando', {
        templateUrl: 'views/chegando.html',
        controller: 'ChegandoCtrl',
        controllerAs: 'Chegando'
      })
      .when('/Hack', {
        templateUrl: 'views/hack.html',
        controller: 'HackCtrl',
        controllerAs: 'Hack'
      })
      .when('/info/:id', {
        templateUrl: 'views/info.html',
        controller: 'InfoCtrl',
        controllerAs: 'info'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

.directive('disableNgAnimate', ['$animate', function($animate) {
  return {
    restrict: 'A',
    link: function(scope, element) {
      $animate.enabled(false, element);
    }
  };
}]);

