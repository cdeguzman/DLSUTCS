define(['jquery', 'backbone', 'bootstrap-dialog', 'underscore', 'bootstrap', 'datePicker'], function($, Backbone, BootstrapDialog){

	var FacultyRecordView = Backbone.View.extend({

		events: {
			'submit #update' : 'submitFormUpdate',
			'submit #add' : 'submitFormAdd',
			'focus input' : function(e) {  $(e.currentTarget).removeClass('error') },
			'click .main #facultyList option' : 'fillForm'
		},

		templateName: 'FacultyRecordTemplate',

		initialize: function(){
			this.render();
		},

		render: function(){
			var template = _.template(Core.templates[this.templateName]);
			this.$el.html(template());
			$('#currsched-date-from').datetimepicker();
			$('#currsched-date-to').datetimepicker();
			$('#prefsched-date-from').datetimepicker();
			$('#prefsched-date-to').datetimepicker();
			this.renderFacultyList();
			this.renderDeptList();
			this.renderRankList();
		},

		renderFacultyList: function(){
			$('.main #facultyList').empty();
			var req = new Array();
			req.url = App.getFacultyListUrl;
			req.dataType = "JSON";
			var self = this;
			req.success = function(res){
				var tmp = '<% _.each(facultyList, function(r) { %>\
							<option value="<%- r.id %>"><%- r.lname+", "+r.fname+" "+r.mi %></option>\
						<% }); %>';
				$('.main #facultyList').append(_.template(tmp)({facultyList:res}));
	  		}
			Core.request(req);
		},

		renderDeptList: function(){
			$('select[name="department"]').empty();
			var req = new Array();
			req.url = App.getDeptListUrl;
			req.dataType = "JSON";
			req.success = function(res){

				var tmp = '<% _.each(deptList, function(r) { %>\
								<option value="<%- r.code %>"><%- r.name %></option>\
							<% }); %>';
				$('select[name="department"]').append(_.template(tmp)({deptList:res}));
				
	  		}
			Core.request(req);
		},

		renderRankList: function(){
			$('select[name="currentrank"]').empty();
			var req = new Array();
			req.url = App.getFacRankListUrl;
			req.dataType = "JSON";
			req.success = function(res){
				var tmp = '<% _.each(rankList, function(r) { %>\
								<option value="<%- r.code %>"><%- r.name %></option>\
							<% }); %>';
				$('select[name="currentrank"]').append(_.template(tmp)({rankList:res}));
	  		}
			Core.request(req);
		},

		fillForm: function(){
			var fid = $('.main #facultyList :selected').val();
			var req = new Array();
			req.url = App.getFacultyInfoUrl;
			req.type = "GET"
			req.data = {'fid': fid};
			req.dataType = "JSON";
			req.success = function(res){
				_.each(res, function(r) { 
					$('.main label[name="facultyIdDummy"]').text(r.id);
					$('.main input[name="facultyId"]').val(r.id);
					$('.main input[name="firstname"]').val(r.fname);
					$('.main input[name="lastname"]').val(r.lname);
					$('.main input[name="middlename"]').val(r.mi);
					$('.main input[name="email"]').val(r.email);
					$('.main input[name="contact"]').val(r.contact_no);
					$('.main select[name="department"]').val(r.department_code);
					$('.main select[name="currentrank"]').val(r.faculty_rank);
					$('.main input[name="title"]').val(r.title);
					$('.main input[name="password"]').val(r.secret_password);
					$('.main input[name="sms"]').val(r.text_no);
				});
			}
			Core.request(req);
		},

		submitFormUpdate: function(e){
			var target = e.currentTarget;
			var form = $(e.currentTarget);
			var data = form.serialize();
			var id = $('.main #facultyList :selected').val();

			var req = new Array();
			req.url = App.updateFacultyInfoUrl;
			req.type = "POST";
			req.data = data;
			req.dataType = "JSON";
			var self = this;
			req.success = function(res){
				if(res == 1){
					alert("Success!");
					self.renderFacultyList();
				}else{
					alert("Error Occur!");
				}
			}
			Core.request(req);
		},

		submitFormAdd: function(e){
			var form = $(e.currentTarget);
			var data = form.serialize();
			
			var req = new Array();
			req.url = App.addNewFacultyInfoUrl;
			req.type = "POST";
			req.data = data;
			req.dataType = "JSON";
			var self = this;
			req.success = function(res){
				if(res == 1){
					alert("Success!");
					self.renderFacultyList();
					$('#addFaculty').modal('hide');
				}else{
					alert("Error Occur!");
				}
			}
			Core.request(req);
		},

		cleanUpEvents: function(){

		}
	});

return FacultyRecordView;

});