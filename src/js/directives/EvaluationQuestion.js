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
		link : function (scope) {
			
		}
	};
});