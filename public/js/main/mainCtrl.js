angular.module("mainController")
    .controller("mainCtrl", function ($rootScope, $scope, $location, $routeParams, mainSvc, roomsSvc) {

      $scope.createPerson = function (person){
        mainSvc.create(person);
        $rootScope.$broadcast('person:added');
        $location.path('/lobby');

      };
      $scope.people = mainSvc.query();

      $scope.createRoom = function (room){
        roomsSvc.createRoom(room);
        $rootScope.$broadcast('room:added');
        //$location.path('/lobby');

      };

      $scope.rooms = roomsSvc.query();

    });
