/**
	HeaderView.js
*/
define(['jquery', 'backbone', 'jscookie', 'jquery-ajax-form', 'bootstrap', 'underscore'], function($, Backbone, Cookie){
	
	var HeaderView = Backbone.View.extend({
	
		templateName: 'HeaderTemplate',
	
		events:{

		},
	
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
	
	return HeaderView;
	
});