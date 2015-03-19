describe('LoginController', function () {
	
	beforeEach(module('TeachingEvaluations'));

	var $controller;

	var mockLogin = {
		username: '',
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
		},
		setUser: function (user) {
			return {
				username: name
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
			$scope = {
				username: '',
				password: '',
				loginForm: {
					$valid: undefined 
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

		// the tests (5):

		it('should fail the login because of invalid user', function() {
			$scope.username = 'rassiprump';
			$scope.password = '123456';
			$scope.loginForm.$valid = true;
			$scope.login();

			expect($scope.failToLogin).toBeTruthy();
			expect(mockLogin.login).toHaveBeenCalled();
			expect($location.path).not.toHaveBeenCalled();
		});

		it('should succeed the login, admin login', function() {
			$scope.username = 'admin';
			$scope.password = '123456';
			$scope.loginForm.$valid = true;
			$scope.login();

			expect(mockLogin.login).toHaveBeenCalled();
			expect($scope.failToLogin).not.toBeTruthy();
			expect($scope.role).toMatch('admin');
			expect($location.path).toHaveBeenCalled();
		});

		it('should succeed the login, student login', function() {
			$scope.username = 'arnarka13';
			$scope.password = '123456';
			$scope.loginForm.$valid = true;
			$scope.login();

			expect(mockLogin.login).toHaveBeenCalled();
			expect($scope.failToLogin).not.toBeTruthy();
			expect($scope.role).toMatch('student');
			expect($location.path).toHaveBeenCalled();
		});

		it('should fail the login because the form is not valid', function() {
			$scope.loginForm.$valid = false;
			expect(mockLogin.login).not.toHaveBeenCalled();
		});

		it('should fail the login because the form is not valid', function() {
			$scope.loginForm.$valid = false;
			expect(mockLogin.login).not.toHaveBeenCalled();
			expect($location.path).not.toHaveBeenCalled();
		});
	});
});