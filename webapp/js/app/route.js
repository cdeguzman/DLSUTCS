
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
	'views/UpdateThesisGradeView'
	], 

	function(Backbone, HeaderView, 
		HomeView, FooterView, FacultyRecordView, StudentRecordView, ThesisGroupView,
		RoomRecordView, HolidayRecordView, AdministrationPositionRecordView, GeneralAreaRecordView, SubAreaRecordView, 
		RankRecordView, CourseRecordView, CourseOfferingRecordView, FlowchartRecordView, GeneralScheduleView,
		SchoolYearView, StudentScheduleView, AdviserRosterView, PanelRosterView, ThesisEnrollmentView, ThesisScheduleView, BarcodeView,
		DefenseHistoryView, UpdateThesisGradeView){

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
				"update" : "updateThesisGradeView"
			},

	   //Admin only routes
	   adminRoutes: [

	   ],
	   

	   initialize: function(){
	   	var self = this;
		   //Initialize application models
		   App.initializeModels();
		   //Initialize Route behavior
		   this.on("route", function(route, params) {

		   });

		   this.loadView(new HeaderView({
		   	el: "#mainHeader",
		   }));

		   this.loadView(new FooterView({
		   	el: "#footer",
		   }));
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

		home : function(){
			this.cleanView();
			App.initializeModels();


			this.loadView(new HeaderView({
				el: "#mainHeader",
			}));

			this.loadView(new HomeView({
				el: "#contentContainer",
			}));

			this.loadView(new FooterView({
				el: "#footer",
			}));
		},

		facultyRecordView: function(){
			this.loadView(new FacultyRecordView({
				el: "#contentContainer",
			}));
		},

		studentRecordView: function(){
			this.loadView(new StudentRecordView({
				el: "#contentContainer",
			}));
		},

		thesisGroupView: function(){
			this.loadView(new ThesisGroupView({
				el: "#contentContainer",
			}));
		},

		roomRecordView: function(){
			this.loadView(new RoomRecordView({
				el: "#contentContainer",
			}));
		},

		holidayRecordView: function(){
			this.loadView(new HolidayRecordView({
				el: "#contentContainer",
			}));
		},

		administrationPositionRecordView: function(){
			this.loadView(new AdministrationPositionRecordView({
				el: "#contentContainer",
			}));
		},

		generalAreaRecordView: function(){
			this.loadView(new GeneralAreaRecordView({
				el: "#contentContainer",
			}));
		},

		subAreaRecordView: function(){
			this.loadView(new SubAreaRecordView({
				el: "#contentContainer",
			}));
		},

		rankRecordView: function(){
			this.loadView(new RankRecordView({
				el: "#contentContainer",
			}));
		},

		courseRecordView: function(){
			this.loadView(new CourseRecordView({
				el: "#contentContainer",
			}));
		},

		courseOfferingRecordView: function(){
			this.loadView(new CourseOfferingRecordView({
				el: "#contentContainer",
			}));
		},

		flowchartRecordView: function(){
			this.loadView(new FlowchartRecordView({
				el: "#contentContainer",
			}));
		},

		generalScheduleView: function(){
			this.loadView(new GeneralScheduleView({
				el: "#contentContainer",
			}));
		},

		schoolYearView: function(){
			this.loadView(new SchoolYearView({
				el: "#contentContainer",
			}));
		},

		studentScheduleView: function(){
			this.loadView(new StudentScheduleView({
				el: "#contentContainer",
			}));
		},

		adviserRosterView: function(){
			this.loadView(new AdviserRosterView({
				el: "#contentContainer",
			}));
		},

		panelRosterView: function(){
			this.loadView(new PanelRosterView({
				el: "#contentContainer",
			}));
		},

		thesisEnrollmentView: function(){
			this.loadView(new ThesisEnrollmentView({
				el: "#contentContainer",
			}));
		},

		thesisScheduleView: function(){
			this.loadView(new ThesisScheduleView({
				el: "#contentContainer",
			}));
		},

		barcodeView: function(){
			this.loadView(new BarcodeView({
				el: "#contentContainer",
			}));
		},

		defenseHistoryView: function(){
			this.loadView(new DefenseHistoryView({
				el: "#contentContainer",
			}));
		},

		updateThesisGradeView: function(){
			this.loadView(new UpdateThesisGradeView({
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