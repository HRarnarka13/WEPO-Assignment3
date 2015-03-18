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

	beforeEach(inject(function (_$controller_, _$location_, _$rootScope_) {
        $controller = _$controller_;
        $location = _$location_;
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
    }));

	describe('$$scope.login', function () {
        var $scope, controller;
        beforeEach(function() {
            // Constructing a fake enviroment
            $scope = {
            	loginForm: { $valid: true },
            	username: '',
            	password: ''
            };

            // Spying on functions that should or shouldn't be called
            spyOn(mockLogin, 'login').and.callThrough();
            spyOn($location, 'path');

            // Constructing the controller
            controller = $controller('LoginController', {
                $scope: $scope,
                LoginFactory: mockLogin,
                $location : $location,
                $rootScope : $rootScope
            });
        });

		// the tests :
		it('should fail the login because of invalid user', function() {
			$scope.username = 'rassiprump';
			$scope.password = '123456';

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