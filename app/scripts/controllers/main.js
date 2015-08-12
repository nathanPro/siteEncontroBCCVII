'use strict';

/**
 * @ngdoc function
 * @name encontroApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the encontroApp
 */
angular.module('encontroApp')
  .controller('MainCtrl', function ($scope) {

  $scope.myInterval = 3000;
  $scope.slides = [
    {
      image: 'http://lorempixel.com/1500/1500/'
    },
    {
      image: 'http://lorempixel.com/1500/1500/food'
    },
    {
      image: 'http://lorempixel.com/1500/1500/sports'
    },
    {
      image: 'http://lorempixel.com/1500/1500/people'
    }
  ];

  });
