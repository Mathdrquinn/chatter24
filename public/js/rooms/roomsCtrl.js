angular.module("mainController")
    .controller("roomCtrl", function ($rootScope, $scope, $location, $routeParams, mainSvc) {

      $scope.createPerson = function (person){
        mainSvc.create(person);
        $rootScope.$broadcast('person:added');
        $location.path('/lobby');

      };
      $scope.people = mainSvc.query();

    });
