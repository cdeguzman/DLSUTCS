/**
	PasswordChangeView.js
*/
define(['jquery', 'backbone'], function($, Backbone){
	
	var PasswordChangeView = Backbone.View.extend({
	
		templateName: 'PasswordChangeTemplate',
	
		initialize: function(){
			var self = this;
			this.render();
			$('#changePasswordForm').submit(function(event){
			    event.preventDefault();
				self.changePassword();
			});
		},
	
		render: function(){
			var template = _.template(Core.templates[this.templateName]);
			this.$el.append(template({"data":this.model.toJSON()}));
		},
	
		changePassword: function(){
			if($("#changeNewpassword").val()!==$("#changeConfirmPassword").val()){
				Backbone.pubSub.trigger("changePasswordMismatch",{status: "password_mismatch"});
			}else{
				var formData = $('#changePasswordForm').serializeArray();
				formData.push({name :"email", value: $.cookie('loggedInUserEmail')});
				this.model.set('passwordData', formData);
				this.model.changePassword();
			}
		}
	});
	
	return PasswordChangeView;
	
});