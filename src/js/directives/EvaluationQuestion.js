angular.module("TeachingEvaluations").directive('evaluationQuestion', function() {
	return {
		restrict: 'E',
		require: '^form',
		templateUrl: 'src/views/evaluationQuestion.html',
		scope: {
			question: '='
		},
		link : function (scope) {
			console.log(scope.question);
		}
	};
});