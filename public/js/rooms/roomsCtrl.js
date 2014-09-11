angular.module("roomController")
    .controller("roomCtrl", function ($rootScope, $scope, $location, $routeParams, roomsSvc) {

      $scope.createRoom = function (room){
        roomsSvc.createRoom(room);
        $rootScope.$broadcast('room:added');
        //$location.path('/lobby');

      };

      $scope.rooms = roomsSvc.query();



    });
