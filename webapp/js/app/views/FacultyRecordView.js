
define(['jquery', 'backbone', 'bootstrap-dialog', 'underscore', 'bootstrap', 'datePicker'], function($, Backbone, BootstrapDialog){

	var FacultyRecordView = Backbone.View.extend({

		events: {
			'submit #update' : 'submitFormUpdate',
			'submit #add' : 'submitFormAdd',
			'focus input' : function(e) {  $(e.currentTarget).removeClass('error') }
		},

		templateName: 'FacultyRecordTemplate',

		initialize: function(){
			var self = this;
			this.render();
			var self = this;
		},

		render: function(){
			var template = _.template(Core.templates[this.templateName]);
			this.$el.html(template());
			$('#currsched-date-from').datetimepicker();
			$('#currsched-date-to').datetimepicker();

			$('#prefsched-date-from').datetimepicker();
			$('#prefsched-date-to').datetimepicker();
		},


		submitFormUpdate: function(e){
			var target = e.currentTarget;
			var form = $(e.currentTarget);
			var data = form.serializeArray();

			
		},

		submitFormAdd: function(e){
			var form = $(e.currentTarget);
			var data = form.serializeArray();
			console.log(data);

			$('#addFaculty').modal('hide');

		},

		cleanUpEvents: function(){

		}
	});

return FacultyRecordView;

});