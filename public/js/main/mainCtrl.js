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

      // $scope.deletePerson = function (person){
      //   mainSvc.delete(person._id);
      // };

      $scope.people = mainSvc.query();

      $scope.createRoom = function (room){
        roomsSvc.createRoom(room);
        $rootScope.$broadcast('room:added');
        //$location.path('/lobby');

      };

      $scope.rooms = roomsSvc.query();

      $scope.user = "undefined";

      $scope.createUser = function (x) {
        var length = $scope.people.length
        var y = x.name
        for(var i = 0; i < length; i++) {
          if ($scope.people[i].name === y) {
            $scope.user = x;
            return;
          }
          else {
            $scope.createPerson = function (x){
              $scope.user = x;
              mainSvc.create(person);
              $rootScope.$broadcast('person:added');
              $location.path('/lobby');

            };
          }
        }
      }

    });
