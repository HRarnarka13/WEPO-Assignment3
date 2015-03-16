angular.module('TeachingEvaluations').controller('NewTemplateController', [
	'$scope',
	'$location',
	'$rootScope',
	'$routeParams',
	'$http',
	'Dispatch',
function ($scope, $location, $rootScope, $routeParams, $http, Dispatch) {
	$scope.createTemplate = function () {
		console.log("createTemplate");
	};

}]);