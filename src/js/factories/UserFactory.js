angular.module('TeachingEvaluations').factory('UserFactory', [
	'$http',
	'SERVER_URL',
function ($http, SERVER_URL) {
	return {
		// User functions
		getMyEvaluations: function () {
			return $http.get(SERVER_URL + '/my/evaluations');
		},
		getMyEvaluation: function (courseID, semesterID, evalID) {
			return $http.get(SERVER_URL + '/courses/' + courseID + '/' + semesterID + '/evaluations/' + evalID);
		},
		getTeachers: function (courseID, semesterID) {
			return $http.get(SERVER_URL + '/courses/' + courseID + '/' + semesterID + '/teachers');
		},
		postEvaluationAnswer: function (courseID, semesterID, evalID, answers) {
			return $http.post(SERVER_URL + '/courses/' + courseID + '/' + semesterID + '/evaluations/' + evalID, answers);
		}
	};
}]);