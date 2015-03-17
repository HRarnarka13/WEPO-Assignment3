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
	$scope.courseQuestions = [];
	$scope.courseQuestion = {
		text: "",
		answerType: ""
	}
	$scope.teacherQuestions = [];
	$scope.teacherQuestion = {
		text: "",
		answerType: ""
	}



	$scope.createTemplate = function () {
		Dispatch.postEvaluationTemplate($scope.title, $scope.introText, $scope.introTextEN, $scope.courseQuestions, $scope.teacherQuestions).success(function (data){
		});
		console.log($scope.courseQuestions);
		console.log($scope.teacherQuestions);
		console.log("createTemplate");
	};
	$scope.addTeacherQuestion = function() {
		var newQuestion = {
			text: $scope.teacherQuestion.text,
			answerType: $scope.teacherQuestion.answerType
		}
		$scope.teacherQuestions.push(newQuestion);
		console.log($scope.teacherQuestions);
		$scope.teacherQuestion.text = "";
		$scope.teacherQuestion.answerType = "";
		$scope.showTeacher = !$scope.showTeacher;
	}
	$scope.addCourseQuestion = function() {
		var newQuestion = {
			text: $scope.courseQuestion.text,
			answerType: $scope.courseQuestion.answerType
		}
		$scope.courseQuestions.push(newQuestion);
		console.log($scope.courseQuestions);
		$scope.courseQuestion.text = "";
		$scope.courseQuestion.answerType = "";
		$scope.showCourse = !$scope.showCourse;
	}

	$scope.showTeacherQuestion = function() {
		$scope.showTeacher = !$scope.showTeacher;
	};
	$scope.showCourseQuestion = function() {
		$scope.showCourse = !$scope.showCourse;
	};

}]);