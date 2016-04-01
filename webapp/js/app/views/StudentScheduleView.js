
define(['jquery', 'backbone', 'bootstrap', 'datePicker', 'bootstrap-dialog'], function($, Backbone, BootstrapDialog){

	var StudentScheduleView = Backbone.View.extend({

		templateName: 'StudentScheduleTemplate',

		events: {
			'change #courses': 'renderEnrolledStudents'
		},

		initialize: function(){
			this.render();
		},

		render: function(){
			var template = _.template(Core.templates[this.templateName]);
			this.$el.html(template());
			$('.date').datetimepicker();

			this.renderCourses();
		},

		renderCourses: function(e){
			var self = this;
			var req = {
				url: App.getCourseListUrl,
				dataType: 'JSON',
				success:function(res){
					var courses = $('#courses');
					courses.empty();
					courses.append('<option>All</option>');
					var tmp = '<% _.each(courses, function(course) { %>\
							<option><%= course.code %></option>\
						<% }); %>';
					courses.append(_.template(tmp)({courses:res}));
					self.renderEnrolledStudents();
				}
			};
			Core.request(req);
		},

		renderEnrolledStudents: function(){
			var coursecode = $('#courses option:selected').val();
			if (coursecode == undefined) {
				$('#students').empty();
				return;
			}
			var self = this;
			var req = {
				url: App.getEnrolledStudentsByCourseUrl,
				dataType: 'JSON',
				data: {
					startsy: $('#schoolyear option:selected').data('start'),
					endsy: $('#schoolyear option:selected').data('end'),
					term: $('#term option:selected').val()
				},
				success: function(res){
					if (coursecode != 'All') {
						res = _.filter(res, {course_code:coursecode});
					};
					var template = '<% _.each(students,function(s){ %>\
						<option value="<%=s.id%>"><%=s.studentname%></option>\
					<% }); %>';
					$('#students').html(_.template(template)({students:res}));
				}
			};
			Core.request(req);
		},

		cleanUpEvents: function(){

		}
	});

return StudentScheduleView;

});