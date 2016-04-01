
define(['jquery', 'backbone', 'bootstrap', 'datePicker', 'bootstrap-dialog'], function($, Backbone, BootstrapDialog){

	var DefenseHistoryView = Backbone.View.extend({

		templateName: 'DefenseHistoryTemplate',

		initialize: function(){
			this.render();
		},

		render: function(){
			var template = _.template(Core.templates[this.templateName]);
			this.$el.html(template());
		},

		renderDefenses: function(){

		},

		renderDefenseGeneralInformation: function(){

		},

		cleanUpEvents: function(){

		}
	});

return DefenseHistoryView;

});