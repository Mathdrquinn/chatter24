'use strict';

angular
  .module('chatApp', [
    'mainController',
    'mainService',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
