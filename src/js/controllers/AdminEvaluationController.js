angular.module('TeachingEvaluations').controller('AdminEvaluationController', [
	'$scope',
	'$location',
	'$rootScope',
	'$routeParams',
	'$http',
	'AdminFactory',
function ($scope, $location, $rootScope, $routeParams, $http, AdminFactory) {
	$scope.courseID = "T­-427­-WEPO";
	$scope.semester = "20151";
	AdminFactory.getEvaluationResults($scope.courseID, $scope.semester, $routeParams.evalID).success(function (data) {
		console.log("data:");
		console.log(data);
		console.log("heey");
	});



}]);