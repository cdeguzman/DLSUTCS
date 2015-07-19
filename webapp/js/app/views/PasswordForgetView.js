/**
	PasswordChangeView.js
*/
define(['jquery', 'backbone'], function($, Backbone){
	
	var PasswordForgetView = Backbone.View.extend({
	
		templateName: 'PasswordForgetTemplate',

		initialize: function(options){
			this.page = options.page;
			var self = this;
			this.render();
			$('#forgetPasswordForm').submit(function(event){
			    event.preventDefault();
				self.forgetPassword();
			});
			$("#mainContainer").on("click", "#showForgetPasswordAdminBtn", function(e){
			    self.showForgetPassword();
			});
		},
	
		render: function(){
			var template = _.template(Core.templates[this.templateName]);
			this.$el.append(template({"data":this.model.toJSON()}));
		},
		
		showForgetPassword: function(){
			var email = "";
			if(this.page==="physician"){
				email = App.physicianModel.get("currentPhysicianInfo").email;
			}else if(this.page==="patient"){
				email = App.patientModel.get("currentPatientInfo").email;
			}
			$("#forgetEmail, #forgetConfirmEmail").attr('readonly', true);
			$("#forgetEmail, #forgetConfirmEmail").val(email);
			$('#forgetPasswordModal').modal({
				backdrop: 'static'
			});
		},
	
		forgetPassword: function(){
			if($("#changeNewpassword").val()!==$("#changeConfirmPassword").val()){
				Backbone.pubSub.trigger("changeForgetPasswordMismatch",{status: "password_mismatch"});
			}else{
				var formData = $('#forgetPasswordForm').serializeArray();
				this.model.set('passwordData', formData);
				this.model.forgetPassword();
			}
		},
		
		cleanUpEvents: function(){
			var self = this;
			$("#mainContainer").off("click", "#showForgetPasswordAdminBtn");
		}
	});
	
	return PasswordForgetView;
	
});