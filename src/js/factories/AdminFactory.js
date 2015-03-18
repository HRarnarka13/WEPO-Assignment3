angular.module('TeachingEvaluations').factory('AdminFactory', [
	'$http',
	'SERVER_URL',
function ($http, SERVER_URL) {
	return {
		// Admin functions
		getEvaluations: function () {
			return $http.get(SERVER_URL + '/evaluations');
		},
		getEvaluation: function (evalID) {
			return $http.get(SERVER_URL + '/evaluations/' + evalID);
		},
		getEvaluationResults: function (course, semester, evalID) {
			return $http.get(SERVER_URL + '/courses/' + course + '/' + semester + '/evaluations/' + evalID);
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
			var data = {
				Title: title,
				TitleEN: titleEN, 
				IntroText: introText, 
				IntroTextEN: introTextEN, 
				CourseQuestions: courseQuestions, 
				TeacherQuestions: teacherQuestions
			};
			return $http.post(SERVER_URL + '/evaluationtemplates/', data);
		}
	};
}]);