define(['jquery', 'backbone'], function($, Backbone){

var DRSView = Backbone.View.extend({

		templateName: 'DRSTemplate',
		
		subViews: [],

		initialize: function(){
			var self = this;
			this.render();
		},

		render: function(){
			var template = _.template(Core.templates[this.templateName]);
			this.$el.html(template());
			
		},

		cleanUpEvents: function(){

		}
	});

	return DRSView;

});