angular.module("roomController")
    .controller("roomCtrl", function ($rootScope, $scope, $location, $log, $routeParams, oneRoomSvc, roomsSvc) {

        $scope.singleRoom = oneRoomSvc.show({id: $routeParams.id});

        $scope.user = user;

        $scope.chat = function (room, message) {
            console.log("begin creating chat");
            message.author = user.name;
            message.time = Date();
            console.log(message);
            room.chats.push(message);
            oneRoomSvc.chat(room);
            console.log("end chat");


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
