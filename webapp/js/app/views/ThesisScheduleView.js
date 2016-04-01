
define(['jquery', 'backbone', 'bootstrap-dialog', 'underscore', 'bootstrap', 'datePicker'], function($, Backbone, BootstrapDialog){

	var ThesisScheduleView = Backbone.View.extend({

		events: {
			'click #defensehistory' : 'gotoDefenseHostory'
		},

		templateName: 'ThesisScheduleTemplate',

		initialize: function(){
			this.render();
		},

		render: function(){
			var template = _.template(Core.templates[this.templateName]);
			this.$el.html(template());
			$('.date').datetimepicker();
			this.renderCourses();
		},

		renderCourses: function(){
			var self = this;
			var req = {
				url: App.getCourseListUrl,
				dataType: 'JSON',
				success: function(res){
					var target = $('#courses');
					var tmp = '<% _.each(courses, function(r){ %>\
						<option><%=r.code%></option>\
					<% }); %>';
					target.html(_.template(tmp)({courses:res}));
					self.renderThesisGroups();
				}
			};
			Core.request(req);
		},

		renderThesisGroups: function(){
			var selected = $('#courses option:selected').val();
			if (selected == undefined) return;

			var schoolyear = selected.split(" - ");
			var sy1 = schoolyear[0];
			var sy2 = schoolyear[1];

			var self = this;
	  	var req = {
	  		url: App.getThesisListurl,
	  		dataType: 'JSON',
	  		data: {
	  			start_sy: sy1,
	  			end_sy: sy2
	  		},
	  		success:function(res){
					var tmp = '<% _.each(thesisList, function(r) { %>\
									<option value="<%- r.id %>"><%- r.primary_name %></option>\
								<% }); %>';
					$('#group').html(_.template(tmp)({thesisList:res}));
	  		}
	  	};
			Core.request(req);
		},

		

		cleanUpEvents: function(){

		},

		gotoDefenseHostory: function(){
			Core.router.routeTo('defense');
		},
	});

	return ThesisScheduleView;

});