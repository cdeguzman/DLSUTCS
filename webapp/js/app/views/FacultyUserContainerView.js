define(['jquery', 'backbone', 'bootstrap-dialog', 'views/UserTabCategoryView','bootstrap', 'datePicker'], 
		function($, Backbone, BootstrapDialog, UserTabCategoryView){

var FacultyUserContainerView = Backbone.View.extend({

		templateName: 'FacultyUserContainerTemplate',
		
		subViews: [],

		initialize: function(){
			var self = this;
			this.render();
		},

		render: function(){
			var template = _.template(Core.templates[this.templateName]);
			this.$el.html(template());
			
			this.subViews.push(new UserTabCategoryView({
				el: "#facultyUserContainer",
				model: App.userTabCategoryModel,
				page: 'faculty'
			}));
			
		},

		cleanUpEvents: function(){

		}
	});

	return FacultyUserContainerView;

});