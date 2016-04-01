
define(['jquery', 'backbone', 'bootstrap', 'datePicker', 'bootstrap-dialog'], function($, Backbone, BootstrapDialog){

	var ThesisEnrollmentView = Backbone.View.extend({

		templateName: 'ThesisEnrollmentTemplate',

		events: {
			'change #coursetobetakenlist': 'renderSections',
			'change #sectionlist': 'renderEnrolledStudents',
			'click button#enrollstudent, button#enroll': 'enrollStudent',
			'click button#unenroll': 'unenrollStudent'
		},

		initialize: function(){
			var self = this;
			$('#schoolyear,#term').on('change',function(e){
				self.renderSpecializations();
			});
			this.render();
		},

		render: function(){
			var template = _.template(Core.templates[this.templateName]);
			this.$el.html(template());

			this.renderSpecializations();
		},

		renderSpecializations: function(){
			var self = this;
			var req = {
				url: App.getSpecializationUrl,
				dataType: 'JSON', 
				success: function(res){
					var target = $('#specialization');
					target.html('<option values="all">[all]</option>');
					var tmp = '<% _.each(specializations, function(r){ %>\
						<option value="<%=r.code%>"><%=r.name%></option>\
					<% }); %>';
					target.append(_.template(tmp)({specializations:res}));
					self.renderFlowcharts();
				}
			};
			Core.request(req);
		},

		renderFlowcharts: function(){
			var self = this;
			var req = {
				url: App.getFlowchartListUrl,
				dataType: 'JSON',
				success: function(res){
					var target = $('#flowchart');
					target.html('<option values="all">[all]</option>');
					var tmp = '<% _.each(flowcharts, function(r){ %>\
						<option value="<%=r.version%>"><%=r.name%></option>\
					<% }); %>';
					target.append(_.template(tmp)({flowcharts:res}));
					self.renderCourses();
				}
			};
			Core.request(req);
		},

		renderCourses: function(){
			var self = this;
			var req = {
				url: App.getCourseListUrl,
				dataType: 'JSON',
				success: function(res){
					var target = $('#coursetobetakenlist');
					var tmp = '<% _.each(courses, function(r){ %>\
						<option><%=r.code%></option>\
					<% }); %>';
					target.html(_.template(tmp)({courses:res}));
					self.renderSections();
				}
			};
			Core.request(req);
		},

		renderSections: function(){
			var code = $('#coursetobetakenlist option:selected').val();
			var startsy = $('#schoolyear option:selected').data('start');
			var endsy = parseInt(startsy) + 1;
			var term = $('#term option:selected').val();
			var self = this;
			var req = {
				url: App.getCourseSectionUrl,
				dataType: 'JSON',
				data: {
					code: code,
					start_sy: startsy,
					end_sy: endsy,
					term: term
				},
				success: function(res){
					var target = $('#sectionlist');
					var tmp = '<% _.each(sections, function(r){ %>\
						<option><%=r.section%></option>\
					<% }); %>';
					target.html(_.template(tmp)({sections:res}));
					self.renderEnrolledStudents();
				}
			};
			Core.request(req);
		},

		renderEnrolledStudents: function(){
			var self = this;
			var startsy = $('#schoolyear option:selected').data('start');
			var endsy = parseInt(startsy) + 1;
			var term = $('#term option:selected').val();
			var coursecode = $('#coursetobetakenlist option:selected').val();
			var section = $('#sectionlist option:selected').val();
			var enrollmentcode = 2;

			var req = {
				url: App.getEnrolledStudentsUrl,
				dataType: 'JSON',
				data: {
					start_sy: startsy,
					end_sy: endsy,
					term: term,
					course_code: coursecode,
					section: section,
					enrollment_code: enrollmentcode
				},
				success: function(res){
					var target = $('#classlist');
					var template = '<% _.each(students, function(s){ %>\
						<option value="<%=s.id%>"><%=s.studentName%></option>\
					<% }); %>';
					target.html(_.template(template)({students:res}));
					self.renderStudents();
				}
			};
			Core.request(req);
		},

		renderStudents: function(){
			var req = {
				url: App.getStudentListUrl,
				dataType: 'JSON',
				success: function(res){
					var enrolled = $('#classlist option').map(function(s){return $(this).text()});
					var unenrolled = _.reject(res, function(r){
						var fullname = r.lname + ", " + r.fname + " " + r.mi;
						return _.contains(enrolled, fullname);
					});
					var target = $('#studentlist');
					var tmp = '<% _.each(students, function(r){ %>\
						<option value="<%=r.id%>"><%=r.lname + ", " + r.fname + " " + r.mi%></option>\
					<% }); %>';
					target.html(_.template(tmp)({students:unenrolled}));
				}
			};
			Core.request(req);
		},

		enrollStudent: function(e){
			e.preventDefault();
			var studentid = $('#studentlist option:selected').val();
			var section = $('#sectionlist option:selected').val();
			if (studentid == undefined || section == undefined) return;

			var startsy = $('#schoolyear option:selected').data('start');
			var endsy = parseInt(startsy) + 1;
			var term = $('#term option:selected').val();
			var coursecode = $('#coursetobetakenlist option:selected').val();
			var enrollmentcode = 2;
			var self = this;

			var req = {
				url: App.addNewEnrolledStudentInThesisUrl,
				type: 'POST',
				dataType: 'JSON',
				data: {
					start_sy: startsy,
					end_sy: endsy,
					term: term,
					course_code: coursecode,
					section: section,
					enrollment_code: enrollmentcode,
					student_id: studentid
				},
				success: function(res){
					self.renderEnrolledStudents();
				}
			};
			Core.request(req);
		},

		unenrollStudent: function(e){
			e.preventDefault();
			var id = $('#classlist option:selected').val();
			if (id == undefined) return;

			var self = this;
			var req = {
				url: App.deleteStudentFromThesisEnrollmentUrl,
				dataType: 'JSON',
				data: {
					id: id
				},
				success: function(res){
					self.renderEnrolledStudents();
				}
			};
			Core.request(req);
		},

		cleanUpEvents: function(){

		}
	});

return ThesisEnrollmentView;

});