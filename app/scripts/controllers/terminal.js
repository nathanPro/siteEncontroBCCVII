'use strict';

/**
 * @ngdoc function
 * @name encontroApp.controller:TerminalCtrl
 * @description
 * # TerminalCtrl
 * Controller of the encontroApp
 */
angular.module('encontroApp')
    .controller('TerminalCtrl', function(Palestrantes) {
        terminal(Palestrantes.all());
    });
