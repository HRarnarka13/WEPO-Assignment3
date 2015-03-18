describe('EvaluationsController', function () {
	
	beforeEach(module('TeachingEvaluations'));

	var $controller;

	var mock = {
		getMyEvaluations: function() {
			return {
				success: function() {
					return [{
						CourseID: "T-427-WEPO",
						CourseName: "Vefforritun II",
						CourseNameEN: "Web Programming II",
						Semester: "20151",
						TemplateName: "prufa1"
					},
					{
						CourseID: "T-501-FMAL",
						CourseName: "Forritunarmál",
						CourseNameEN: "Programming languages",
						Semester: "20151",
						TemplateName: "prufa1"
					}];
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
		$scope = {
			courses: {
				course : {
					CourseID: "",
					CourseName: "",
					CourseNameEN: "",
					Semester: "" 
				}
			}
    	};
    	spyOn(mock, 'getMyEvaluations').and.callThrough();

    	$controller = $controller('EvaluationsController', { 
			$scope: $scope,
			AdminFactory: mock,
			$rootScope: $rootScope,
			$location : $location,
		});

		
	});


	it("should request a list of evaluations", function(){

		// expect($scope.isRegistered()).toHaveBeenCalled();

	});

});
	