define(['backbone', 'jscookie'], function(Backbone, Cookie){
	var UserModel = Backbone.Model.extend({
		defaults: {
			name: "Johnston, Jeff",
			title: "MD. Pulmonology"
		},
	
		initialize: function(){
			this.set('forgetPasswordUrl', location.origin+location.pathname+App.resetPasswordRoute);
			this.set('sessionId', Cookie.get('sessionCookie'));
			this.set('email', Cookie.get('loggedInUserEmail'));
		},
	
		loginUser: function(){
			var self = this;
			$.getJSON( "data/UserLogin.json", function( data ) {
			 	if(data.username === this.get('loginData').email
			 		&& data.password === this.get('loginData').password) {
			 		alert('success~!')
			 	}
			
			});
		},
	
		changePassword: function(){
			Core.log.debug('Changing Password...');
			var self = this;
			Core.request({
				url: App.passwordChangeUrl,
				headers: {'Session-Id' : Cookie.get('sessionCookie')},
				data: this.get('passwordData'),
				type: 'PUT',
				success: function(resp){
					Backbone.pubSub.trigger("changePasswordNotification", resp);
					if(resp.status==="success"){
						Core.log.debug('Password Changed');
					}
				},
				fail: function(resp){
				
				}
			});
		},
		
		forgetPassword: function(){
			Core.log.debug('Forget Password...');
			var self = this;
			var forgetPasswordCallbackUrl = this.get("forgetPasswordUrl") + "/" + this.get("passwordData")[0].value;
			this.get("passwordData")[1].value = forgetPasswordCallbackUrl;
			Core.request({
				url: App.passwordForgetUrl,
				data: this.get('passwordData'),
				type: 'PUT',
				success: function(resp){
					Backbone.pubSub.trigger("forgetPasswordNotification", resp);
					if(resp.status==="success"){
						Core.log.debug('Password Forgotten');
					}
				},
				fail: function(resp){
				
				}
			});
		},
		
		changeForgetPassword: function(){
			Core.log.debug('Change Forget Password...');
			var self = this;
			Core.request({
				url: App.passwordResetUrl,
				data: self.get('passwordChangeForgetData'),
				type: 'POST',
				success: function(resp){
					Backbone.pubSub.trigger("changeForgetPasswordNotification", resp);
					if(resp.status==="success"){
						Core.log.debug('Password Changed');
						Backbone.pubSub.trigger("changeForgetPasswordSuccess", resp);
					}
				},
				fail: function(resp){
	
				}
			});
		}
	});
	
	return UserModel;
	
});