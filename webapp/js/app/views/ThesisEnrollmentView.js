
define(['jquery', 'backbone', 'bootstrap', 'datePicker', 'bootstrap-dialog'], function($, Backbone, BootstrapDialog){

	var ThesisEnrollmentView = Backbone.View.extend({

		templateName: 'ThesisEnrollmentTemplate',

		initialize: function(){
			this.render();
		},

		render: function(){
			var template = _.template(Core.templates[this.templateName]);
			this.$el.html(template());
		},

		renderSpecializations: function(){

		},

		renderFlowcharts: function(){

		},

		renderCourses: function(){

		},

		renderSections: function(){

		},

		renderStudents: function(){

		},

		renderClasses: function(){

		},

		cleanUpEvents: function(){

		}
	});

return ThesisEnrollmentView;

});