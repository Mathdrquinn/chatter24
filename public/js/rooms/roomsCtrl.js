angular.module("roomController")
    .controller("roomCtrl", function ($rootScope, $scope, $location, $log, $routeParams, oneRoomSvc, roomsSvc) {

        $scope.singleRoom = oneRoomSvc.show({id: $routeParams.id});

        $scope.newChat = {};


        $scope.user = user;

        $scope.chat = function (room) {
            console.log("begin creating chat");
            $scope.newChat.author = user.name;
            var t = new Date();
            console.log(t);
            $scope.newChat.time = t.getTime();
            console.log($scope.newChat.time);
            console.log($scope.newChat);
            room.chats.push($scope.newChat);
            oneRoomSvc.chat(room);
            $scope.newChat = {};
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
