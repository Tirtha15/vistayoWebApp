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
  .module('appRoute', ['ngRoute'])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/login', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
    .when('/search', {
        templateUrl: 'views/searchpage.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
    .when('/destination', {
        templateUrl: 'views/destination.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
    // $locationProvider.html5Mode(true);
    // $locationProvider.hashPrefix('');    
  });
