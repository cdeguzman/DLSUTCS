
define(['jquery', 'backbone', 'bootstrap', 'datePicker', 'bootstrap-dialog'], function($, Backbone, BootstrapDialog){

	var ThesisEnrollmentView = Backbone.View.extend({

		templateName: 'ThesisEnrollmentTemplate',

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

return ThesisEnrollmentView;

});