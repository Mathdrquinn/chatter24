angular.module("mainController")
  .factory("mainSvc", function ($resource, $rootScope, $log) {
      return $resource('api/collections/people',
			{},
			{
				query: { method: 'GET', isArray: true, params },
				create: { method: 'POST'},
        delete: {method: 'DELETE'},
			});

  });
