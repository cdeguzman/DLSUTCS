define(['jquery', 'backbone', 'bootstrap-dialog', 'bootstrap', 'datePicker' ], function($, Backbone, BootstrapDialog){

	var StudentRecordView = Backbone.View.extend({

		events: {
			'submit #update' : 'submitFormUpdate',
			'submit #add' : 'submitFormAdd',
			'focus input' : function(e) {  $(e.currentTarget).removeClass('error') },
			'click #studentList option' : 'fillForm'
		},

		templateName: 'StudentRecordTemplate',

		initialize: function(){
			this.render();
			this.renderStudentList();
		},

		render: function(){
			var template = _.template(Core.templates[this.templateName]);
			this.$el.html(template());
			$('#currsched-date-from').datetimepicker();
			$('#currsched-date-to').datetimepicker();

			$('#prefsched-date-from').datetimepicker();
			$('#prefsched-date-to').datetimepicker();
		},

		renderStudentList: function(){
			var req = new Array();
			req.url = App.getStudentListUrl;
			req.dataType = "JSON";
			req.success = function(res){

				var tmp = '<% _.each(studentList, function(r) { %>\
								<option value="<%- r.id %>"><%- r.lname+", "+r.fname+" "+r.mi %></option>\
							<% }); %>';
				$('#studentList').append(_.template(tmp)({studentList:res}));
				
	  		}
			Core.request(req);
		},

		fillForm: function(){
			var id = $('#studentList :selected').val();
			var req = new Array();
			req.url = App.getStudentInfoUrl;
			req.type = "GET"
			req.data = {'id': id};
			req.dataType = "JSON";
			req.success = function(res){
				_.each(res, function(r) { 
					$('.main label[name="studentId"]').text(r.id);
					$('.main input[name="firstname"]').val(r.fname);
					$('.main input[name="lastname"]').val(r.lname);
					$('.main input[name="middlename"]').val(r.mi);
					$('.main input[name="email"]').val(r.email);
					$('.main input[name="contact"]').val(r.contact_no);
					$('.main input[name="title"]').val(r.title);
					$('.main input[name="passsword"]').val(r.secret_password);
					$('.main input[name="sms"]').val(r.text_no);
				});
	  		}
			Core.request(req);
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