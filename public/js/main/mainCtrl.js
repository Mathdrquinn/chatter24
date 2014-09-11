angular.module("mainController")
    .controller("mainCtrl", function ($rootScope, $scope, $location, $routeParams, $location, mainSvc) {

      $scope.createPerson = function (person){
        mainSvc.create(person);
        $rootScope.$broadcast('person:added');
        $location.path('/lobby');

      };
      $scope.people = mainSvc.query();







    });
