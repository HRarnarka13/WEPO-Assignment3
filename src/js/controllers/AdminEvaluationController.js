angular.module('TeachingEvaluations').controller('AdminEvaluationController', [
	'$scope',
	'$location',
	'$rootScope',
	'$routeParams',
	'$http',
	'AdminFactory',
function ($scope, $location, $rootScope, $routeParams, $http, AdminFactory) {
	$scope.oneAtATime = false;


	AdminFactory.getEvaluation($routeParams.evalID).success(function (data) {
		console.log("data:");
		$scope.results = data;
		$scope.courses = data.Courses;
		console.log(data);
	});
}]);