'use strict';

/**
 * @ngdoc function
 * @name vistayoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vistayoApp
 */
angular.module('vistayoApp')
  .controller('MainCtrl', function () {
    var vm = this;
    vm.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
