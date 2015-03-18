angular.module('TeachingEvaluations').controller('EvaluationTemplateController', [
	'$scope',
	'$location',
	'$rootScope',
	'$routeParams',
	'$http',
	'AdminFactory',
function ($scope, $location, $rootScope, $routeParams, $http, AdminFactory) {
	$scope.showQuestion = false;
	$scope.showEvaluation = false;
	AdminFactory.getEvaluationTemplate($routeParams.ID).success(function (data) {
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
		var start = $scope.startDate.toISOString();
		var end = $scope.endDate.toISOString();
		Dispatch.postEvaluation($routeParams.ID, start, end).success(function (data){
			$location.path('/admin/evaluations/');
		});
	};

	$scope.toggle = function(){
		$scope.showQuestion = !$scope.showQuestion;
	};
	$scope.toggle2 = function(){
		$scope.showEvaluation = !$scope.showEvaluation;
	};

	
}]);