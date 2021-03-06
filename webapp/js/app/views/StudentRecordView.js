define(['jquery', 'backbone', 'bootstrap-dialog', 'bootstrap', 'datePicker' ], function($, Backbone, BootstrapDialog){

	var StudentRecordView = Backbone.View.extend({

		events: {
			'submit #update' : 'submitFormUpdate',
			'submit #add' : 'submitFormAdd',
			'focus input' : function(e) {  $(e.currentTarget).removeClass('error') },
			'change #studentList' : 'fillForm',
			'change .main #student_specialization' : 'refreshStudentList',
			'click button#deleteStudent' : 'deleteStudent',
		},

		templateName: 'StudentRecordTemplate',

		initialize: function(){
			this.render();

			$('input[name="notify"]').on('change', function(){
			   this.value = this.checked ? 1 : 0;
			}).change();
		},

		render: function(){
			var template = _.template(Core.templates[this.templateName]);
			this.$el.html(template());
			$('#currsched-date-from').datetimepicker();
			$('#currsched-date-to').datetimepicker();
			$('#prefsched-date-from').datetimepicker();
			$('#prefsched-date-to').datetimepicker();
			this.renderStudentList();
			this.renderSpecialization();
			this.renderFlowchart();
		},

		refreshStudentList: function(){
			$('form')[0].reset();
			var code = $('select#student_specialization :selected').val();

			if(code == "all") {
				this.renderStudentList();
				return false;
			} 
			$('.main #studentList').empty();
			var req = new Array();
			req.url = App.getStudentBySpecializationUrl;
			req.dataType = "JSON";
			req.data = {'specialization_code':code};
			var self = this;
			req.success = function(res){
				var tmp = '<% _.each(studentList, function(r) { %>\
							<option value="<%- r.id %>"><%- r.student_name %></option>\
						<% }); %>';
				$('.main #studentList').append(_.template(tmp)({studentList:res}));
	  		}
			Core.request(req);
		},

		renderStudentList: function(){
			$('.main #studentList').empty();
			var req = new Array();
			req.url = App.getStudentListUrl;
			req.dataType = "JSON";
			req.success = function(res){

				var tmp = '<% _.each(studentList, function(r) { %>\
								<option value="<%- r.id %>"><%- r.lname+", "+r.fname+" "+r.mi %></option>\
							<% }); %>';
				$('.main #studentList').append(_.template(tmp)({studentList:res}));
				
	  		}
			Core.request(req);
		},

		renderSpecialization: function(){
			$('select[name="specialization"]').empty();
			$('select#student_specialization').empty();
			var req = new Array();
			req.url = App.getSpecializationUrl;
			req.dataType = "JSON";
			req.success = function(res){

				var tmp = '<% _.each(speList, function(r) { %>\
								<option value="<%- r.code %>"><%- r.name %></option>\
							<% }); %>';
				$('select[name="specialization"]').append(_.template(tmp)({speList:res}));
				$('select#student_specialization').append('<option value="all">All</option>');
				$('select#student_specialization').append(_.template(tmp)({speList:res}));
				
	  		}
			Core.request(req);
		},

		renderFlowchart: function(){
			$('select[name="flowchart"]').empty();

			var req = new Array();
			req.url = App.getFlowchartListUrl;
			req.dataType = "JSON";
			req.success = function(res){

				var tmp = '<% _.each(speList, function(r) { %>\
								<option value="<%- r.version %>"><%- r.name+" ( "+r.specialization_code+" )"  %></option>\
							<% }); %>';
				$('select[name="flowchart"]').append(_.template(tmp)({speList:res}));
	  		}
			Core.request(req);
		},

		renderThesisHistories: function(){
			
		},

		fillForm: function(){
			var id = $('#studentList option:selected').val();
			if (id == undefined) {
				this.clearViews();
				return;
			}
			var req = new Array();
			req.url = App.getStudentInfoUrl;
			req.type = "GET"
			req.data = {'id': id};
			req.dataType = "JSON";
			var self = this;
			req.success = function(res){
				_.each(res, function(r) { 
					$('.main label[name="studentIdDummy"]').text(r.id);
					$('.main input[name="studentId"]').val(r.id);
					$('.main input[name="firstname"]').val(r.fname);
					$('.main input[name="lastname"]').val(r.lname);
					$('.main input[name="middlename"]').val(r.mi);
					$('.main input[name="email"]').val(r.email);
					$('.main input[name="contact"]').val(r.contact_no);
					$('.main input[name="password"]').val(r.secret_password);
					$('.main input[name="sms"]').val(r.text_no);
					$('.main select[name="flowchart"]').val(r.flowchart_version);
					$('.main select[name="specialization"]').val(r.specialization_code);
				});
				self.renderSchedules();
	  		}
			Core.request(req);
		},

		renderSchedules: function(){
			var studentid = $('#studentList option:selected').val();
			var schedulecode = 1;
			var schoolyear = $('#schoolyear option:selected');
			var startsy = schoolyear.data('start');
			var endsy = startsy + 1;
			var term = $('#term').val();
			var self = this;
			var req = {
				url: App.getStudentSchedulesUrl,
				dataType: 'JSON',
				data: {
					startsy: startsy,
					endsy: endsy,
					term: term,
					studentid: studentid,
					schedulecode: schedulecode
				},
				success:function(res){
					var template = '<% _.each(schedules, function(r){ %>\
						<option value="<%- r.id %>"><%- Core.getDay(parseInt(r.day)-1) + "(" + r.start_time + "-" + r.end_time + ")"%></option>\
					<% }); %>';
					$('#schedules').html(_.template(template)({schedules:res}));
				}
			};
			Core.request(req);
		},

		clearViews: function(){
			var update = $('#update');
			update[0].reset();
			update.find('input[name=studentId]').val('');
			update.find('label[name=studentIdDummy]').text('');
			$('#scheduleform')[0].reset();
			$('#schedules').empty();
		},

		renderThesisHistory: function(){
			
		},

		submitFormUpdate: function(e){
			var form = $(e.currentTarget);
			var data = form.serialize();

			var req = new Array();
			req.url = App.updateStudentInfoUrl;
			req.type = "POST";
			req.data = data;
			req.dataType = "JSON";
			var self = this;
			req.success = function(res){
				if(res == 1){
					alert("Success!");
					self.renderStudentList();
				}else{
					alert("Error Occur!");
				}
				$('form')[0].reset();
			}
			Core.request(req);
		},

		submitFormAdd: function(e){
			var form = $(e.currentTarget);
			var data = form.serialize();
			
			var req = new Array();
			req.url = App.addNewStudentInfoUrl;
			req.type = "POST";
			req.data = data;
			req.dataType = "JSON";
			var self = this;
			req.success = function(res){
				if(res == 1){
					alert("Success!");
					self.renderStudentList();
				}else{
					alert("Error Occur!");
				}
				$('form')[0].reset();
				$('#addStudent').modal('hide');
			}
			Core.request(req);
		},

		deleteStudent: function() {
			$('form')[0].reset();
			var id = $('.main #studentList :selected').val();
			if(id == undefined){
				alert('No selected student.');
				return false;
			}

			var action = confirm("Are you sure?");
			if (action) {
				var req = new Array();
				req.url = App.deleteStudentUrl;
				req.type = "POST";
				req.data = {'id': id};
				req.dataType = "JSON";
				var self = this;
				req.success = function(res){
					if(res == 1){
						alert("Success!");
						self.renderStudentList();
					}else{
						alert("Error Occur!");
					}
				}
				Core.request(req);
			}
		},

		cleanUpEvents: function(){

		}
	});

return StudentRecordView;

});