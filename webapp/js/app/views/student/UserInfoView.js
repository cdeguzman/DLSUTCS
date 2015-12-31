define(['jquery', 'backbone'], function($, Backbone){

var UserInfoView = Backbone.View.extend({

		templateName: 'StudentUserInfoTemplate',
		
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

	return UserInfoView;

});