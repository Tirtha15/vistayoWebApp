'use strict';

/**
 * @ngdoc overview
 * @name vistayoApp
 * @description
 * # vistayoApp
 *
 * Main module of the application.
 */
angular
  .module('vistayoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'appRoute',
    // 'authService',
    // 'searchService',
    // 'adminService',
    // 'mainService',
    // 'mainController'
  ])
  .directive('autoComplete', ['Search', function(Search) {
    return {
      restrict: 'A',
      link: function(scope, elem, attr, ctrl) {
            elem.autocomplete({
                source: Search.authCompleteSearch(),
                minLength: 2
            });
        }
    }
  }])
  // .config(function($httpProvider) {
  //   $httpProvider.interceptors.push('AuthInterceptor');
  // })
  // .directive('checkbox', function(){
  //   return {
  //     restrict: 'EA',
  //     require: 'ngModel',
  //     replace: true,
  //     template: '<a class="g-checkbox" href="#"><input id="{{id}}" type="checkbox" style="display: none" ng-checked="ngModel"/></a>',
  //     scope: {
  //       id: '@',
  //       ngModel: '='
  //     },
  //     link: function(scope, element, attrs){
  //       element.removeAttr('id');
  //       element.bind('click', function(){
          
  //         element.toggleClass('checked');
  //         scope.ngModel = !scope.ngModel;
  //         scope.$apply();
  //       })
  //     }  
  //   };
  // });