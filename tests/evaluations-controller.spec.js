describe('EvaluationsController', function () {
	beforeEach(module('TeachingEvaluations'));
	//var courses=[];

	/*var mock = {
		getMyEvaluations: function() {
			return {
				success: function() {
					var course = {
						CourseID: "T-427-WEPO",
						CourseName: "Vefforritun II",
						CourseNameEN: "Web Programming II",
						Semester: "20141"
					}
					courses.push(course);
					courses.Evaluations.push({});
				}
			}
		}
	}*/

	beforeEach(inject(function (_$controller_, _$rootScope_, _$location_) {
		$controller = _$controller_;
		$rootScope = _$rootScope_;
		$location = _$location_;
	}));

	var $scope, $controller, $rootScope, $location;

	/*beforeEach(function() {
		$scope = {
			courses: {
				course : {
					CourseID: "",
					CourseName: "",
					CourseNameEN: "",
					Semester: "" 
				}
			}
			//courses.push(course);
			//courses.Evaluations.push({});
    	};*/

		//spyOn(mock, 'getMyEvaluations').and.callThrough();
		//spyOn($location, 'path');


	//});

	it("should request a list of evaluations", function(){
		/*$scope.courses=[];
		$scope.course = {
			CourseID: "T-427-WEPO",
			CourseName: "Vefforritun II",
			CourseNameEN: "Web Programming II",
			Semester: "20141"
		}*/
		//$scope.courses.push($scope.course);
		//$scope.courses.Evaluations.push({});

		//controller.getMyEvaluations();

		var $scope = {};
		$controller = $controller('EvaluationsController', { 
			$scope: $scope,
			//AdminFactory: mock,
			$rootScope: $rootScope,
			$location : $location,
		});

		$scope.courses = [{CourseID: "A", CourseName: "T", Semester: "1"}, {CourseID:"B", CourseName:"E", Semester:"1"}];
		$scope.course = {CourseID: "A", CourseName: "T", Semester: "1"};



		$scope.isRegistered;

		expect($scope.isRegistered).toHaveBeenCalled();

	});
	//var fakeEvaluations = function(){

	//}

});
	