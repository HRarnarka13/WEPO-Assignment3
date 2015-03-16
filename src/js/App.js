angular.module('TeachingEvaluations', ['ngRoute']);

angular.module('TeachingEvaluations').config(['$routeProvider',
function ($routeProvider) {
	$routeProvider
		.when('/login', { templateUrl: 'src/views/login.html', controller: 'LoginController' })
		.when('/evaluations/:user', { templateUrl: 'src/views/evaluations.html', controller: 'EvaluationsController' })
		.when('/courses/:courseID/:semesterID/evaluations/:evalID', { templateUrl: 'src/views/evaluation.html', controller: 'EvaluationController' })
		.when('/admin/evaluations', { templateUrl: 'src/views/adminEvaluations.html', controller: 'AdminEvaluationsController' })
		.when('/admin/evaluation/:evalID', { templateUrl: 'src/views/adminEvaluation.html', controller: 'AdminEvaluationController' })
		.when('/admin/evaluationtemplates/:ID', { templateUrl: 'src/views/evaluationTemplate.html', controller: 'EvaluationTemplateController' })
		.when('/admin/newtemplate', { templateUrl: 'src/views/newTemplate.html', controller: 'NewTemplateController' })		
		.otherwise({
  			redirectTo: '/login'
		});
}]);