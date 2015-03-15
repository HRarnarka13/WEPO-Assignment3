angular.module("TeachingEvaluations").controller('EvaluationsController', [
	'$scope',
	'$location',
	'$rootScope',
	'$routeParams',
	'$http',
	'Dispatch',
function ($scope, $location, $rootScope, $routeParams, $http, Dispatch) { 
	$scope.username = $routeParams.user;
	$scope.courses = []; // Array of avaible courses to evaluate

	Dispatch.getMyEvaluations().success(function (data) {
		for (var i = 0; i < data.length; i++) {
			if (!isRegistered(data[i].CourseID)) {
				var course = {
					CourseID: data[i].CourseID,
					CourseName: data[i].CourseName,
					Semester: data[i].Semester,
					Evaluations: []
				};
				$scope.courses.push(course);
			}
			for (var j = 0; j < $scope.courses.length; j++) {
				if($scope.courses[j].CourseID === data[i].CourseID){
					$scope.courses[j].Evaluations.push(data[i]);
				}
			}
		}
	});

	function isRegistered (course) {
		for (var i = $scope.courses.length - 1; i >= 0; i--) {
			if ($scope.courses[i].CourseID === course) {
				return true;
			}
		}
		return false;
	}
}]);