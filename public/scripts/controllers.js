// Declare app level module which depends on filters, and services
angular.module('myApp').
  controller('HomeController', ['$scope','$http','$location',function($scope,$http,$location){
		$scope.joinGame = function(){
			$http.post('/players',$scope.name).
				success( function (){
					$location.path("list");
				}).
				error( function(data,status){
					$scope.error = "An error ocurred. You couldn't join the game :(";
				});
		};
  }]).
  controller('ListController',['$scope','$http',function($scope,$http){
	$http.get('/players').
		success( function (players){
			$scope.players = players;
		}).
		error( function(data,status){
			$scope.error = "We couldn't find players :(";
		});

    	
	

  }])