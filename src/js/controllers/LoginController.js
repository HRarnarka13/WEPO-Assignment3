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
		// console.log(user + " " + pass);

		Dispatch.login( {user: user, pass: pass} )
			.success(function (data) {
				$scope.failToLogin = false;
				//console.log(data);
				$http.defaults.headers.common.Authorization = "Basic " + data.Token;
				if(data.User.Role === 'admin') {
					$location.path('/admin/evaluations/');
				} else {
					$location.path('/evaluations/' + $scope.username);
				}
			})
			.error(function() {
				$scope.failToLogin = true;
			});
	};
}]);