angular.module('TeachingEvaluations', ['ngRoute']);

angular.module('TeachingEvaluations').config(['$routeProvider',
function ($routeProvider) {
	$routeProvider
		.when('/login', { templateUrl: 'client/views/login.html', controller: 'LoginController' })
		.when('/evaluations/:user', { templateUrl: 'client/views/evaluations.html', controller: 'EvaluationsController' })
		.when('/courses/:courseID/:semesterID/evaluations/:evalID', { templateUrl: 'client/views/evaluation.html', controller: 'EvaluationController' })
		.otherwise({
  			redirectTo: '/login'
		});
}]);