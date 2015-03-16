angular.module('TeachingEvaluations').controller('EvaluationTemplateController', [
	'$scope',
	'$location',
	'$rootScope',
	'$routeParams',
	'$http',
	'Dispatch',
function ($scope, $location, $rootScope, $routeParams, $http, Dispatch) {
	$scope.showQuestion = false;
	$scope.showEvaluation = false;
	Dispatch.getEvaluationTemplate($routeParams.ID).success(function (data) {
		$scope.template = data;
		console.log('EvaluationTemplateController');
		console.log(data);

		$scope.newQuestion = function (){
			console.log("newQuestion");
		};
		/*$scope.addQuestion = function(questionType, text, answerType){
			if(questionType === "teacherQuestion"){
				data.TeacherQuestions
			}
			else if(questionType === "courseQuestion"){
				data.CourseQuestions
			}
		};*/
	});

	$scope.createEvaluation = function (){
		console.log("Before dispatch");
		/*Dispatch.postEvaluation($routeParams.ID, $scope.startDate, $scope.endDate).success(function (data){
			console.log("PostEvaluation");
			console.log(data);
		});*/
		console.log("createEvaluation");
	}

	$scope.toggle = function(){
		$scope.showQuestion = !$scope.showQuestion;
	};
	$scope.toggle2 = function(){
		$scope.showEvaluation = !$scope.showEvaluation;
	};

	
}]);