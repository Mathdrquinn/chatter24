angular.module("roomController")
    .controller("roomCtrl", function ($rootScope, $scope, $location, $log, $routeParams, oneRoomSvc, roomsSvc) {

        $scope.singleRoom = oneRoomSvc.show({id: $routeParams.id});

        $scope.chat = function () {
            oneRoomSvc.chat($scope.singleRoom);

        };

        $log.info($scope.singleRoom);

        $scope.user = user;

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
