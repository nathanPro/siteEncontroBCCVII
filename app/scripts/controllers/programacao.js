'use strict';

/**
 * @ngdoc function
 * @name encontroApp.controller:ProgramacaoCtrl
 * @description
 * # ProgramacaoCtrl
 * Controller of the encontroApp
 */
angular.module('encontroApp')
  .controller('ProgramacaoCtrl', function ($scope) {
    $scope.uiConfig = {
      calendar:{
        height: 450,
        editable: false,
        defaultView: 'agendaWeek',
        header: false,
        dayClick: $scope.alertEventOnClick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize,
        defaultDate: '2015-09-06',
        allDaySlot: false
      }
    };
  });
