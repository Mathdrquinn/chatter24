angular.module("mainController")
  .factory("mainSvc", function ($resource, $rootScope, $log) {
      return $resource('collections/people',
			{},
			{
				query: { method: 'GET', isArray: true },
				create: { method: 'POST'}
			});

  });
