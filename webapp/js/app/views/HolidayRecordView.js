/**
	LoginView.js
	*/
	define(['jquery', 'backbone', 'bootstrap', 'datePicker', 'bootstrap-dialog'], function($, Backbone, BootstrapDialog){

		var HolidayRecordView = Backbone.View.extend({

			templateName: 'HolidayRecordTemplate',

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
				$('#datetime-from').datetimepicker();
				$('#datetime-to').datetimepicker();
			},

			cleanUpEvents: function(){

			}
		});

return HolidayRecordView;

});