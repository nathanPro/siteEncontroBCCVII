'use strict';

/**
 * @ngdoc function
 * @name encontroApp.controller:PalestrantesCtrl
 * @description
 * # PalestrantesCtrl
 * Controller of the encontroApp
 */
angular.module('encontroApp')
    .controller('PalestrantesCtrl', function(Palestrantes, $scope) {
        $scope.palestrantes = Palestrantes.all();
    });
