angular.module('TeachingEvaluations').controller('NewTemplateController', [
	'$scope',
	'$location',
	'$rootScope',
	'$routeParams',
	'$http',
	'Dispatch',
function ($scope, $location, $rootScope, $routeParams, $http, Dispatch) {

	$scope.showTeacher = false;
	$scope.showCourse = false;



	$scope.createTemplate = function () {
		console.log("createTemplate");
	};

	$scope.showTeacherQuestion = function() {
		$scope.showTeacher = !$scope.showTeacher;
	};
	$scope.showTeacherQuestion = function() {
		$scope.showCourse = !$scope.showCourse;
	};

}]);