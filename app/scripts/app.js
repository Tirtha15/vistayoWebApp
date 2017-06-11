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
    'authService',
    'searchService',
    'adminService',
    'mainService',
    'mainController'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
  })