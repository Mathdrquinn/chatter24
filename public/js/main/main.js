angular.module("mainController", ["ngRoute"])
  .config(function ($routeProvider) {
    $routeProvider
    .when("/lobby", {
      templateUrl: "views/lobby.html",
      controller: "mainCtrl"
    });
  });
