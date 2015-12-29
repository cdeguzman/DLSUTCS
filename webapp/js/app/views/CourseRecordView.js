define(['jquery', 'backbone', 'bootstrap', 'datePicker', 'bootstrap-dialog', 'underscore'], function($, Backbone, BootstrapDialog){

	var CourseRecordView = Backbone.View.extend({

		events: {
			'click .main #courselist option' : 'fillForm',
			'submit #add' : 'submitFormAdd',
		},

		templateName: 'CourseRecordTemplate',

		initialize: function(){
			this.render();
			$("#mainContainer").on("click", "button#deleteFaculty", function(e){
				self.showDeleteDialog();
			});
			this.renderCourseList();
		},

		render: function(){
			var template = _.template(Core.templates[this.templateName]);
			this.$el.html(template());
			$('#currsched-date-from').datetimepicker();
			$('#currsched-date-to').datetimepicker();

			$('#prefsched-date-from').datetimepicker();
			$('#prefsched-date-to').datetimepicker();

			
		},

		renderCourseList: function(){
			$('.main #courselist').empty();
			var req = new Array();
			req.url = App.getCourseListUrl;
			req.dataType = "JSON";
			req.success = function(res){

				var tmp = '<% _.each(courselist, function(r) { %>\
								<option value="<%- r.id %>"><%- r.name %></option>\
							<% }); %>';
				$('.main #courselist').append(_.template(tmp)({courselist:res}));
				
	  		}
			Core.request(req);
		},
		
		cleanUpEvents: function(){

		}
	});

return CourseRecordView;

});