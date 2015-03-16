describe('LoginController', function () {
	
	beforeEach(module('TeachingEvaluations'));

	var $controller;

	var mockLogin = {
		login: function (user, pass) {
			return {
				success: function(fn){
					console.log("yeah!");
					if (pass !== '' && (user === 'arnarka13' || user === 'admin')) {
						var role;
						if (user === 'admin') {
							role = 'admin';
						} else {
							role = 'student';
						}
						fn({ User : {Role : role} });
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

	beforeEach(inject(function (_$controller_, _$rootScope_) {
		$controller = _$controller_;
		$rootScope = _$rootScope_;
	}));

	describe('$scope.login', function () {
		var $scope, controller;

		beforeEach(function() {
			$scope = {
				loginForm: { $valid: true },
				user: {
					name: '',
					pass: ''
				}
         };

			spyOn(mockLogin, "login").and.callThrough();

			controller = $controller('LoginController', { 
				$scope: $scope,
				// getur gert villu
				Dispatch: mockLogin,
				$rootScope: $rootScope
			});
		});

		// the tests :
		it('should fail the login because of invalid user', function() {
            $scope.user.name = 'rassiprump';
            $scope.user.pass = '123456';

            $scope.login();

            expect($scope.failToLogin).toBeTruthy();
            expect(mockLogin.login).toHaveBeenCalled();
            // expect($location.path).not.toHaveBeenCalled();
      });

      it('should success the login because of admin login', function() {
            $scope.user.name = 'admin';
            $scope.user.pass = '123456';

            $scope.login();

            expect(mockLogin.login).toHaveBeenCalled();
            // expect($scope.failToLogin).not.toBeTruthy();
            // expect($rootScope.data).toBeDefined();
            // expect($location.path).not.toHaveBeenCalled();
      });
	});
});