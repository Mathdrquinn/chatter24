angular.module("roomController")
    .controller("roomCtrl", function ($rootScope, $scope, $location, $routeParams, roomsSvc) {

      $scope.createRoom = function (room){
        roomsSvc.create(room);
        $rootScope.$broadcast('room:added');
        //$location.path('/lobby');

      };

      $scope.rooms = roomsSvc.query();

      // $scope.postChat = function (chat){
      //   chat = {
      //     name: $scope.user,
      //     text: chat.text,
      //     date: getDate();
      //   };
      //   roomsSvc.create(chat);
      //
      // };



    });
