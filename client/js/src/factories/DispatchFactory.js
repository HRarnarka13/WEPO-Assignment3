angular.module('TeachingEvaluations').factory('Dispatch', [
	'$http',
	'SERVER_URL',
function ($http, SERVER_URL) {
	return {
		login: function (user) {
			return $http.post(SERVER_URL + '/login', user);
		},
		getMyEvaluations: function () {
			return $http.get(SERVER_URL + '/my/evaluations');
		},
		getEvaluation: function (courseID, semesterID, evalID) {
			return $http.get(SERVER_URL + '/courses/' + courseID + '/' + semesterID + '/evaluations/' + evalID);
		},
		getTeachers: function (courseID, semesterID) {
			return $http.get(SERVER_URL + '/courses/' + courseID + '/' + semesterID + '/teachers');
		}
	};
}]);

angular.module('TeachingEvaluations').constant("SERVER_URL", "http://dispatch.ru.is/demo/api/v1");