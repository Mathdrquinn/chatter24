angular.module("roomController")
  .factory("roomsSvc", function ($resource, $rootScope, $log) {
      return $resource('api/collections/rooms',
      {},
      {
        query: { method: 'GET', isArray: true },
        create: { method: 'POST'}
      });

  });
