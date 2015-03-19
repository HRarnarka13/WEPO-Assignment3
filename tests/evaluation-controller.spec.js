describe('EvaluationController', function () {

	var $controller, $location, $rootScope;

	beforeEach(module('TeachingEvaluations'));

	var mock = {
		getMyEvaluation: function () {
			return {
				success: function (fn) {
					var data = {
						IntroText: "IntroText",
						Title: "Title",
						CourseQuestions: [],
						TeacherQuestions: []
					};
					fn(data);
					return {
						error: function (errorfn) {
							errorfn();
						}
					};
				}
			};
		},
		getTeachers: function () {
			return {
				success: function (fn) {
					var data = {
						Username: "Dabs",
						Email: "dabs@ru.is"
					};
					fn(data);
					return {
						error: function (errorfn) {
							errorfn();
						}
					};
				}
			};
		},
	}
	

	beforeEach(inject(function (_$controller_, _$location_, _$rootScope_) {
        $controller = _$controller_;
        $location = _$location_;
        $rootScope = _$rootScope_;
    }));

    beforeEach(function() {
		$scope = {
			username: 'lala',
			cID: 1,
			semesterID: 1,
			evalID: 1
		};

    	spyOn(mock, 'getMyEvaluation').and.callThrough();
    	spyOn(mock, 'getTeachers').and.callThrough();

    	$controller = $controller('EvaluationController', { 
			$scope: $scope,
			AdminFactory: mock,
			$rootScope: $rootScope,
			$location : $location,
		});
	});

	it("should request a list of evaluations", function(){
		mock.getMyEvaluation();
		mock.getTeachers();
		console.log($scope);
		// expect($scope.introText).toMatch('IntroText');
	});

});