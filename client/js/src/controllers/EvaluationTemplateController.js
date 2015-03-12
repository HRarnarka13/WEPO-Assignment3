angular.module('TeachingEvaluations').controller('EvaluationTemplateController', [
	'$scope',
	'$location',
	'$rootScope',
	'$routeParams',
	'$http',
	'Dispatch',
function ($scope, $location, $rootScope, $routeParams, $http, Dispatch) {

	Dispatch.getEvaluationTemplate($routeParams.ID).success(function (data) {
		$scope.templates = data;
		console.log(data);
	});
}]);