angular.module("TeachingEvaluations").controller('EvaluationsController', [
	'$scope',
	'$location',
	'$rootScope',
	'$routeParams',
	'$http',
function ($scope, $location, $rootScope, $routeParams, $http) { 
	$scope.username = $routeParams.user;
	$scope.courses = [];
	$http.get("http://dispatch.ru.is/demo/api/v1/my/evaluations")
		.success(function (data) {
			for (var i = data.length - 1; i >= 0; i--) {
				if (!isRegistered(data[i].CourseID)) {
					$scope.courses.push({CourseID: data[i].CourseID, CourseName: data[i].CourseName});
				}
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