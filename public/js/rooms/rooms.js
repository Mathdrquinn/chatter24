angular.module("roomController", ["ngRoute"])
  .config(function ($routeProvider) {
    $routeProvider
    .when("/:room", {
      templateUrl: "views/room.html",
      controller: "roomCtrl"
    });
  });
