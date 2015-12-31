
define([
	'backbone',
	'views/HeaderView',
	'views/HomeView',
	'views/FooterView',
	'views/FacultyRecordView',
	'views/StudentRecordView',
	'views/ThesisGroupView',
	'views/RoomRecordView',
	'views/HolidayRecordView',
	'views/AdministrationPositionRecordView',
	'views/GeneralAreaRecordView',
	'views/SubAreaRecordView',
	'views/RankRecordView',
	'views/CourseRecordView',
	'views/CourseOfferingRecordView',
	'views/FlowchartRecordView',
	'views/GeneralScheduleView',
	'views/SchoolYearView',
	'views/StudentScheduleView',
	'views/AdviserRosterView',
	'views/PanelRosterView',
	'views/ThesisEnrollmentView',
	'views/ThesisScheduleView',
	'views/BarcodeView',
	'views/DefenseHistoryView',
	'views/UpdateThesisGradeView',
	'views/FacultyUserContainerView',
	'views/StudentUserContainerView'
	], 

	function(Backbone, HeaderView, 
		HomeView, FooterView, FacultyRecordView, StudentRecordView, ThesisGroupView,
		RoomRecordView, HolidayRecordView, AdministrationPositionRecordView, GeneralAreaRecordView, SubAreaRecordView, 
		RankRecordView, CourseRecordView, CourseOfferingRecordView, FlowchartRecordView, GeneralScheduleView,
		SchoolYearView, StudentScheduleView, AdviserRosterView, PanelRosterView, ThesisEnrollmentView, ThesisScheduleView, BarcodeView,
		DefenseHistoryView, UpdateThesisGradeView, FacultyUserContainerView, StudentUserContainerView){

		var ApplicationRouter = Backbone.Router.extend({

			views : [],

			routes:{
				"" : "home",
				"/" : "home",
				"faculty" : "facultyRecordView",
				"student" : "studentRecordView",
				"thesis" : "thesisGroupView",
				"room" : "roomRecordView",
				"holiday" : "holidayRecordView",
				"administrative" : "administrationPositionRecordView",
				"generalArea" : "generalAreaRecordView",
				"subArea" : "subAreaRecordView",
				"rankRecord" : "rankRecordView",
				"course" : "courseRecordView",
				"courseOffering" : "courseOfferingRecordView",
				"flowchart" : "flowchartRecordView",
				"general" : "generalScheduleView",
				"schoolyear" : "schoolYearView",
				"studentsch" : "studentScheduleView",
				"adviser" : "adviserRosterView",
				"panel" : "panelRosterView",
				"enrollment" : "thesisEnrollmentView",
				"schedule" : "thesisScheduleView",
				"barcode" : "barcodeView",
				"defense" : "defenseHistoryView",
				"update" : "updateThesisGradeView",
				"user/faculty": "facultyUserView",
				"user/student": "studentUserView"
			},

	   //Admin only routes
	   adminRoutes: [

	   ],
	   

	   initialize: function(){
	   		App.initializeModels();
		},

		routeTo: function(route) {
			var isRoutingToSamePlace = (route == Backbone.history.fragment);
			if (isRoutingToSamePlace){
				var path = eval("Core.router.routes."+route);
				eval("this."+path+"()");
			}else{
				Backbone.history.navigate(route, {trigger: true}); 
			}
		},

		loadHeaderFooterTemplate: function(){
			this.loadView(new HeaderView({
				el: "#mainHeader",
			}));

			this.loadView(new FooterView({
				el: "#footer",
			}));
		},

		home : function(){
			this.cleanView();
			App.initializeModels();
			this.loadHeaderFooterTemplate();
			this.loadView(new HomeView({
				el: "#contentContainer",
			}));
		},

		facultyRecordView: function(){
			this.cleanView();
			this.loadHeaderFooterTemplate();
			this.loadView(new FacultyRecordView({
				el: "#contentContainer",
				model: App.facultyModel
			}));
		},

		studentRecordView: function(){
			this.cleanView();
			this.loadHeaderFooterTemplate();
			this.loadView(new StudentRecordView({
				el: "#contentContainer",
			}));
		},

		thesisGroupView: function(){
			this.cleanView();
			this.loadHeaderFooterTemplate();
			this.loadView(new ThesisGroupView({
				el: "#contentContainer",
			}));
		},

		roomRecordView: function(){
			this.cleanView();
			this.loadHeaderFooterTemplate();
			this.loadView(new RoomRecordView({
				el: "#contentContainer",
			}));
		},

		holidayRecordView: function(){
			this.cleanView();
			this.loadHeaderFooterTemplate();
			this.loadView(new HolidayRecordView({
				el: "#contentContainer",
			}));
		},

		administrationPositionRecordView: function(){
			this.cleanView();
			this.loadHeaderFooterTemplate();
			this.loadView(new AdministrationPositionRecordView({
				el: "#contentContainer",
			}));
		},

		generalAreaRecordView: function(){
			this.cleanView();
			this.loadHeaderFooterTemplate();
			this.loadView(new GeneralAreaRecordView({
				el: "#contentContainer",
			}));
		},

		subAreaRecordView: function(){
			this.cleanView();
			this.loadHeaderFooterTemplate();
			this.loadView(new SubAreaRecordView({
				el: "#contentContainer",
			}));
		},

		rankRecordView: function(){
			this.cleanView();
			this.loadHeaderFooterTemplate();
			this.loadView(new RankRecordView({
				el: "#contentContainer",
			}));
		},

		courseRecordView: function(){
			this.cleanView();
			this.loadHeaderFooterTemplate();
			this.loadView(new CourseRecordView({
				el: "#contentContainer",
			}));
		},

		courseOfferingRecordView: function(){
			this.cleanView();
			this.loadHeaderFooterTemplate();
			this.loadView(new CourseOfferingRecordView({
				el: "#contentContainer",
			}));
		},

		flowchartRecordView: function(){
			this.cleanView();
			this.loadHeaderFooterTemplate();
			this.loadView(new FlowchartRecordView({
				el: "#contentContainer",
			}));
		},

		generalScheduleView: function(){
			this.cleanView();
			this.loadHeaderFooterTemplate();
			this.loadView(new GeneralScheduleView({
				el: "#contentContainer",
			}));
		},

		schoolYearView: function(){
			this.cleanView();
			this.loadHeaderFooterTemplate();
			this.loadView(new SchoolYearView({
				el: "#contentContainer",
			}));
		},

		studentScheduleView: function(){
			this.cleanView();
			this.loadHeaderFooterTemplate();
			this.loadView(new StudentScheduleView({
				el: "#contentContainer",
			}));
		},

		adviserRosterView: function(){
			this.cleanView();
			this.loadHeaderFooterTemplate();
			this.loadView(new AdviserRosterView({
				el: "#contentContainer",
			}));
		},

		panelRosterView: function(){
			this.cleanView();
			this.loadHeaderFooterTemplate();
			this.loadView(new PanelRosterView({
				el: "#contentContainer",
			}));
		},

		thesisEnrollmentView: function(){
			this.cleanView();
			this.loadHeaderFooterTemplate();
			this.loadView(new ThesisEnrollmentView({
				el: "#contentContainer",
			}));
		},

		thesisScheduleView: function(){
			this.cleanView();
			this.loadHeaderFooterTemplate();
			this.loadView(new ThesisScheduleView({
				el: "#contentContainer",
			}));
		},

		barcodeView: function(){
			this.cleanView();
			this.loadHeaderFooterTemplate();
			this.loadView(new BarcodeView({
				el: "#contentContainer",
			}));
		},

		defenseHistoryView: function(){
			this.cleanView();
			this.loadHeaderFooterTemplate();
			this.loadView(new DefenseHistoryView({
				el: "#contentContainer",
			}));
		},

		updateThesisGradeView: function(){
			this.cleanView();
			this.loadHeaderFooterTemplate();
			this.loadView(new UpdateThesisGradeView({
				el: "#contentContainer",
			}));
		},
		
		facultyUserView: function(){
			this.cleanView();
			this.loadHeaderFooterTemplate();
			this.loadView(new FacultyUserContainerView({
				el: "#contentContainer",
			}));
		},
		
		studentUserView: function(){
			this.cleanView();
			this.loadHeaderFooterTemplate();
			this.loadView(new StudentUserContainerView({
				el: "#contentContainer",
			}));
		},


		loadView: function(view){
			this.views.push(view);
		},

		cleanView: function(){
			_.each(this.views, function(view){
				view.close();
			});
			this.views = [];
		}

	});

return ApplicationRouter;

});