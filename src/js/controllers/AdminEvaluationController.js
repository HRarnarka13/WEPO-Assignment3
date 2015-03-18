angular.module('TeachingEvaluations').controller('AdminEvaluationController', [
	'$scope',
	'$location',
	'$rootScope',
	'$routeParams',
	'$http',
	'AdminFactory',
function ($scope, $location, $rootScope, $routeParams, $http, AdminFactory) {


	AdminFactory.getEvaluation($routeParams.evalID).success(function (data) {
		console.log(data);
	});


}]);