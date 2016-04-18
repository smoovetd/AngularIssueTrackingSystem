'use strict';

angular.module('issueTracker.users.authentication',[])
	.factory('authentication',['$http','$q','BASE_URL',function authenticationFactory($http,$q,BASE_URL){

		function loginUser(existingUser){
			var deferredLogin = $q.defer();
			$http.post(BASE_URL+ 'api/Account/AddExternalLogin',existingUser)
				.then(function successLogin(response){
					deferredLogin.resolve(response.data);
				}, function errorLogin(error){
					deferredLogin.reject(error);
				});

			return deferredLogin.promise;
		}

		function registerUser(existingUser){
			var deferredRegister = $q.defer();
			$http.post(BASE_URL+ 'api/Account/Register',existingUser)
				.then(function successRegister(response){
					deferredRegister.resolve(response.data);
				}, function errorRegister(error){
					deferredRegister.reject(error);
				});

			return deferredRegister.promise;
		}

		return{
			loginUser: loginUser,
			registerUser: registerUser
		}

	}])