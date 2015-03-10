angular.module("TeachingEvaluations").controller('LoginController', [
	'$scope',
	'$location',
	'$rootScope',
	'$routeParams',
	'$http',
	'Dispatch',
function ($scope, $location, $rootScope, $routeParams, $http, Dispatch) {
	$scope.errorMessage = '';
	$scope.username = '';

	$scope.login = function (user, pass) {
		console.log(user + " " + pass);
		Dispatch.login( {user: user, pass: pass} )
			.success(function (data) {
				$http.defaults.headers.common.Authorization = "Basic " + data.Token;
				$location.path('/evaluations/' + $scope.username);
			});
	};
}]);