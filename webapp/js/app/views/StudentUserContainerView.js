define(['jquery', 'backbone', 'views/UserTabCategoryView',
        'views/student/UserInfoView',
        'views/student/ProjectStatusView',
        'views/student/ThesisGroupsView',
        'views/student/MiscView',
        'views/SearchView',
        'views/DRSView'], 
		function($, Backbone, UserTabCategoryView, 
				UserInfoView, ProjectStatusView,
				ThesisGroupsView, MiscView,
				SearchView, DRSView){

var StudentUserContainerView = Backbone.View.extend({

		templateName: 'StudentUserContainerTemplate',
		
		subViews: [],

		initialize: function(){
			var self = this;
			this.render();
		},

		render: function(){
			$(".navbar-header .navbar-left").remove();
			$(".navbar-header .navbar-right").remove();
			var template = _.template(Core.templates[this.templateName]);
			this.$el.html(template());
			
			this.subViews.push(new UserTabCategoryView({
				el: "#studentUserContainer",
				model: App.userTabCategoryModel,
				page: 'student'
			}));
			
			this.subViews.push(new UserInfoView({
				el: "#userInfo"
			}));
			
			this.subViews.push(new ProjectStatusView({
				el: "#projectStatus"
			}));
			
			this.subViews.push(new ThesisGroupsView({
				el: "#thesisGroups"
			}));
			
			this.subViews.push(new MiscView({
				el: "#misc"
			}));
			
			this.subViews.push(new SearchView({
				el: "#search"
			}));
			
			this.subViews.push(new DRSView({
				el: "#docRoute"
			}));
		},

		cleanUpEvents: function(){

		}
	});

	return StudentUserContainerView;

});