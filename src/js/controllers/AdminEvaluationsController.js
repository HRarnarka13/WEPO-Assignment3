angular.module('TeachingEvaluations').controller('AdminEvaluationsController', [
	'$scope',
	'$location',
	'$rootScope',
	'$routeParams',
	'$http',
	'Dispatch',
function ($scope, $location, $rootScope, $routeParams, $http, Dispatch) {

	// Get evaluations
	Dispatch.getEvaluations().success(function (data) {
		// console.log(data);
		$scope.evaluations = data;
	});

	// Get evaluation templates
	Dispatch.getEvaluationTemplates().success(function (data) {
		console.log(data);
		$scope.templates = data;
	});

}]);