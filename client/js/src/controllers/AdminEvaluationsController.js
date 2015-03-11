angular.module('TeachingEvaluations').controller('AdminEvaluationsController', [
	'$scope',
	'$location',
	'$rootScope',
	'$routeParams',
	'$http',
	'Dispatch',
function ($scope, $location, $rootScope, $routeParams, $http, Dispatch) {

	Dispatch.getEvaluations().success(function (data) {
		console.log(data);
		$scope.evaluations = data;
	});

}]);