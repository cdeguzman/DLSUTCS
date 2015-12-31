define(['jquery', 'backbone'], function($, Backbone){

var ThesisGroupsView = Backbone.View.extend({

		templateName: 'ThesisGroupsTemplate',
		
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

	return ThesisGroupsView;

});