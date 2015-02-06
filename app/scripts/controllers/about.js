'use strict';

/**
 * @ngdoc function
 * @name moviemeterApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the moviemeterApp
 */
angular.module('moviemeterApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
