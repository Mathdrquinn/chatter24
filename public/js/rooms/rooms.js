angular.module("roomController", ["ngRoute"])
  .config(function ($routeProvider) {
    $routeProvider
    .when("/room", {
      templateUrl: "views/rooms.html",
      controller: "roomCtrl"
    });
  });
