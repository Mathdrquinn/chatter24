angular.module("roomController")
  .factory("roomsSvc", function ($resource, $rootScope, $log) {
      return $resource('api/collections/rooms',
      {},
      {
        query: { method: 'GET', isArray: true },
        create: { method: 'POST'}
      });

  })
    .factory("oneRoomSvc", function ($resource, $rootScope, $log) {
        return $resource('api/collections/rooms/:id',
            {
                id: '@_id'
            },
            {
                show: { method: 'GET' },
                chat: { method: 'PUT' }
            });

    });
