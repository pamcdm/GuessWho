// Declare app level module which depends on filters, and services
angular.module('myApp',['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {

      $routeProvider.when('/', {
      	templateUrl: 'partials/home.html',
      	controller: 'HomeController'
      });

      $routeProvider.when('/list',
      	{
      		templateUrl: 'partials/list.html',
      		controller: 'ListController'
      	});
      $routeProvider.otherwise({redirectTo: '/'});
}]);