angular.module("TeachingEvaluations").controller('LoginController', [
	'$scope',
	'$location',
	'$rootScope',
	'$routeParams',
	'$http',
function ($scope, $location, $rootScope, $routeParams, $http) {
	$scope.errorMessage = '';
	$scope.username = '';

	$scope.login = function (user, pass) {
		console.log(user + " " + pass);
		$http.post("http://dispatch.ru.is/demo/api/v1/login", {user: user, pass: pass})
			.success(function (data) {
				$scope.errorMessage = data;
				$location.path('/evaluations/' + $scope.username);
			});
	};
}]);