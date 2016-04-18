angular.module('issueTracker.home',['issueTracker.users.authentication'])
	.config(['$routeProvider',function homeConfigFunction($routeProvider){
		$routeProvider.when('/',{
			templateUrl: 'app/home/home.html',
			controller: 'homeController'
		});
	}])
	.controller('homeController',['BASE_URL','$scope', 'authentication', 
				function homeControllerFunction(BASE_URL,$scope,authentication){
		$scope.login = function(userInfo){
			authentication.loginUser(userInfo);
		}

		$scope.register = function(userInfo){
			authentication.registerUser(userInfo);
		}
	}]);