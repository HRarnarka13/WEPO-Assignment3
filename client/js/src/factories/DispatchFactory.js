angular.module('TeachingEvaluations').factory('Dispatch', [
	'$http',
	'SERVER_URL',
function ($http, SERVER_URL) {
	return {
		login: function (user) {
			return $http.post(SERVER_URL + '/login', user);
		},
		getEvaluations: function () {
			return $http.get(SERVER_URL + '/evaluations');
		},
		getMyEvaluations: function () {
			return $http.get(SERVER_URL + '/my/evaluations');
		},
		getMyEvaluation: function (courseID, semesterID, evalID) {
			return $http.get(SERVER_URL + '/courses/' + courseID + '/' + semesterID + '/evaluations/' + evalID);
		},
		getTeachers: function (courseID, semesterID) {
			return $http.get(SERVER_URL + '/courses/' + courseID + '/' + semesterID + '/teachers');
		},
		getEvaluation: function (evalID) {
			return $http.get(SERVER_URL + '/evaluations/' + evalID);
		},
		getEvaluationTemplates: function () {
			return $http.get(SERVER_URL + '/evaluationtemplates/');
		},
		getEvaluationTemplate: function (ID) {
			return $http.get(SERVER_URL + '/evaluationtemplates/' + ID);
		}
	};
}]);

// angular.module('TeachingEvaluations').constant("SERVER_URL", "http://dispatch.ru.is/h28/api/v1");
angular.module('TeachingEvaluations').constant("SERVER_URL", "http://dispatch.ru.is/demo/api/v1");