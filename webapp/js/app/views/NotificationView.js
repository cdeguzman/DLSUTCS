/**
	NotificationView.js
**/
define(['jquery', 'backbone', 'bootstrap-dialog'], function($, Backbone, BootstrapDialog){
	
	//@Todo Refactor to lessen listners
	var NotificationView = Backbone.View.extend({
	
		templateName: 'NotificationTemplate',
	
		notificationDivClass: ".notificationDiv",
	
		initialize: function(){
			var self = this;
			//Close buttons automatically clears all inputs on modals
			$("#mainContainer").on("click", "button", function(e){
				if($(e.currentTarget).attr("data-dismiss") || $(e.currentTarget).attr("data-target")){
					self.cleanUpNofication();
					self.clearForm($(e.currentTarget).attr("data-form-id"));
				}else if($(e.currentTarget).attr("data-add")){
					Backbone.pubSub.trigger("cleanUpNotification", this);
				}
			});
			
			$("#mainContainer").on("keyup", "input", function(e){
				self.clearInlineNotification();
				self.cleanUpNofication();
			});
			
			$("#mainContainer").on("click", "input", function(e){
				self.clearInlineNotification();
				self.cleanUpNofication();
			});
			//If there is a notification to be rendered
			Backbone.pubSub.on('hasNotification', this.render, this);
		
			//Recieved notifications
			Backbone.pubSub.on('loginNotification', this.showLoginNotification, this); 
			Backbone.pubSub.on('changePasswordNotification', this.showChangePasswordNotification, this);
			Backbone.pubSub.on('changePasswordMismatch', this.showChangePasswordNotification, this);
			Backbone.pubSub.on('changeForgetPasswordMismatch', this.showChangeForgetPasswordNotification, this);
			Backbone.pubSub.on('changeForgetPasswordNotification', this.showChangeForgetPasswordNotification, this);

			
			Backbone.pubSub.on('forgetPasswordEmailMismatch', this.showForgetPasswordNotification, this);
			Backbone.pubSub.on('forgetPasswordNotification', this.showForgetPasswordNotification, this);
		
			Backbone.pubSub.on('patientEmailAlreadyExists', this.showPatientNotification, this);
			Backbone.pubSub.on('newPatientPasswordMismatch', this.showPatientNotification, this);
			Backbone.pubSub.on('addPatientNotification', this.showPatientNotification, this);
			Backbone.pubSub.on('editPatientNotification', this.showPatientEditNotification, this);
			Backbone.pubSub.on('deletePatientSuccess', this.showPatientDeleteNotification, this);
			Backbone.pubSub.on('editPatientPasswordMismatch', this.showPatientEditNotification, this);

			Backbone.pubSub.on('physicianEmailAlreadyExists', this.showPhysicianNotification, this);
			Backbone.pubSub.on('newPhysicianPasswordMismatch', this.showPhysicianNotification, this);
			Backbone.pubSub.on('addPhysicianNotification', this.showPhysicianNotification, this);
			Backbone.pubSub.on('editPhysicianNotification', this.showPhysicianEditNotification, this);
			Backbone.pubSub.on('deletePhysicianSuccess', this.showPhysicianDeleteNotification, this);
			Backbone.pubSub.on('editPhysicianPasswordMismatch', this.showPhysicianEditNotification, this);
			
			Backbone.pubSub.on("inlineNotification", this.hasInlineFormNotification, this);
			Backbone.pubSub.on("clearInlineNotification", this.clearInlineNotification, this);
			
			Backbone.pubSub.on("sessionExpired", this.showSessionExpired, this);
			Backbone.pubSub.on("internalError", this.showInternalError, this);
			Backbone.pubSub.on("requestTimeout", this.showRequestTimeout, this);
			Backbone.pubSub.on("notAuthorized", this.showNotAuthorized, this);
			Backbone.pubSub.on("logoUploaded", this.showLogoUploaded, this);
			
			Backbone.pubSub.on("csvExport", this.showCSVExport, this);
		
			//Clean up notifications
			Backbone.pubSub.on('cleanUpNotification', this.cleanUpNofication, this);
		},
	
		render: function(){
			//before rendering a notification, look if a form needs to be cleared
			if(this.model.get('activeNotification').resetFormId){
				this.clearForm(this.model.get('activeNotification').resetFormId);
			}
			var template = _.template(Core.templates[this.templateName]);
			$(this.el).html(template({"data":this.model.get('activeNotification')}));
		},
	
	
		showLoginNotification: function(notification){
			this.el = "#loginPanel " + this.notificationDivClass;
			this.model.registerNotification(notification, "login");
		},
	
		showChangePasswordNotification: function(notification){
			this.el = "#changePasswordModal " + this.notificationDivClass;
			this.model.registerNotification(notification, "changePassword");
		},
		
		showChangeForgetPasswordNotification: function(notification){
			this.el = "#changeForgetPasswordModal " + this.notificationDivClass;
			this.model.registerNotification(notification, "resetPassword");
		},
		
		showForgetPasswordNotification: function(notification){
			this.el = "#forgetPasswordModal " + this.notificationDivClass;
			this.model.registerNotification(notification, "forgetPassword");
		},
	
		showPatientNotification: function(notification){
			this.el = "#addPatientForm " + this.notificationDivClass;
			this.model.registerNotification(notification, "addpatient");
		},
	
		showPatientEditNotification: function(notification){
			this.el = "#editPatientForm " + this.notificationDivClass;
			this.model.registerNotification(notification, "editpatient");
		},
		
		showPatientDeleteNotification: function(notification){
			BootstrapDialog.alert(_.find(App.notifications, {page: 'popup', status:'patient_delete_success'}).message);
		},
	
		showPhysicianNotification: function(notification){
			this.el = "#addPhysicianForm " + this.notificationDivClass;
			this.model.registerNotification(notification, "addphysician");
		},
		
		showPhysicianEditNotification: function(notification){
			this.el = "#editPhysicianForm " + this.notificationDivClass;
			this.model.registerNotification(notification, "editphysician");
		},
		
		showPhysicianDeleteNotification: function(notification){
			BootstrapDialog.alert(_.find(App.notifications, {page: 'popup', status:'physician_delete_success'}).message);
		},
		
		showSessionExpired: function(){
		    BootstrapDialog.show({
		              message: _.find(App.notifications, {page: 'popup', status:'session_expired'}).message,
		              buttons: [{
		                  label: 'OK',
		                  cssClass: 'btn-primary',
		                  action: function(dialog){
							 dialog.close();
		                     Backbone.history.navigate("logout", {trigger:true});
		                  }
		              }]
		          });	
		},
		
		showInternalError: function(resp){
			BootstrapDialog.alert(_.find(App.notifications, {page: 'popup', status:'internal_error'}).message + " (error code: " +resp.code+ ")");
		},
		
		showRequestTimeout: function(){
			BootstrapDialog.alert(_.find(App.notifications, {page: 'popup', status:'request_timeout'}).message);
		},
		
		showNotAuthorized: function(){
			BootstrapDialog.alert(_.find(App.notifications, {page: 'popup', status:'not_authorized'}).message);
		},
		
		showCSVExport: function(downloadLink, isSafari){
			BootstrapDialog.alert(_.find(App.notifications, {page: 'popup', status:isSafari ? 'download_csv_safari' : 'download_csv'}).message+" "+ downloadLink);
		},
		
		showLogoUploaded: function(){
			BootstrapDialog.alert(_.find(App.notifications, {page: 'popup', status:'logo_uploaded'}).message);
		},
	
		cleanUpNofication: function(){
			$(this.notificationDivClass).html('');
		},
	
		clearForm: function(formId){
			$("#"+formId).trigger("reset");
		},
		
		
		//---------------Inline form notification---------------------//
		
		hasInlineFormNotification: function(inlineNotifications){
			_.each(inlineNotifications, function(notification){
				var name = notification.name;
				var status = notification.status;
				var message = _.find(App.notifications, {page: 'inline', status: notification.status, name: notification.name}).message;
				$('div[data-input-name="'+name+'"]').append('<div class="col-md-4 errorMessage has-error"><label class="control-label">'+message+'</label></div>');
				$('div[data-input-name="'+name+'"]').addClass("has-error");
			});
		},
		
		clearInlineNotification: function(){
			$(".has-error").removeClass("has-error");
			$(".errorMessage").remove();
		},
	
		cleanUpEvents: function(){
			Backbone.pubSub.off('hasNotification', this.render, this);
			Backbone.pubSub.off('loginNotification', this.showLoginNotification, this);
			Backbone.pubSub.off('changePasswordNotification', this.showChangePasswordNotification, this);
			Backbone.pubSub.off('changePasswordMismatch', this.showChangePasswordNotification, this);
			Backbone.pubSub.off('cleanUpNotification', this.cleanUpNofication, this);
			Backbone.pubSub.off('changeForgetPasswordMismatch', this.showChangeForgetPasswordNotification, this);
			Backbone.pubSub.off('changeForgetPasswordNotification', this.showChangeForgetPasswordNotification, this);

			Backbone.pubSub.off('forgetPasswordEmailMismatch', this.showForgetPasswordNotification, this);
			Backbone.pubSub.off('forgetPasswordNotification', this.showForgetPasswordNotification, this);
		
			Backbone.pubSub.off('patientEmailAlreadyExists', this.showPatientNotification, this);
			Backbone.pubSub.off('newPatientPasswordMismatch', this.showPatientNotification, this);
			Backbone.pubSub.off('addPatientNotification', this.showPatientNotification, this);
			Backbone.pubSub.off('editPatientNotification', this.showPatientEditNotification, this);
			Backbone.pubSub.off('deletePatientSuccess', this.showPatientDeleteNotification, this);
			Backbone.pubSub.off('editPatientPasswordMismatch', this.showPatientEditNotification, this);

			Backbone.pubSub.off('physicianEmailAlreadyExists', this.showPhysicianNotification, this);
			Backbone.pubSub.off('newPhysicianPasswordMismatch', this.showPhysicianNotification, this);
			Backbone.pubSub.off('addPhysicianNotification', this.showPhysicianNotification, this);
			Backbone.pubSub.off('editPhysicianNotification', this.showPhysicianEditNotification, this);
			Backbone.pubSub.off('deletePhysicianSuccess', this.showPhysicianDeleteNotification, this);
			Backbone.pubSub.off('editPhysicianPasswordMismatch', this.showPhysicianEditNotification, this);
			
			Backbone.pubSub.off("inlineNotification", this.hasInlineFormNotification, this);
			Backbone.pubSub.off("clearInlineNotification", this.clearInlineNotification, this);
			
			Backbone.pubSub.off("sessionExpired", this.showSessionExpired, this);
			Backbone.pubSub.off("internalError", this.showInternalError, this);
			Backbone.pubSub.off("requestTimeout", this.showRequestTimeout, this);
			Backbone.pubSub.off("notAuthorized", this.showNotAuthorized, this);
			Backbone.pubSub.off("logoUploaded", this.showLogoUploaded, this);
			
			$("#mainContainer").off("keyup", "input");
			$("#mainContainer").off("click", "button");
			$("#mainContainer").off("click", "input");
		}
	
	});
	
	return NotificationView;
	
});