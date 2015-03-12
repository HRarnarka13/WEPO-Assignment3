angular.module('TeachingEvaluations', ['ngRoute']);

angular.module('TeachingEvaluations').config(['$routeProvider',
function ($routeProvider) {
	$routeProvider
		.when('/login', { templateUrl: 'client/views/login.html', controller: 'LoginController' })
		.when('/evaluations/:user', { templateUrl: 'client/views/evaluations.html', controller: 'EvaluationsController' })
		.when('/courses/:courseID/:semesterID/evaluations/:evalID', { templateUrl: 'client/views/evaluation.html', controller: 'EvaluationController' })
		.when('/admin/evaluations', { templateUrl: 'client/views/adminEvaluations.html', controller: 'AdminEvaluationsController' })
		.when('/admin/evaluation/:evalID', { templateUrl: 'client/views/adminEvaluation.html', controller: 'AdminEvaluationController' })
		.when('/admin/evaluationtemplates/:ID', { templateUrl: 'client/views/evaluationTemplate.html', controller: 'EvaluationTemplateController' })
		.otherwise({
  			redirectTo: '/login'
		});
}]);