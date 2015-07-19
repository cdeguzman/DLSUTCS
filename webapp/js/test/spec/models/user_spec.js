define(['../../../app/models/UserModel', '../../../app/app', '../../../app/core'], function(UserModel, App, Core) {
  describe("User Login", function() {
	 
	var loginSuccess = false;  
	var loginFailSuccess = false;
	var testEmail = 'cdeguzman@katanatechworks.com';
	var testPassword = 'secret1234';
	var accountNotRegistered = false;
	function done(){}
	
	beforeEach(function(done) {
		Backbone.pubSub.on("loginNotification", recieveLoginNotification, this);
		Core.destroySession();
		if(loginSuccess){
			testPassword = "12348";
		}
		if(loginFailSuccess){
			testEmail = 'unregisteredaccount@katanatechworks.com';
			testPassword = "1234823";
		}
		this.userModel = new UserModel();
		var loginData = [{name:"email", value:testEmail},{name:"password", value:testPassword}];
		this.userModel.set("loginData", loginData);
		this.userModel.loginUser();
		var self = this;
		setTimeout(function(){
			done();
		}, 9000);
	}, 10000);
	  
    it("should have logged in", function() {
		expect(this.userModel.get("sessionId")).not.toBeUndefined();
		loginSuccess = true;
		done();
    });
	
    it("should not logged in using wrong password", function() {
		expect(this.userModel.get("sessionId")).toBeUndefined();
		loginFailSuccess = true;
		done();
    });
	
    it("should not logged in using unregistred account", function() {
		expect(accountNotRegistered).toBe(true);
		done();
    });
	
	afterEach(function(done) {
		Backbone.pubSub.off("loginNotification", recieveLoginNotification, this);
	   	done();
	});
	
	function recieveLoginNotification(resp){
		if(resp.status==="member_not_found"){
			accountNotRegistered = true;
		}
	}
	
	
  });
});