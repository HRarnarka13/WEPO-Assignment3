angular.module('TeachingEvaluations').controller('NewTemplateController', [
	'$scope',
	'$location',
	'$rootScope',
	'$routeParams',
	'$http',
	'AdminFactory',
function ($scope, $location, $rootScope, $routeParams, $http, AdminFactory) {

	$scope.title = "";
	$scope.titleEN = "";
	$scope.introText = "";
	$scope.introTextEN = "";
	$scope.showTeacher = false;
	$scope.showCourse = false;
	$scope.courseQuestions = [];
	$scope.courseQuestion = {
		text: "",
		answerType: "text"
	};
	$scope.teacherQuestions = [];
	$scope.teacherQuestion = {
		text: "",
		answerType: "text"
	};
	$scope.errorMessage ="";



	$scope.createTemplate = function () {
		$scope.submitted = true;
		if($scope.title === "" || $scope.titleEN === "" || $scope.introText === "" || $scope.introTextEN === "") {
			$scope.errorMessage = "Title or Intro text are missing";
		}
		else if($scope.courseQuestions.length === 0 && $scope.teacherQuestions.length === 0){
			$scope.errorMessage = "Template must contain at least one question";
		}
		else {
			AdminFactory.postEvaluationTemplate($scope.title, $scope.titleEN, $scope.introText, $scope.introTextEN, $scope.courseQuestions, $scope.teacherQuestions).success(function (data){
			});
			console.log($scope.courseQuestions);
			console.log($scope.teacherQuestions);
			console.log("createTemplate");
		}
	};
	$scope.addTeacherQuestion = function() {
		var newQuestion = {
			text: $scope.teacherQuestion.text,
			answerType: $scope.teacherQuestion.answerType
		};
		$scope.teacherQuestions.push(newQuestion);
		console.log($scope.teacherQuestions);
		$scope.teacherQuestion.text = "";
		$scope.teacherQuestion.answerType = "text";
		$scope.showTeacher = !$scope.showTeacher;
	};
	$scope.addCourseQuestion = function() {
		var newQuestion = {
			text: $scope.courseQuestion.text,
			answerType: $scope.courseQuestion.answerType
		};
		$scope.courseQuestions.push(newQuestion);
		console.log($scope.courseQuestions);
		$scope.courseQuestion.text = "";
		$scope.courseQuestion.answerType = "text";
		$scope.showCourse = !$scope.showCourse;
	};

	$scope.showTeacherQuestion = function() {
		$scope.showTeacher = !$scope.showTeacher;
	};
	$scope.showCourseQuestion = function() {
		$scope.showCourse = !$scope.showCourse;
	};

}]);