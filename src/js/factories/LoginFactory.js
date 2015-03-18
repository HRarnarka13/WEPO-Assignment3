angular.module('TeachingEvaluations').factory('LoginFactory', [
	'$http',
	'SERVER_URL',
function ($http, SERVER_URL) {
	var username;
	return {
		login: function (user, pass) {
			return $http.post(SERVER_URL + '/login', {user: user, pass: pass});
		},
		getUser: function () {
			return username;
		},
		setUser: function (name) {
			username = name;
		}
	};
}]);