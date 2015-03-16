angular.module("TeachingEvaluations").controller('LoginController', [
	'$scope',
	'$location',
	'$rootScope',
	'$routeParams',
	'$http',
	'Dispatch',
function ($scope, $location, $rootScope, $routeParams, $http, Dispatch) {
	$scope.errorMessage = '';
	$scope.username 	= '';
	$scope.password 	= '';

	$scope.login = function () {
		if($scope.loginForm.$valid) {
			Dispatch.login($scope.username, $scope.password)
				.success(function (data) {
					$scope.failToLogin = false;
					$http.defaults.headers.common.Authorization = "Basic " + data.Token;
					$scope.role = data.User.Role;
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