angular.module("mainController", ["ngRoute"])
  .config(function ($routeProvider) {
    $routeProvider
    .when("/:room", {
      templateUrl: "views/room.html",
      controller: "mainCtrl"
    })
    .when("/lobby", {
      templateUrl: "views/lobby.html",
      controller: "mainCtrl"
    });
  });
