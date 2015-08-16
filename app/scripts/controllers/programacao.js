'use strict';

/**
 * @ngdoc function
 * @name encontroApp.controller:ProgramacaoCtrl
 * @description
 * # ProgramacaoCtrl
 * Controller of the encontroApp
 */
angular.module('encontroApp')
  .controller('ProgramacaoCtrl', function ($scope, Palestrantes, uiCalendarConfig) {
    $scope.eventSources  = [Palestrantes.all()];
    $scope.uiConfig = {
      calendar:{
        height: 450,
        editable: true,
        defaultView: 'agendaWeek',
        header: false,
        dayClick: $scope.alertEventOnClick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize,
        defaultDate: '2015-09-06T08:10:00',
        allDaySlot: false
      }
    };
  });
