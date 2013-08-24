// Declare app level module which depends on filters, and services
angular.module('myApp').
  controller('HomeController', ['$scope','$http','$location',function($scope,$http,$location){
	$scope.actions ={};


		$scope.actions.joinGame = function(){
		promise = 	$http.post('http://localhost:3000/player?name='+ $scope.name );

		promise.then(
		    function (){
				$location.path("list");
			},
			function(data,status){
				$scope.error = "An error ocurred. You couldn't join the game :("
			});

		};
  }]).
  controller('ListController',['$scope','$http',function($scope,$http){

	// $scope.players = [
	//   {
	//     realName: 'Gerard',
	//     fictionalName: ''
	//   },
	//   {
	//     realName: 'John',
	//     fictionalName: 'Jack Sparrow'
	//   },
	//   {
	//     realName: 'Patrick',
	//     fictionalName: 'Captain Pickard'
	//   }
	// ];

	$scope.updateFicionalName = function(player,newFictionalName){
	   player.fictionalName = newFictionalName;
	}

	$http.get('http://localhost:3000/player/all').
		then(function (players){
				$scope.players = players;
			},function(data,status){
				$scope.error = "We couldn't find players :(";
			});
  }])
	}]);