angular.module('TeachingEvaluations', ['ngRoute']);

angular.module('TeachingEvaluations').config(['$routeProvider',
function ($routeProvider) {
	$routeProvider
		.when('/login', { templateUrl: 'client/Views/login.html', controller: 'LoginController' })
		.otherwise({
  			redirectTo: '/login'
		});
}]);