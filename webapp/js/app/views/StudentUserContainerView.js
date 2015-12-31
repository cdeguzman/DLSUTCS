define(['jquery', 'backbone', 'views/UserTabCategoryView'], 
		function($, Backbone, UserTabCategoryView){

var StudentUserContainerView = Backbone.View.extend({

		templateName: 'StudentUserContainerTemplate',
		
		subViews: [],

		initialize: function(){
			var self = this;
			this.render();
		},

		render: function(){
			var template = _.template(Core.templates[this.templateName]);
			this.$el.html(template());
			
			this.subViews.push(new UserTabCategoryView({
				el: "#studentUserContainer",
				model: App.userTabCategoryModel,
				page: 'student'
			}));
		},

		cleanUpEvents: function(){

		}
	});

	return StudentUserContainerView;

});