define(['jquery', 'backbone', 'bootstrap-dialog', 
        'views/UserTabCategoryView', 
        'views/faculty/UserInfoView', 
        'views/faculty/ImportantDatesView',
        'views/faculty/DefenseScheduleView',
        'views/faculty/VerdictStatusView',
        'views/faculty/ProjectStatusView',
        'views/faculty/ThesisGroupsView',
        'views/faculty/MiscView',
        'views/SearchView',
        'views/DRSView'], 
		function($, Backbone, BootstrapDialog, 
				UserTabCategoryView, UserInfoView, ImportantDatesView, 
				DefenseScheduleView, VerdictStatusView, ProjectStatusView,
				ThesisGroupsView, MiscView, SearchView, DRSView){

var FacultyUserContainerView = Backbone.View.extend({

		templateName: 'FacultyUserContainerTemplate',
		
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
				el: "#facultyUserContainer",
				model: App.userTabCategoryModel,
				page: 'faculty'
			}));
			
			this.subViews.push(new UserInfoView({
				el: "#userInfo"
			}));
			
			this.subViews.push(new ImportantDatesView({
				el: "#imptDate"
			}));
			
			this.subViews.push(new DefenseScheduleView({
				el: "#defenseSched"
			}));
			
			this.subViews.push(new VerdictStatusView({
				el: "#verdictStatus"
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

	return FacultyUserContainerView;

});