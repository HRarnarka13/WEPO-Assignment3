angular.module("TeachingEvaluations").directive('evaluationQuestion', [
	'AnswersFromStudent',
function ( AnswersFromStudent ) {
	return {
		restrict: 'E',
		require: '^form',
		transclude: true,
		templateUrl: 'src/views/directives/evaluationQuestion.html',
		scope: {
			question: '=',
			teacher: '=',
			answers: '='
		},
		controller: function($scope) {
      		$scope.questionAnswer = '';
      		if ($scope.teacher === undefined) {
      			$scope.SSN = undefined;
      		} else {
      			$scope.SSN = $scope.teacher.SSN;
      		}

      		$scope.updateAnswer = function () {
				// Add a answer to the factory	
				AnswersFromStudent.addAnswer($scope.question.ID, $scope.SSN, $scope.questionAnswer);
			};
  		},
		link : function (scope) {

		}
	};
}]);