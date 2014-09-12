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

      $scope.user = user;

      $scope.createUser = function (x) {
        console.log("begin create");
        var works = "false";
        var length = $scope.people.length;
        var y = x.name;
        console.log(y + ":" + length);
        if (works ==="false") {

          for(var i = 0; i < length; i++) {
            console.log(i);
            if ($scope.people[i].name === y) {
              user = x;
              works = "worked";
              console.log("name matches" + y);
              $location.path("/lobby");
              return ;
            }
          }
        }
        if (works === "false") {
          console.log("begin create ne person");
          user = x;
          mainSvc.create(x);
          $location.path("/lobby");
        }
      };

    });
