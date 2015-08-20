'use strict';

/**
 * @ngdoc function
 * @name encontroApp.controller:ProgramacaoCtrl
 * @description
 * # ProgramacaoCtrl
 * Controller of the encontroApp
 */
angular.module('encontroApp')
    .controller('ProgramacaoCtrl', function($scope, Palestrantes, uiCalendarConfig) {
        $scope.eventSources = [Palestrantes.all()];
        $scope.uiConfig = {
            calendar: {
                hiddenDays: [ 1 ],
                height: 550,
                editable: false,
                defaultView: 'agendaWeek',
                header: false,
                dayClick: $scope.alertEventOnClick,
                eventDrop: $scope.alertOnDrop,
                eventResize: $scope.alertOnResize,
                defaultDate: '2015-09-10T08:10:00',
                allDaySlot: false,
                minTime: "10:00:00",
                maxTime: "19:00:00",
                firstDay: 1
            }
        };
    });
