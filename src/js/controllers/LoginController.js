angular.module("TeachingEvaluations").controller('LoginController', [
	'$scope',
	'$location',
	'$rootScope',
	'$routeParams',
	'$http',
	'LoginFactory',
function ($scope, $location, $rootScope, $routeParams, $http, LoginFactory) {
	$scope.errorMessage = '';
	$scope.username 	= '';
	$scope.password 	= '';

	$scope.login = function () {
		if($scope.loginForm.$valid) {
			LoginFactory.login($scope.username, $scope.password).success(function (data) {
					$scope.failToLogin = false;
					$http.defaults.headers.common.Authorization = "Basic " + data.Token;
					$scope.role = data.User.Role;
					LoginFactory.setUser($scope.username);
					if($scope.role === 'admin') {
						$location.path('/admin/evaluations/');
					} else {
						$location.path('/evaluations/' + $scope.username);
					}
				})
				.error(function() {
					$scope.errorMessage = 'Username or password incorrect!';
					$scope.failToLogin = true;
				});
		}
	};

}]);