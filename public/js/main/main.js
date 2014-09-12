angular.module("mainController", ["ngRoute"])
  .config(function ($routeProvider) {
    $routeProvider
    .when("/lobby/:id", {
      templateUrl: "views/lobby.html",
      controller: "mainCtrl"
    });
  });
