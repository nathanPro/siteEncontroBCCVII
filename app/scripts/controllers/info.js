'use strict';

/**
 * @ngdoc function
 * @name encontroApp.controller:InfoCtrl
 * @description
 * # InfoCtrl
 * Controller of the encontroApp
 */
angular.module('encontroApp')
    .controller('InfoCtrl', function($stateParams, $scope, Palestrantes) {
        $scope.pale = Palestrantes.id($stateParams.id);
        console.log($scope.pale);
    });
