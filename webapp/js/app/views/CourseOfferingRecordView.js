/**
	LoginView.js
	*/
	define(['jquery', 'backbone', 'bootstrap', 'datePicker', 'bootstrap-dialog'], function($, Backbone, BootstrapDialog){

		var CourseOfferingRecordView = Backbone.View.extend({

			templateName: 'CourseOfferingRecordTemplate',

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
				$('#reg-deadline').datetimepicker();
				$('#reg-defense-to').datetimepicker();
				$('#reg-defense-from').datetimepicker();
				$('#redef').datetimepicker();
				$('#redef-defense-to').datetimepicker();
				$('#redef-defense-from').datetimepicker();
				$('#outstanding').datetimepicker();
				$('#outstanding-defense-to').datetimepicker();
				$('#outstanding-defense-from').datetimepicker();
				$('#deadline').datetimepicker();
			},

			showDeleteDialog: function(){
				var self = this;
				BootstrapDialog.show({
					message: _.find("Do you want to delete Faculty Record", {page: 'popup', status:'faculty_delete_confirm'}).message,
					buttons: [
					{
						label: 'Cancel',
						cssClass: 'btn-default defaultimpt',
						action: function(dialog){
							dialog.close();
						}  
					},
					{
						label: 'OK',
						cssClass: 'btn-success',
						action: function(dialog){

							dialog.close();
						}
					}
					]
				});
			},

			cleanUpEvents: function(){

			}
		});

return CourseOfferingRecordView;

});