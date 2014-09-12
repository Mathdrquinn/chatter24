angular.module("mainController")
    .controller("mainCtrl", function ($rootScope, $scope, $location, $routeParams, mainSvc, roomsSvc) {



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

      $scope.user = function (x) {
        var length = $scope.people.length
        var y = x.name
        for(var i = 0; i < length; i++) {
          if (scope.people[i].name === y) {
            return x;
          }
          else {
            $scope.createPerson = function (x){

              mainSvc.create(person);
              $rootScope.$broadcast('person:added');
              $location.path('/lobby');
              return x;

            };
          }
        }
      }

    });
