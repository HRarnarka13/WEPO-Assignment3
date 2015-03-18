angular.module('TeachingEvaluations').controller('AdminEvaluationsController', [
	'$scope',
	'$location',
	'$rootScope',
	'$routeParams',
	'$http',
	'AdminFactory',
function ($scope, $location, $rootScope, $routeParams, $http, AdminFactory) {

	// Get evaluations
	AdminFactory.getEvaluations().success(function (data) {
		// console.log(data);
		$scope.evaluations = data;
	});

	// Get evaluation templates
	AdminFactory.getEvaluationTemplates().success(function (data) {
		console.log(data);
		$scope.templates = data;
	});

}]);