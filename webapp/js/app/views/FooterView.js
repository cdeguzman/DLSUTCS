/**
	FooterView.js
*/
define(['jquery', 'backbone'], function($, Backbone){
	
	var FooterView = Backbone.View.extend({
	
		templateName: 'FooterTemplate',
	
		initialize: function(){
			this.render();
		},
	
		render: function(){
			var template = _.template(Core.templates[this.templateName]);
			this.$el.html(template());
		}
	
	});
	
	return FooterView;
	
});