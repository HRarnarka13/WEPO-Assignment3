angular.module('TeachingEvaluations').controller('EvaluationController', [
	'$scope',
	'$location',
	'$rootScope',
	'$routeParams',
	'$http',
	'Dispatch',
function ($scope, $location, $rootScope, $routeParams, $http, Dispatch) { 
	$scope.username = $routeParams.user;
	$scope.cID = $routeParams.courseID;
	$scope.semesterID = $routeParams.semesterID;
	$scope.evalID = $routeParams.evalID;

	Dispatch.getMyEvaluation($scope.cID, $scope.semesterID, $scope.evalID).success(function (data) {
		console.log(data);
		$scope.introText = data.IntroText;
		$scope.title = data.Title;
		$scope.courseQuestions = data.CourseQuestions;
		$scope.teacherQuestions = data.TeacherQuestions;
		console.log($scope.courseQuestions);
	});

	Dispatch.getTeachers($scope.cID, $scope.semesterID).success(function (data) {
		console.log(data);
		$scope.teachers = data;
	});
	
}]);