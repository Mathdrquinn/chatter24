angular.module("mainController")
    .controller("mainCtrl", function ($rootScope, $scope, $location, $routeParams, mainSvc, roomsSvc) {

      // $scope.user = "undefined";

      $scope.createPerson = function (person){
        mainSvc.create(person);
        $rootScope.$broadcast('person:added');
        $location.path('/lobby');
        // $scope.user = person.name;
        // console.log($scope.user);

      };
      $scope.deletePerson = function (id){
        mainSvc.delete(id);
      };

      $scope.people = mainSvc.query();

      $scope.createRoom = function (room){
        roomsSvc.createRoom(room);
        $rootScope.$broadcast('room:added');
        //$location.path('/lobby');

      };

      $scope.rooms = roomsSvc.query();

    });
