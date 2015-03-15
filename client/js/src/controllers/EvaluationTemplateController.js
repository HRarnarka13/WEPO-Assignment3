angular.module('TeachingEvaluations').controller('EvaluationTemplateController', [
	'$scope',
	'$location',
	'$rootScope',
	'$routeParams',
	'$http',
	'Dispatch',
function ($scope, $location, $rootScope, $routeParams, $http, Dispatch) {
	$scope.showQuestion = false;
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

	$scope.toggle = function(){
		$scope.showQuestion = !$scope.showQuestion;
	};

	
}]);