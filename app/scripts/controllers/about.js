'use strict';

/**
 * @ngdoc function
 * @name vistayoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the vistayoApp
 */
angular.module('vistayoApp')
  .controller('AboutCtrl', function () {
  	var vm = this;
    vm.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
