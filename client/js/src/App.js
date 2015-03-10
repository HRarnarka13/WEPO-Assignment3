angular.module('TeachingEvaluations', ['ngRoute']);

angular.module('TeachingEvaluations').config(['$routeProvider',
function ($routeProvider) {
	$routeProvider
		.when('/login', { templateUrl: 'client/views/login.html', controller: 'LoginController' })
		.when('/evaluations/:user', { templateUrl: 'client/views/evaluations.html', controller: 'EvaluationsController' })
		.otherwise({
  			redirectTo: '/login'
		});
}]);