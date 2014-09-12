angular.module("roomController", ["ngRoute"])
  .config(function ($routeProvider) {
    $routeProvider
    .when("/room/:id", {
      templateUrl: "views/rooms.html",
      controller: "roomCtrl"
    });
  });
