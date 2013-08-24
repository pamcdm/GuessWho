// Declare app level module which depends on filters, and services
angular.module('myApp',['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'partials/home.html'});
        $routeProvider.when('/list', {templateUrl: 'partials/list.html'});
        $routeProvider.otherwise({redirectTo: '/'});
}]);