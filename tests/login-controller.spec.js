describe('LoginController', function () {
	
	beforeEach(module('TeachingEvaluations'));

	var $controller, $location, $rootScope;

	var mockLogin = {
		login: function (user, pass) {
			return {
				success: function(fn){
					if (pass !== '' && (user === 'arnarka13' || user === 'admin')) {
						var role;
						if (user === 'admin') {
							role = 'admin';
						} else {
							role = 'student';
						}
						fn( { User: { Role: role } } );
					}
					return {
						error: function(errorFn) {
							if (user !== 'arnarka13' && user !== 'admin') {
								errorFn();
							}
						}
					};
				}
			};
		}
	};

	beforeEach(inject(function (_$controller_, _$rootScope_, _$location_) {
		$controller = _$controller_;
		$rootScope = _$rootScope_;
		$location = _$location_;
	}));

	describe('$scope.login', function () {
		var $scope, controller;

		beforeEach(function() {
			$scope =  {
				username: '',
				password: '',
				errorMessage: '',
				loginForm: {
					$valid: true
				}
			};

			spyOn(mockLogin, 'login').and.callThrough();
			spyOn($location, 'path');

			controller = $controller('LoginController', { 
				$scope: $scope,
				LoginFactory: mockLogin,
				$rootScope: $rootScope,
				$location : $location,
			});
		});

		// the tests :
		it('should fail the login because of invalid user', function() {
			$scope.username = 'rassiprump';
			$scope.password = '123456';
			console.log($scope.login);
			console.log($scope.login());
			$scope.login();

			expect($scope.failToLogin).toBeTruthy();
			expect(mockLogin.login).toHaveBeenCalled();
			expect($location.path).not.toHaveBeenCalled();
		});

		it('should succeed the login, admin login', function() {
			$scope.username = 'admin';
			$scope.password = '123456';

			$scope.login();

			expect(mockLogin.login).toHaveBeenCalled();
			expect($scope.failToLogin).not.toBeTruthy();
			expect($scope.role).toMatch('admin');
			expect($location.path).toHaveBeenCalled();
		});
		it('should succeed the login, student login', function() {
			$scope.username = 'arnarka13';
			$scope.password = '123456';

			$scope.login();

			expect(mockLogin.login).toHaveBeenCalled();
			expect($scope.failToLogin).not.toBeTruthy();
			expect($scope.role).toMatch('student');
			expect($location.path).toHaveBeenCalled();
		});
		it('should fail the login, invalid form', function() {
			$scope.$valid = false;
			expect(mockLogin.login).not.toHaveBeenCalled();
		});
	});
});