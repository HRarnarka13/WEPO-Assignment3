angular.module('TeachingEvaluations').controller('EvaluationController', [
	'$scope',
	'$location',
	'$rootScope',
	'$routeParams',
	'$http',
	'UserFactory',
	'AnswersFromStudent',
	'LoginFactory',
function ($scope, $location, $rootScope, $routeParams, $http, UserFactory, AnswersFromStudent, LoginFactory) { 
	$scope.username = $routeParams.user;
	$scope.cID = $routeParams.courseID;
	$scope.semesterID = $routeParams.semesterID;
	$scope.evalID = $routeParams.evalID;

	UserFactory.getMyEvaluation($scope.cID, $scope.semesterID, $scope.evalID).success(function (data) {
		// console.log(data);
		$scope.introText = data.IntroText;
		$scope.title = data.Title;
		$scope.courseQuestions = data.CourseQuestions;
		$scope.teacherQuestions = data.TeacherQuestions;
		console.log(data);
		// console.log($scope.courseQuestions);
	});

	// Get list of teachers for the current course and semester
	UserFactory.getTeachers($scope.cID, $scope.semesterID).success(function (data) {
		$scope.teachers = data;
	});
	
    $scope.submitAnswers = function () {
        if($scope.evaluationForm.$valid) {
            console.log('Answers:');
            // console.log($scope.evaluationForm);
            //postEvaluationAnswer: function (courseID, semesterID, evalID, answers) {
            $scope.answers = AnswersFromStudent.getAnswers();
            console.log($scope.answers);
            UserFactory.postEvaluationAnswer($scope.cID, $scope.semesterID, $scope.evalID, $scope.answers)
            	.success(function (data) {
            		AnswersFromStudent.resetAnswers();
            		$location.path('/evaluations/' + LoginFactory.getUser());
            	})
            	.error(function (data) {
            		console.log('Something when wrong! Couldn\'t submit answers');
            		console.log(data);
            	});
    	}
    };	
}]);