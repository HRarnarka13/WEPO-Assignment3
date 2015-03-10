angular.module("TeachingEvaluations").controller('EvaluationsController', [
	'$scope',
	'$location',
	'$rootScope',
	'$routeParams',
	'$http',
	'Dispatch',
function ($scope, $location, $rootScope, $routeParams, $http, Dispatch) { 
	$scope.username = $routeParams.user;
	$scope.courses = [];

	Dispatch.getMyEvaluations().success(function (data) {
		for (var i = data.length - 1; i >= 0; i--) {
				console.log(data[i]);
				// if (!isRegistered(data[i].CourseID)) {
					// var course = {
					// 	CourseID: data[i].CourseID,
					// 	CourseName: data[i].CourseName,
					// 	Semester: data[i].Semester
					// }
					$scope.courses.push(data[i]);
				// }
			};
	});

	function isRegistered (course) {
		for (var i = $scope.courses.length - 1; i >= 0; i--) {
			if ($scope.courses[i].CourseID == course) {
				return true;
			}
		}
		return false;
	}

}]);