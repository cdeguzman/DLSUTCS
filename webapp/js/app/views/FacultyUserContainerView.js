define(['jquery', 'backbone', 'bootstrap-dialog', 
        'views/UserTabCategoryView', 
        'views/faculty/UserInfoView', 
        'views/faculty/TableView',
        'views/SearchView',
        'views/DRSView',
        'jscookie'], 
		function($, Backbone, BootstrapDialog, 
				UserTabCategoryView, UserInfoView, TableView, SearchView, DRSView, Cookie){

var FacultyUserContainerView = Backbone.View.extend({

		templateName: 'FacultyUserContainerTemplate',
		
		subViews: [],

		initialize: function(){
			this.userid = Cookie.get('userid');
			this.scode = '1';
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
				page: 'faculty',

			}));
			
			this.subViews.push(new UserInfoView({
				el: "#userInfo",
				model: App.userTabCategoryModel,
				page: 'faculty',
				userid: this.userid,
				scode: this.scode
			}));
			
			this.subViews.push(new TableView({
				el: "#imptDate",
				tableId: "importantDatesTable",
				tableTitle: "Important Dates",
				model: App.userModel
			}));
			
			this.subViews.push(new TableView({
				el: "#defenseSched",
				tableId: "defenseScheduleTable",
				tableTitle: "Defense Schedules",
				model: App.userModel
			}));
			
			this.subViews.push(new TableView({
				el: "#verdictStatus",
				tableId: "verdictStatusTable",
				tableTitle: "Verdict Status",
				model: App.userModel
			}));
			
			this.subViews.push(new TableView({
				el: "#thesisGroups",
				tableId: "thesisGroupsTable",
				tableTitle: "Thesis Groups",
				model: App.userModel
			}));
			
			this.subViews.push(new SearchView({
				el: "#search"
			}));
			
			this.subViews.push(new DRSView({
				el: "#docRoute",
				page: 'faculty',
				userid: this.userid
			}));

		},

		cleanUpEvents: function(){

		}
	});

	return FacultyUserContainerView;

});