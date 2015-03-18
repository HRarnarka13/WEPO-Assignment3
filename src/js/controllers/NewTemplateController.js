angular.module('TeachingEvaluations').controller('NewTemplateController', [
	'$scope',
	'$location',
	'$rootScope',
	'$routeParams',
	'$http',
	'AdminFactory',
function ($scope, $location, $rootScope, $routeParams, $http, AdminFactory) {

	$scope.showTeacher = false;
	$scope.showCourse = false;
	$scope.courseQuestions = [];
	$scope.courseQuestion = {
		Text: "",
		TextEN: "",
		Type: ""
	};
	$scope.teacherQuestions = [];
	$scope.teacherQuestion = {
		Text: "",
		TextEN: "",
		Type: ""
	};



	$scope.createTemplate = function () {
		AdminFactory.postEvaluationTemplate($scope.title, $scope.titleEN, $scope.introText, $scope.introTextEN, $scope.courseQuestions, $scope.teacherQuestions).success(function (data){
			$location.path('/admin/evaluations/');
		});
		console.log($scope.courseQuestions);
		console.log($scope.teacherQuestions);
		console.log("createTemplate");
	};
	$scope.addTeacherQuestion = function() {
		var newQuestion;
		if ($scope.teacherQuestion.Type === 'text') {
			newQuestion = {
				Text: $scope.teacherQuestion.Text,
				TextEn: $scope.teacherQuestion.TextEn,
				ImageURL: "",
				Type: $scope.teacherQuestion.Type
			};
		} else {
			newQuestion = {
				Text: $scope.teacherQuestion.Text,
				TextEn: $scope.teacherQuestion.TextEn,
				ImageURL: "",
				Type: $scope.teacherQuestion.Type,
				Answers: {
					Text: $scope.TchoicesIce,
					TextEN: $scope.TchoicesEn,
					ImageURL: "",
					Weight: 1
				}
			};
		}
		$scope.teacherQuestions.push(newQuestion);
		console.log($scope.teacherQuestions);
		$scope.teacherQuestion.Text = "";
		$scope.teacherQuestion.Type = "";
		$scope.showTeacher = !$scope.showTeacher;
	};
	$scope.addCourseQuestion = function() {
		var newQuestion;
		if ($scope.courseQuestion.Type === 'text') {
			newQuestion = {
				Text: $scope.courseQuestion.Text,
				TextEn: $scope.courseQuestion.TextEn,
				ImageURL: "",
				Type: $scope.courseQuestion.Type
			};
		} else {
			newQuestion = {
				Text: $scope.courseQuestion.Text,
				TextEn: $scope.courseQuestion.TextEn,
				ImageURL: "",
				Type: $scope.courseQuestion.Type,
				Answers: {
					Text: $scope.CchoicesIce,
					TextEN: $scope.CchoicesEn,
					ImageURL: "",
					Weight: 1
				}
			};
		}
		// Reset chices
		$scope.CchoicesIce = '';
		$scope.CchoicesEn = '';

		$scope.courseQuestions.push(newQuestion);
		console.log($scope.courseQuestions);
		$scope.courseQuestion.Text = "";
		$scope.courseQuestion.Type = "";
		$scope.showCourse = !$scope.showCourse;
	};

	$scope.showTeacherQuestion = function() {
		$scope.showTeacher = !$scope.showTeacher;
	};
	$scope.showCourseQuestion = function() {
		$scope.showCourse = !$scope.showCourse;
	};

}]);