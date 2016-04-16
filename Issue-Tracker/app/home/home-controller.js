angular.module('issueTracker.home',[])
	.config(['$routeProvider',function homeConfigFunction($routeProvider){
		$routeProvider.when('/',{
			templateUrl: 'app/home/home.html',
			controller: 'homeController'
		});
	}])
	.controller('homeController',['BASE_URL','$scope',function homeControllerFunction(BASE_URL,$scope){
		$scope.login = function(userInfo){
			console.log(userInfo);
		}

		$scope.register = function(userInfo){
			console.log(userInfo);
		}
	}]);