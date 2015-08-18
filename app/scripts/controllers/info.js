'use strict';

/**
 * @ngdoc function
 * @name encontroApp.controller:InfoCtrl
 * @description
 * # InfoCtrl
 * Controller of the encontroApp
 */
angular.module('encontroApp')
    .controller('InfoCtrl', function($routeParams, $scope, Palestrantes) {
        $scope.pale = Palestrantes.id($routeParams.id);
        console.log($scope.pale);
    });
