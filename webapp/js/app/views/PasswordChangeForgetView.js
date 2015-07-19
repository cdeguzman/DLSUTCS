/**
	PasswordChangeForgetView.js
*/
define(['jquery', 'backbone'], function($, Backbone){
	
	var PasswordChangeForgetView = Backbone.View.extend({
	
		templateName: 'PasswordChangeForgetTemplate',
	
		initialize: function(options){
			
			Backbone.pubSub.on("changeForgetPasswordSuccess", this.redirectToLogin, this);
			
			this.model.set('forgetEmail', options.email);
			var self = this;
			this.render();
			$('#changeForgetPasswordForm').submit(function(event){
			    event.preventDefault();
				self.changeForgetPassword();
			});
		},
	
		render: function(){
			var template = _.template(Core.templates[this.templateName]);
			this.$el.append(template({"data":this.model.toJSON()}));
			
			$('#changeForgetPasswordModal').modal({
				backdrop: 'static'
			});
		},
	
		changeForgetPassword: function(){
			if($("#changeNewpassword").val()!==$("#changeConfirmPassword").val()){
				Backbone.pubSub.trigger("changeForgetPasswordMismatch",{status: "password_mismatch"});
			}else{
				var formData = $('#changeForgetPasswordForm').serializeArray();
				formData.push({name :"email", value: this.model.get('forgetEmail')});
				this.model.set('passwordChangeForgetData', formData);
				this.model.changeForgetPassword();
			}
		},
		
		redirectToLogin: function(){
			setTimeout(function(){
				location.href = "index.html";
			}, 3000);
		},
		
		cleanUpEvents: function(){
			Backbone.pubSub.off("changeForgetPasswordSuccess", this.redirectToLogin, this);
		}
	});
	
	return PasswordChangeForgetView;
	
});