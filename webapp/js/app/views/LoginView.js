/**
	LoginView.js
*/
define(['jquery', 'backbone'], function($, Backbone){
	
	var LoginView = Backbone.View.extend({
	
		templateName: 'LoginTemplate',
	
		initialize: function(){
			$("#mainContainer").addClass("adjust_container");
			var self = this;
			this.render();
			this.model.on('loginSuccess', this.loginTransition, this);
			$('#loginForm').submit(function(event){
			    event.preventDefault();
				self.login();
			});
		},
	
		render: function(){
			Core.hideSpinner({});
			var template = _.template(Core.templates[this.templateName]);
			this.$el.html(template({"data":this.model.toJSON()}));
		},
	
	
		login: function(){
			var formData = $('#loginForm').serializeArray();
			this.model.set('loginData', formData),
			this.model.loginUser();
		},
	
		loginTransition: function(){
			App.resetUserPreferences();
			Core.log.debug('Logging in to admin...');
			Backbone.history.navigate('patients', {trigger:true}); //trigger redirect route
		},
	
		cleanUpEvents: function(){
			this.model.off('loginSuccess', this.loginTransition, this);
		}
	});
	
	return LoginView;
	
});