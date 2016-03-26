define(['jquery', 'backbone', 'bootstrap', 'datePicker', 'bootstrap-dialog', 'underscore'], function($, Backbone, BootstrapDialog){

	var CourseRecordView = Backbone.View.extend({

		events: {
			'change #courselist' : 'fillForm',
			'change [type=checkbox]': 'changeApplicableValue',
			'submit #add': 'addCourse',
			'submit #update': 'updateCourse',
			'click button#deleteCourse': 'deleteCourse'
		},

		templateName: 'CourseRecordTemplate',

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

			$('#update')[0].reset();
			this.renderPhases($('#update select[name=phase_code]'));
			this.renderDepartments($('#update select[name=department_code]'));
			$('#add')[0].reset();
			this.renderPhases($('#add select[name=phase_code]'));
			this.renderDepartments($('#add select[name=department_code]'));
			this.renderCourses();
		},

		renderCourses: function(){
			var req = new Array();
			req.url = App.getCourseListUrl;
			req.dataType = "JSON";
			req.success = function(res){
				var tmp = '<% _.each(courselist, function(r) { %>\
								<option data-id="<%- r.id %>"><%= r.code %></option>\
							<% }); %>';
				$('#courselist').html(_.template(tmp)({courselist:res}));
	  	}
			Core.request(req);
		},

		renderPhases: function(target) {
			var req = {
				url: App.getPhaseUrl,
				dataType: 'JSON',
				success: function(res) {
					var tmp = '<% _.each(phaseList, function(r){ %>\
						<option value="<%- r.code %>"><%- r.name %></option>\
					<% }); %>';
					target.empty().append(_.template(tmp)({phaseList:res}));
				}
			};
			Core.request(req);
		},

		renderDepartments: function(target) {
			var req = {
				url: App.getDeptListUrl,
				dataType: 'JSON',
				success: function(res) {
					var tmp = '<% _.each(deptList, function(r){ %>\
						<option value="<%- r.code %>"><%- r.name %></option>\
					<% }); %>';
					target.empty().append(_.template(tmp)({deptList:res}));
				}
			};
			Core.request(req);
		},

		changeApplicableValue: function(e) {
			e.currentTarget.value = e.currentTarget.checked ? 1 : 0;
		},

		fillForm: function(e) {
			var courseCode = $('#courselist option:selected').val();
			if (courseCode == undefined) {
				$('#update')[0].reset();
				return;
			}
			var req = {
				url: App.getSelectedCourseUrl,
				type: 'GET',
				dataType: 'JSON',
				data: {code: courseCode},
				success: function(res) {
					_.each(res, function(r) {
						$('#update input[name=code]').val(courseCode);
						$('#update input[name=name]').val(r.name);
						$('#update input[name=description]').val(r.description);
						$('#update input[name=unit]').val(r.unit);
						$('#update select[name=phase_code]').val(r.phase_code);
						$('#update select[name=department_code]').val(r.department_code);
						$('#update select[name=start_regular_defense_week]').val(r.start_regular_defense_week);
						$('#update select[name=end_regular_defense_week]').val(r.end_regular_defense_week);
						$('#update input[name=regular_defense_minute]').val(r.regular_defense_minute);
						$('#update input[name=regular_defense_applicable]').prop('checked', parseInt(r.regular_defense_applicable));
						$('#update select[name=start_redefense_week]').val(r.start_redefense_week);
						$('#update select[name=end_redefense_week]').val(r.end_redefense_week);
						$('#update input[name=redefense_minute]').val(r.redefense_minute);
						$('#update input[name=redefense_applicable]').prop('checked', parseInt(r.redefense_applicable));
						$('#update select[name=start_outstanding_defense_week]').val(r.start_outstanding_defense_week);
						$('#update select[name=end_outstanding_defense_week]').val(r.end_outstanding_defense_week);
						$('#update input[name=outstanding_defense_minute]').val(r.outstanding_defense_minute);
						$('#update input[name=outstanding_defense_applicable]').prop('checked', parseInt(r.outstanding_defense_applicable));
						$('#update select[name=deadline_of_deliverable_week]').val(r.deadline_of_deliverable_week);
					});
				}
			};
			Core.request(req);
		},

		addCourse: function(e) {
			e.preventDefault();
			var self = this;
			var form = $(e.currentTarget);
			var data = form.serialize();
			var req = {
				url: App.addNewCourseUrl,
				type: 'POST',
				dataType: 'JSON',
				data: data,
				success: function(res) {
					$('#add')[0].reset();
					$('#addCourse').modal('hide');
					self.renderCourses();
				}
			};
			Core.request(req);
		},

		updateCourse: function(e) {
			e.preventDefault();
			var self = this;
			var form = $(e.currentTarget);
			var data = form.serialize();
			var req = {
				url: App.updateCourseUrl,
				type: 'POST',
				dataType: 'JSON',
				data: data,
				success: function(res) {
					console.log(res);
				}
			};
			Core.request(req);
		},

		deleteCourse: function(e) {
			e.preventDefault();
			var course = $('#courselist option:selected');
			if (course == undefined) return;

			var action = confirm("Are you sure?");
			if (!action) return;

			var id = course.data('id');
			var self = this;
			var req = {
				url: App.deleteCourseUrl,
				type: 'GET',
				dataType: 'JSON',
				data: {id: id},
				success: function(res) {
					self.renderCourses();
					$('#update')[0].reset();
				}
			};
			Core.request(req);
		},

		cleanUpEvents: function(){

		}
	});

return CourseRecordView;

});