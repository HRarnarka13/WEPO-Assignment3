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
}]);;angular.module('TeachingEvaluations').controller('AdminEvaluationController', [
	'$scope',
	'$location',
	'$rootScope',
	'$routeParams',
	'$http',
	'Dispatch',
function ($scope, $location, $rootScope, $routeParams, $http, Dispatch) {


	Dispatch.getEvaluation($routeParams.evalID).success(function (data) {
		console.log(data);
	});


}]);;angular.module('TeachingEvaluations').controller('AdminEvaluationsController', [
	'$scope',
	'$location',
	'$rootScope',
	'$routeParams',
	'$http',
	'Dispatch',
function ($scope, $location, $rootScope, $routeParams, $http, Dispatch) {

	// Get evaluations
	Dispatch.getEvaluations().success(function (data) {
		// console.log(data);
		$scope.evaluations = data;
	});

	// Get evaluation templates
	Dispatch.getEvaluationTemplates().success(function (data) {
		console.log(data);
		$scope.templates = data;
	});

}]);;angular.module('TeachingEvaluations').controller('EvaluationController', [
	'$scope',
	'$location',
	'$rootScope',
	'$routeParams',
	'$http',
	'Dispatch',
function ($scope, $location, $rootScope, $routeParams, $http, Dispatch) { 
	$scope.username = $routeParams.user;
	$scope.cID = $routeParams.courseID;
	$scope.semesterID = $routeParams.semesterID;
	$scope.evalID = $routeParams.evalID;

	Dispatch.getMyEvaluation($scope.cID, $scope.semesterID, $scope.evalID).success(function (data) {
		console.log(data);
		$scope.introText = data.IntroText;
		$scope.title = data.Title;
		$scope.courseQuestions = data.CourseQuestions;
		$scope.teacherQuestions = data.TeacherQuestions;
		console.log($scope.courseQuestions);
	});

	Dispatch.getTeachers($scope.cID, $scope.semesterID).success(function (data) {
		console.log(data);
		$scope.teachers = data;
	});
    
    $scope.submitAnswers = function () {
        if($scope.evaluationForm.$valid){
            console.log('Answers:');
            console.log($scope.evaluationForm);
        }
        console.log($scope.evaluationForm);
    };
	
}]);;angular.module('TeachingEvaluations').controller('EvaluationTemplateController', [
	'$scope',
	'$location',
	'$rootScope',
	'$routeParams',
	'$http',
	'Dispatch',
function ($scope, $location, $rootScope, $routeParams, $http, Dispatch) {
	$scope.showQuestion = false;
	$scope.showEvaluation = false;
	Dispatch.getEvaluationTemplate($routeParams.ID).success(function (data) {
		$scope.template = data;
		console.log('EvaluationTemplateController');
		console.log(data);

		$scope.newQuestion = function (){
			console.log("newQuestion");
		};
		/*$scope.addQuestion = function(questionType, text, answerType){
			if(questionType === "teacherQuestion"){
				data.TeacherQuestions
			}
			else if(questionType === "courseQuestion"){
				data.CourseQuestions
			}
		};*/
	});

	$scope.createEvaluation = function (){
		console.log("Before dispatch");
		var start = $scope.startDate.toISOString();
		var end = $scope.endDate.toISOString();
		Dispatch.postEvaluation($routeParams.ID, start, end).success(function (data){
			$location.path('/admin/evaluations/');
		});
	};

	$scope.toggle = function(){
		$scope.showQuestion = !$scope.showQuestion;
	};
	$scope.toggle2 = function(){
		$scope.showEvaluation = !$scope.showEvaluation;
	};

	
}]);;angular.module("TeachingEvaluations").controller('EvaluationsController', [
	'$scope',
	'$location',
	'$rootScope',
	'$routeParams',
	'$http',
	'Dispatch',
function ($scope, $location, $rootScope, $routeParams, $http, Dispatch) { 
	$scope.username = $routeParams.user;
	$scope.courses = []; // Array of avaible courses to evaluate

	Dispatch.getMyEvaluations().success(function (data) {
		for (var i = 0; i < data.length; i++) {
			if (!isRegistered(data[i].CourseID)) {
				var course = {
					CourseID: data[i].CourseID,
					CourseName: data[i].CourseName,
					Semester: data[i].Semester,
					Evaluations: []
				};
				$scope.courses.push(course);
			}
			for (var j = 0; j < $scope.courses.length; j++) {
				if($scope.courses[j].CourseID === data[i].CourseID){
					$scope.courses[j].Evaluations.push(data[i]);
				}
			}
		}
	});

	function isRegistered (course) {
		for (var i = $scope.courses.length - 1; i >= 0; i--) {
			if ($scope.courses[i].CourseID === course) {
				return true;
			}
		}
		return false;
	}
}]);;angular.module("TeachingEvaluations").controller('LoginController', [
	'$scope',
	'$location',
	'$rootScope',
	'$routeParams',
	'$http',
	'Dispatch',
function ($scope, $location, $rootScope, $routeParams, $http, Dispatch) {
	$scope.errorMessage = '';
	$scope.username 	= '';
	$scope.password 	= '';

	$scope.login = function () {
		if($scope.loginForm.$valid) {
			Dispatch.login($scope.username, $scope.password)
				.success(function (data) {
					$scope.failToLogin = false;
					$http.defaults.headers.common.Authorization = "Basic " + data.Token;
					$scope.role = data.User.Role;
					if($scope.role === 'admin') {
						$location.path('/admin/evaluations/');
					} else {
						$location.path('/evaluations/' + $scope.username);
					}
				})
				.error(function() {
					$scope.errorMessage = 'Username or password incorrect!';
					$scope.failToLogin = true;
				});
		}
	};
}]);;angular.module('TeachingEvaluations').controller('NewTemplateController', [
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

}]);;angular.module("TeachingEvaluations").directive('evaluationQuestion', function() {
	return {
		restrict: 'E',
		require: '^form',
		templateUrl: 'src/views/evaluationQuestion.html',
		scope: {
			question: '='
		},
		link : function (scope) {
			console.log(scope.question);
		}
	};
});;angular.module('TeachingEvaluations').factory('Dispatch', [
	'$http',
	'SERVER_URL',
function ($http, SERVER_URL) {
	return {
		login: function (user, pass) {
			return $http.post(SERVER_URL + '/login', {user: user, pass: pass});
		},
		// Admin functions
		getEvaluations: function () {
			return $http.get(SERVER_URL + '/evaluations');
		},
		getEvaluation: function (evalID) {
			return $http.get(SERVER_URL + '/evaluations/' + evalID);
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
		/*postEvaluationTemplates: function (ID, title, titleEN, introText, introTextEN, courseQuestions, teacherQuestions) {
			return $http.post(SERVER_URL + '/evaluationtemplates/', {ID: ID, Title: title, TitleEN: titleEN, IntroText: introText, IntroTextEN: introTextEn, CourseQuestions: courseQuestions, TeacherQuestions: teacherQuestions});
		},*/
		// User functions
		getMyEvaluations: function () {
			return $http.get(SERVER_URL + '/my/evaluations');
		},
		getMyEvaluation: function (courseID, semesterID, evalID) {
			return $http.get(SERVER_URL + '/courses/' + courseID + '/' + semesterID + '/evaluations/' + evalID);
		},
		getTeachers: function (courseID, semesterID) {
			return $http.get(SERVER_URL + '/courses/' + courseID + '/' + semesterID + '/teachers');
		}
	};
}]);

// angular.module('TeachingEvaluations').constant("SERVER_URL", "http://dispatch.ru.is/h28/api/v1");
angular.module('TeachingEvaluations').constant("SERVER_URL", "http://dispatch.ru.is/demo/api/v1");