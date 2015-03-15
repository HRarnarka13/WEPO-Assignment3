angular.module('TeachingEvaluations').controller('AdminEvaluationController', [
	'$scope',
	'$location',
	'$rootScope',
	'$routeParams',
	'$http',
	'Dispatch',
function ($scope, $location, $rootScope, $routeParams, $http, Dispatch) {


	Dispatch.getEvaluation($routeParams.evalID).success(function (data) {
		console.log(data);
	});


}]);