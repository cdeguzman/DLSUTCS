/**
	LoginView.js
	*/
	define(['jquery', 'backbone', 'bootstrap', 'datePicker', 'bootstrap-dialog'], function($, Backbone, BootstrapDialog){

		var ThesisGroupView = Backbone.View.extend({

			templateName: 'ThesisGroupTemplate',

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
				$('#currsched-date-from').datetimepicker();
				$('#currsched-date-to').datetimepicker();

				$('#prefsched-date-from').datetimepicker();
				$('#prefsched-date-to').datetimepicker();
			},

			cleanUpEvents: function(){

			}
		});

return ThesisGroupView;

});