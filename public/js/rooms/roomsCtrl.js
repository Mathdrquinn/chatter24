angular.module("roomController")
    .controller("roomCtrl", function ($rootScope, $scope, $location, $anchorScroll, $log, $routeParams, oneRoomSvc, roomsSvc) {

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
            console.log("go to bottom");
            //$scope.goToBottom();
            sleep(1);
            console.log("end chat");

        };

        function sleep(milliseconds) {
            var start = new Date().getTime();
            for (var i = 0; i < 1e7; i++) {
                if ((new Date().getTime() - start) > milliseconds){
                    $scope.goToBottom();
                    return;
                }
            }
        }

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

        $scope.goToBottom = function() {
            // set the location.hash to the id of
            // the element you wish to scroll to.
            $location.hash('bottom');

            // call $anchorScroll()
            $anchorScroll();
        };
        //This does not work, though it does when clicked....
        var init = function() {
            console.log("go to bottom");
            $scope.goToBottom();
        }

        init();



    });
