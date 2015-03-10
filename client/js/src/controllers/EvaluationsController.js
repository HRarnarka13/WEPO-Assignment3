angular.module("TeachingEvaluations").controller('EvaluationsController', [
	'$scope',
	'$location',
	'$rootScope',
	'$routeParams',
	'$http',
function ($scope, $location, $rootScope, $routeParams, $http) { 
	$scope.username = $routeParams.user;
}]);