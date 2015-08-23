/**
	LoginView.js
	*/
	define(['jquery', 'backbone', 'bootstrap-dialog', 'bootstrap', 'datePicker' ], function($, Backbone, BootstrapDialog){

		var StudentRecordView = Backbone.View.extend({

			events: {
				'submit #update' : 'submitFormUpdate',
				'submit #add' : 'submitFormAdd',
				'focus input' : function(e) {  $(e.currentTarget).removeClass('error') }
			},

			templateName: 'StudentRecordTemplate',

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
				var fieldsThatHasError = [];

				_.each(data, function(formElement){
					if(formElement.value===""){
						fieldsThatHasError.push({
							name: formElement.name,
							status: 'empty'
						});
					}
				});

				if(!fieldsThatHasError.length){
					if(!Core.validatePhoneNumber(form.children('input[name="contact"]').val())){
						fieldsThatHasError.push({
							name: "contact",
							status: 'invalid'
						});
					}
					
					if(!Core.validateEmail(form.children('input[name="email"]').val())){
						fieldsThatHasError.push({
							name: "email",
							status: 'invalid'
						});
					}
				}

				if(fieldsThatHasError.length){
					$.each(fieldsThatHasError, function(key, value) {
						console.log($(form.find('input[name="'+value.name+'"]')))
						$(form.find('input[name="'+value.name+'"]')).addClass("error")
					})
				}

				if(fieldsThatHasError.length){
					BootstrapDialog.show({
						title: 'Invalid Input',
						message: 'Please, check highligthed field/s',
						buttons: [{
							label: 'Ok',
							action: function(dialog) {
								dialog.close();
							}
						}]
					});
				} 
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

return StudentRecordView;

});