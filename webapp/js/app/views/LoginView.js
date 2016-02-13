define(['jquery', 'backbone', 'bootstrap-dialog', 'underscore', 'bootstrap', 'datePicker'], function($, Backbone, BootstrapDialog){

	var LoginView = Backbone.View.extend({

		events: {
			
		},

		templateName: 'LoginTemplate',

		initialize: function(){
			this.render();
		},

		render: function(){
			var template = _.template(Core.templates[this.templateName]);
			this.$el.html(template());
		},

		cleanUpEvents: function(){

		}
	});

	return LoginView;

});