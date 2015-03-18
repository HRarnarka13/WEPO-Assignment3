angular.module('TeachingEvaluations').factory('AnswersFromStudent', function () {
	var answers = [];

	return {
		addAnswer : function (ID, SSN, Value) {
			answers.push({ID: ID, SSN: SSN, Value: Value});
		},
		getAnswers : function () {
			return answers;
		},
		resetAnswers : function () {
			answers = [];
		}
	};
});