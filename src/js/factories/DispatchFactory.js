angular.module('TeachingEvaluations').factory('Dispatch', [
	'$http',
	'SERVER_URL',
function ($http, SERVER_URL) {
	return {
		login: function (user, pass) {
			return $http.post(SERVER_URL + '/login', {user: user, pass: pass});
		},
		// Admin functions
		getEvaluations: function () {
			return $http.get(SERVER_URL + '/evaluations');
		},
		getEvaluation: function (evalID) {
			return $http.get(SERVER_URL + '/evaluations/' + evalID);
		},
		getEvaluationTemplates: function () {
			return $http.get(SERVER_URL + '/evaluationtemplates/');
		},
		getEvaluationTemplate: function (ID) {
			return $http.get(SERVER_URL + '/evaluationtemplates/' + ID);
		},
		postEvaluation: function (ID, startDate, endDate) {
			return $http.post(SERVER_URL + '/evaluations', {TemplateID: ID, StartDate: startDate, EndDate: endDate});
		},
		postEvaluationTemplate: function (title, titleEN, introText, introTextEN, courseQuestions, teacherQuestions) {
			return $http.post(SERVER_URL + '/evaluationtemplates/', {Title: title, TitleEN: titleEN, IntroText: introText, IntroTextEN: introTextEN, CourseQuestions: courseQuestions, TeacherQuestions: teacherQuestions});
		},
		// User functions
		getMyEvaluations: function () {
			return $http.get(SERVER_URL + '/my/evaluations');
		},
		getMyEvaluation: function (courseID, semesterID, evalID) {
			return $http.get(SERVER_URL + '/courses/' + courseID + '/' + semesterID + '/evaluations/' + evalID);
		},
		getTeachers: function (courseID, semesterID) {
			return $http.get(SERVER_URL + '/courses/' + courseID + '/' + semesterID + '/teachers');
		}
	};
}]);

//angular.module('TeachingEvaluations').constant("SERVER_URL", "http://dispatch.ru.is/h28/api/v1");
angular.module('TeachingEvaluations').constant("SERVER_URL", "http://dispatch.ru.is/demo/api/v1");