
define(['jquery', 'backbone', 'bootstrap', 'datePicker', 'bootstrap-dialog'], function($, Backbone, BootstrapDialog){

	var StudentScheduleView = Backbone.View.extend({

		templateName: 'StudentScheduleTemplate',

		initialize: function(){
			this.render();
		},

		render: function(){
			var template = _.template(Core.templates[this.templateName]);
			this.$el.html(template());
			$('#currsched-date-from').datetimepicker();
			$('#currsched-date-to').datetimepicker();
			$('#prefsched-date-from').datetimepicker();
			$('#prefsched-date-to').datetimepicker();

			this.renderCourses();
		},

		renderCourses: function(e){
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
				}
			};
			Core.request(req);
		},

		renderStudents: function(){
			
		},

		cleanUpEvents: function(){

		}
	});

return StudentScheduleView;

});