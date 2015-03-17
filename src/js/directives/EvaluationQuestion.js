angular.module("TeachingEvaluations").directive('evaluationQuestion', function() {
	return {
		restrict: 'E',
		require: '^form',
		transclude: true,
		templateUrl: 'src/views/evaluationQuestion.html',
		scope: {
			question: '=',
			teacher: '='
		},
		controller: function($scope) {
      		// console.log($scope);
      		$scope.questionAnswer = '';
      		if ($scope.teacher === undefined) {
      			$scope.SSN = undefined;
      		} else {
      			$scope.SSN = $scope.teacher.SSN;
      		}
  		},
		link : function (scope) {
			console.log(scope);
			// console.log("questionAnswer " + scope.questionAnswer);

			var answer = {
				ID: scope.question.ID,
				SSN: scope.SSN,
				Value: scope.questionAnswer
			};

			console.log(answer);
		}
	};
});