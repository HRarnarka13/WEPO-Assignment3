describe("LoginController", function () {
	
	var fakeUsers = {
		getUsers : function () {
			return [{user: 'arnarka13', pass: '123456'}];
		}
	};

	beforeEach(function() {
		spyOn(fakeUsers, 'getUsers').andReturn[{user: 'arnarka13', pass: '123456'}];
	});

});