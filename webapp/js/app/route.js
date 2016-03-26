
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
	'views/StudentUserContainerView',
	'views/LoginView'
	], 

	function(Backbone, HeaderView, 
		HomeView, FooterView, FacultyRecordView, StudentRecordView, ThesisGroupView,
		RoomRecordView, HolidayRecordView, AdministrationPositionRecordView, GeneralAreaRecordView, SubAreaRecordView, 
		RankRecordView, CourseRecordView, CourseOfferingRecordView, FlowchartRecordView, GeneralScheduleView,
		SchoolYearView, StudentScheduleView, AdviserRosterView, PanelRosterView, ThesisEnrollmentView, ThesisScheduleView, BarcodeView,
		DefenseHistoryView, UpdateThesisGradeView, FacultyUserContainerView, StudentUserContainerView, LoginView){

		var ApplicationRouter = Backbone.Router.extend({

			views : [],

			routes:{
				""	: "login",
				"/"	: "login",
				"home"	: "home",
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
	   		this.loadHeaderFooterTemplate();
		},

		routeTo: function(route) {
			var isRoutingToSamePlace = (route == Backbone.history.fragment);
			if (isRoutingToSamePlace) {
				var path = eval("Core.router.routes."+route);
				eval("this."+path+"()");
			}else{
				Backbone.history.navigate(route, {trigger: true}); 
			}
		},

		loadHeaderFooterTemplate: function(){
			this.cleanView();
			this.loadView(new HeaderView({
				el: "#mainHeader",
			}));

			this.loadView(new FooterView({
				el: "#footer",
			}));
		},

		login : function(){
			this.cleanView();
			this.loadView(new LoginView({
				el: "#contentContainer",
			}));
			this.loadView(new FooterView({
				el: "#footer",
			}));
		},

		home : function(){
			this.loadHeaderFooterTemplate();
			this.loadView(new HomeView({
				el: "#contentContainer",
			}));
			Core.checkCredential();
		},

		facultyRecordView: function(){
			this.loadHeaderFooterTemplate();
			this.loadView(new FacultyRecordView({
				el: "#contentContainer",
				model: App.facultyModel
			}));
			Core.checkCredential();
		},

		studentRecordView: function(){
			this.loadHeaderFooterTemplate();
			this.loadView(new StudentRecordView({
				el: "#contentContainer",
			}));
			Core.checkCredential();
		},

		thesisGroupView: function(){
			this.loadHeaderFooterTemplate();
			this.loadView(new ThesisGroupView({
				el: "#contentContainer",
			}));
			Core.checkCredential();
		},

		roomRecordView: function(){
			this.loadHeaderFooterTemplate();
			this.loadView(new RoomRecordView({
				el: "#contentContainer",
			}));
			Core.checkCredential();
		},

		holidayRecordView: function(){
			this.loadHeaderFooterTemplate();
			this.loadView(new HolidayRecordView({
				el: "#contentContainer",
			}));
			Core.checkCredential();
		},

		administrationPositionRecordView: function(){
			this.loadHeaderFooterTemplate();
			this.loadView(new AdministrationPositionRecordView({
				el: "#contentContainer",
			}));
			Core.checkCredential();
		},

		generalAreaRecordView: function(){
			this.loadHeaderFooterTemplate();
			this.loadView(new GeneralAreaRecordView({
				el: "#contentContainer",
			}));
			Core.checkCredential();
		},

		subAreaRecordView: function(){
			this.loadHeaderFooterTemplate();
			this.loadView(new SubAreaRecordView({
				el: "#contentContainer",
			}));
			Core.checkCredential();
		},

		rankRecordView: function(){
			this.loadHeaderFooterTemplate();
			this.loadView(new RankRecordView({
				el: "#contentContainer",
			}));
			Core.checkCredential();
		},

		courseRecordView: function(){
			this.loadHeaderFooterTemplate();
			this.loadView(new CourseRecordView({
				el: "#contentContainer",
			}));
			Core.checkCredential();
		},

		courseOfferingRecordView: function(){
			this.loadHeaderFooterTemplate();
			this.loadView(new CourseOfferingRecordView({
				el: "#contentContainer"
			}));
			Core.checkCredential();
		},

		flowchartRecordView: function(){
			this.loadHeaderFooterTemplate();
			this.loadView(new FlowchartRecordView({
				el: "#contentContainer",
			}));
			Core.checkCredential();
		},

		generalScheduleView: function(){
			this.loadHeaderFooterTemplate();
			this.loadView(new GeneralScheduleView({
				el: "#contentContainer",
			}));
			Core.checkCredential();
		},

		schoolYearView: function(){
			this.loadHeaderFooterTemplate();
			this.loadView(new SchoolYearView({
				el: "#contentContainer",
			}));
			Core.checkCredential();
		},

		studentScheduleView: function(){
			this.loadHeaderFooterTemplate();
			this.loadView(new StudentScheduleView({
				el: "#contentContainer",
			}));
			Core.checkCredential();
		},

		adviserRosterView: function(){
			this.loadHeaderFooterTemplate();
			this.loadView(new AdviserRosterView({
				el: "#contentContainer",
			}));
			Core.checkCredential();
		},

		panelRosterView: function(){
			this.loadHeaderFooterTemplate();
			this.loadView(new PanelRosterView({
				el: "#contentContainer",
			}));
			Core.checkCredential();
		},

		thesisEnrollmentView: function(){	
			this.loadHeaderFooterTemplate();
			this.loadView(new ThesisEnrollmentView({
				el: "#contentContainer",
			}));
			Core.checkCredential();
		},

		thesisScheduleView: function(){
			this.loadHeaderFooterTemplate();
			this.loadView(new ThesisScheduleView({
				el: "#contentContainer",
			}));
			Core.checkCredential();
		},

		barcodeView: function(){	
			this.loadHeaderFooterTemplate();
			this.loadView(new BarcodeView({
				el: "#contentContainer",
			}));
			Core.checkCredential();
		},

		defenseHistoryView: function(){
			this.loadHeaderFooterTemplate();
			this.loadView(new DefenseHistoryView({
				el: "#contentContainer",
			}));
			Core.checkCredential();
		},

		updateThesisGradeView: function(){
			this.loadHeaderFooterTemplate();
			this.loadView(new UpdateThesisGradeView({
				el: "#contentContainer",
			}));
			Core.checkCredential();
		},
		
		facultyUserView: function(){
			this.loadHeaderFooterTemplate();
			this.loadView(new FacultyUserContainerView({
				el: "#contentContainer",
			}));
			Core.checkCredential();
		},
		
		studentUserView: function(){
			this.loadHeaderFooterTemplate();
			this.loadView(new StudentUserContainerView({
				el: "#contentContainer",
			}));
			Core.checkCredential();
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