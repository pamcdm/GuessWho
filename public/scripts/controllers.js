// Declare app level module which depends on filters, and services
angular.module('myApp').
  controller('HomeController', ['$rootScope', '$scope','$http','$location',function($rootScope,$scope,$http,$location){
	$scope.actions ={};


		$scope.actions.joinGame = function(){
			$rootScope.name = $scope.name;
			promise = 	$http.post('http://guesswho.net:3000/player?realName='+ $scope.name );

			promise.then(
			    function (){
					$location.path("list");
				},
				function(data,status){
					$scope.error = "An error ocurred. You couldn't join the game :("
				});

			};
  }]).
  controller('ListController',['$rootScope','$scope','$http', '$location',function($rootScope, $scope, $http, $location){

  	$scope.updateFicionalName = function(player,newFictionalName){
		   player.fictionalName = newFictionalName;
		   $http.post('http://guesswho.net:3000/player?realName='+ player.realName + '&fictionalName=' + newFictionalName );
		}

		$scope.refresh = function(){
			$http.get('http://guesswho.net:3000/player/all/').
			then(function (response){
					$scope.players = response.data;
				},function(data,status){
					$scope.error = "We couldn't find players :(";
				});
		}

		$scope.back = function(){
			$location.path('/')
		}

		$scope.name = $rootScope.name;

		$scope.filterMe = function(item){
			return item.realName != $scope.name
		}

		$scope.refresh();

	}]);