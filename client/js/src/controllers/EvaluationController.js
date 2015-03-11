angular.module("TeachingEvaluations").controller('EvaluationsController', [
	'$scope',
	'$location',
	'$rootScope',
	'$routeParams',
	'$http',
	'Dispatch',
function ($scope, $location, $rootScope, $routeParams, $http, Dispatch) { 
	console.log("heey");
	$scope.username = $routeParams.user;

}]);