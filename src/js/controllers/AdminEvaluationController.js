angular.module('TeachingEvaluations').controller('AdminEvaluationController', [
	'$scope',
	'$location',
	'$rootScope',
	'$routeParams',
	'$http',
	'AdminFactory',
function ($scope, $location, $rootScope, $routeParams, $http, AdminFactory) {
	$scope.courseID = "T­-427­-WEPO"
	$scope.semester = "20151"
	$scope.oneAtATime = false;

	$scope.status = {
    	isFirstOpen: true,
    	isFirstDisabled: false
  	};

	AdminFactory.getEvaluation($routeParams.evalID).success(function (data) {
		console.log("data:");
		$scope.results = data;
		$scope.courses = data.Courses;
		console.log(data);
	});



}]);