/**
	LoginView.js
*/
define(['jquery', 'backbone', 'bootstrap'], function($, Backbone){
	
	var HomeView = Backbone.View.extend({
	
		templateName: 'HomeTemplate',
	
		initialize: function(){
			var self = this;
			this.render();
		},
	
		render: function(){
			var template = _.template(Core.templates[this.templateName]);
			this.$el.html(template());
		},

		cleanUpEvents: function(){
			this.model.off('loginSuccess', this.loginTransition, this);
		}
	});
	
	return HomeView;
	
});