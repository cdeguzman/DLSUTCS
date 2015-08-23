
define(['jquery', 'backbone', 'bootstrap', 'datePicker', 'bootstrap-dialog'], function($, Backbone, BootstrapDialog){

	var ThesisScheduleView = Backbone.View.extend({

		templateName: 'ThesisScheduleTemplate',

		initialize: function(){
			var self = this;
			this.render();
			var self = this;
			$("#mainContainer").on("click", "button#deleteFaculty", function(e){
				self.showDeleteDialog();
			});
		},

		render: function(){
			var template = _.template(Core.templates[this.templateName]);
			this.$el.html(template());
			$('#scheduledate').datetimepicker();
		},

		cleanUpEvents: function(){

		}
	});

return ThesisScheduleView;

});