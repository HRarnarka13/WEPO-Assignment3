describe('EvaluationsController', function () {
	
	beforeEach(module('TeachingEvaluations'));

	var $controller;

	var mock = {
		getMyEvaluations: function() {
			return {
				success: function(fn) {
					data = [{
						CourseID: "T-427-WEPO",
						CourseName: "Vefforritun II",
						CourseNameEN: "Web Programming II",
						Semester: "20151",
						TemplateName: "prufa1"
					}];
					fn (data);
					return {
						error: function (errorfn) {
							errorfn();
						}
					};
				}
			}
		}
	}

	beforeEach(inject(function (_$controller_, _$rootScope_, _$location_) {
		$controller = _$controller_;
		$rootScope = _$rootScope_;
		$location = _$location_;
	}));

	beforeEach(function() {
		$scope = {};

    	spyOn(mock, 'getMyEvaluations').and.callThrough();

    	$controller = $controller('EvaluationsController', { 
			$scope: $scope,
			AdminFactory: mock,
			$rootScope: $rootScope,
			$location : $location,
		});
	});

	it("should request a list of evaluations", function(){
		mock.getMyEvaluations();
		expect($scope.courses).toBeDefined();
		expect($scope.courses.length).toBe(0);

		// expect($scope.isRegistered()).toHaveBeenCalled();
	});

});
	