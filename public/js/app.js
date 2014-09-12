'use strict';

window.user = {
  name: "undefined",
  avatar: "",
  status: false
};

angular
  .module('chatApp', [
    'mainController',
    'roomController',
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
