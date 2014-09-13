angular.module("mainController")
    .controller("mainCtrl", function ($rootScope, $scope, $location, $log, $routeParams, mainSvc, roomsSvc) {



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
        var room = {
          title: room.title,
          chats: [],
          date: Date()
        };

        console.log(room);
        roomsSvc.create(room);
        $rootScope.$broadcast('room:added');
        //$location.path('/lobby');

      };


      $scope.rooms = roomsSvc.query();
//
//      $scope.singleRoom = oneRoomSvc.show({id: $routeParams.id});
//
//      $scope.chat = function () {
//          oneRoomSvc.chat($scope.singleRoom);
//
//      };
//
//      $log.info($scope.singleRoom);

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
        function DropdownCtrl($scope) {
            $scope.items = [
                'The first choice!',
                'And another choice for you.',
                'but wait! A third!'
            ];

            $scope.status = {
                isopen: false
            };

            $scope.toggled = function(open) {
                console.log('Dropdown is now: ', open);
            };

            $scope.toggleDropdown = function($event) {
                $event.preventDefault();
                $event.stopPropagation();
                $scope.status.isopen = !$scope.status.isopen;
            };
        }

    });
