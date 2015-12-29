
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
			this.renderFacultyList();
			this.renderDeptList();
			this.renderRankList();
		},

		render: function(){
			var template = _.template(Core.templates[this.templateName]);
			this.$el.html(template());
			$('#currsched-date-from').datetimepicker();
			$('#currsched-date-to').datetimepicker();

			$('#prefsched-date-from').datetimepicker();
			$('#prefsched-date-to').datetimepicker();
			
		},

		renderFacultyList: function(){
			var req = new Array();
			req.url = App.getFacultyListUrl;
			req.dataType = "JSON";
			req.success = function(res){

				var tmp = '<% _.each(facultyList, function(r) { %>\
								<option value="<%- r.id %>"><%- r.lname+", "+r.fname+" "+r.mi %></option>\
							<% }); %>';
				$('.main #facultyList').append(_.template(tmp)({facultyList:res}));
				
	  		}
			Core.request(req);
		},

		renderDeptList: function(){
			var req = new Array();
			req.url = App.getDeptListUrl;
			req.dataType = "JSON";
			req.success = function(res){

				var tmp = '<% _.each(deptList, function(r) { %>\
								<option value="<%- r.code %>"><%- r.name %></option>\
							<% }); %>';
				$('.main select[name="department"]').append(_.template(tmp)({deptList:res}));
				
	  		}
			Core.request(req);
		},

		renderRankList: function(){
			var req = new Array();
			req.url = App.getFacRankListUrl;
			req.dataType = "JSON";
			req.success = function(res){

				var tmp = '<% _.each(rankList, function(r) { %>\
								<option value="<%- r.code %>"><%- r.name %></option>\
							<% }); %>';
				$('.main select[name="currentrank"]').append(_.template(tmp)({rankList:res}));
				
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
					$('.main label[name="facultyId"]').text(r.id);
					$('.main input[name="firstname"]').val(r.fname);
					$('.main input[name="lastname"]').val(r.lname);
					$('.main input[name="middlename"]').val(r.mi);
					$('.main input[name="email"]').val(r.email);
					$('.main input[name="contact"]').val(r.contact_no);
					$('.main select[name="department"]').val(r.department_code);
					$('.main select[name="currentrank"]').val(r.faculty_rank);
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
			var data = form.serialize();
		},

		submitFormAdd: function(e){
			var form = $(e.currentTarget);
			var data = form.serialize();


			

			$('#addFaculty').modal('hide');

		},

		cleanUpEvents: function(){

		}
	});

return FacultyRecordView;

});