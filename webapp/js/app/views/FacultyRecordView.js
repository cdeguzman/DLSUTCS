define(['jquery', 'backbone', 'bootstrap-dialog', 'underscore', 'bootstrap', 'datePicker'], function($, Backbone, BootstrapDialog){

	var FacultyRecordView = Backbone.View.extend({

		events: {
			'submit #update' : 'submitFormUpdate',
			'submit #add' : 'submitFormAdd',
			'focus input' : function(e) {  $(e.currentTarget).removeClass('error') },
			'change #facultyList' : 'fillForm',
			'change .main #facultyDepartment' : 'refreshFacultyList',
			'click button#deleteFaculty' : 'deleteFaculty',
			'click button#addArea': 'addArea',
			'click button#removeArea': 'removeArea',
			'click button#increase': 'increasePercentage',
			'click button#decrease': 'decreasePercentage',
			'click button#add': 'addSchedule',
			'click button#remove': 'removeSchedule'
		},

		templateName: 'FacultyRecordTemplate',

		initialize: function(){
			this.render();
			this.clearViews();
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

		refreshFacultyList: function(){
			this.clearViews();
			var dep = $('select#facultyDepartment :selected').val();

			if(dep == "all") {
				this.renderFacultyList();
				return false;
			} 
			$('.main #facultyList').empty();
			var req = new Array();
			req.url = App.getFacultyByDeptUrl;
			req.dataType = "JSON";
			req.data = {'dept':dep};
			var self = this;
			req.success = function(res){
				var tmp = '<% _.each(facultyList, function(r) { %>\
							<option value="<%- r.id %>"><%- r.lname+", "+r.fname+" "+r.mi %></option>\
						<% }); %>';
				$('.main #facultyList').append(_.template(tmp)({facultyList:res}));
	  		}
			Core.request(req);
		},

		renderFacultyList: function(){
			$('form')[0].reset();
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
			$('select#facultyDepartment').empty();
			var req = new Array();
			req.url = App.getDeptListUrl;
			req.dataType = "JSON";
			req.success = function(res){

				var tmp = '<% _.each(deptList, function(r) { %>\
								<option value="<%- r.code %>"><%- r.name %></option>\
							<% }); %>';
				$('select[name="department"]').append(_.template(tmp)({deptList:res}));
				$('select#facultyDepartment').append('<option value="all">All</option>');
				$('select#facultyDepartment').append(_.template(tmp)({deptList:res}));
				
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
			var self = this;
			var fid = $('.main #facultyList :selected').val();
			if (fid == undefined) {
				this.clearViews();
				return;
			}
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
					self.renderCurrentAreas();
					self.renderSchedules();
				});
			}
			Core.request(req);
		},

		renderCurrentAreas: function(){
			var self = this;
			var id = $('#facultyList option:selected').val();
			var req = {
				url: App.getFacultyAreaUrl,
				data: {fid:id},
				type: 'GET',
				dataType: 'JSON',
				success: function(res) {
					var tmp = '<% _.each(areas, function(r) { %>\
						<option value="<%= r.code %>" data-level="<%= r.level %>" data-facultyareaid="<%= r.fa_id %>"><%= r.name + "(" + r.level + ")" %></option>\
					<% }); %>';
					$('#areas').html(_.template(tmp)({areas:res}));
					self.renderAreas();
				}
			};
			Core.request(req);
		},

		renderAreas: function(){
			var req = {
				url: App.getSubAreaListUrl,
				type: 'GET',
				dataType: 'JSON',
				success: function(res) {
					var areaids = $('#areas option').map(function(){
						return $(this).val();
					});
					var tmp = '<% _.each(areas, function(r) { %>\
						<%if(_.contains(areaids, r.code)) return;%>\
									<option value="<%= r.code %>"><%= r.name %></option>\
								<% }); %>';
					$('#get-areas').html(_.template(tmp)({areas:res,areaids:areaids}));
				}
			}
			Core.request(req);
		},

		increasePercentage: function(){
			var selected = $('#areas option:selected');
			var areaid = selected.val();
			if (areaid == undefined) return;

			var arealevel = selected.data('level');
			var facultyareaid = selected.data('facultyareaid');
			var facultyid = $('#facultyList option:selected').val();
			if (arealevel != 100) {
				arealevel += 10;
				var self = this;
				var req = {
					url: App.updateFacultyAreaUrl,
					data: {
						id: facultyareaid,
						faculty_id: facultyid,
						area_level: arealevel,
						area_code: areaid
					},
					type: 'POST',
					dataType: 'JSON',
					success: function(res) {
						self.renderCurrentAreas();
					}
				}
				Core.request(req);
			}
		},

		decreasePercentage: function(){
			var selected = $('#areas option:selected');
			var areaid = selected.val();
			if (areaid == undefined) return;

			var arealevel = selected.data('level');
			var facultyareaid = selected.data('facultyareaid');
			var facultyid = $('#facultyList option:selected').val();
			if (arealevel != 10) {
				arealevel-=10;
				var self = this;
				var req = {
					url: App.updateFacultyAreaUrl,
					data: {
						id: facultyareaid,
						faculty_id: facultyid,
						area_level: arealevel,
						area_code: areaid
					},
					type: 'POST',
					dataType: 'JSON',
					success: function(res) {
						self.renderCurrentAreas();
					}
				}
				Core.request(req);
			}
		},

		renderSchedules: function(){
			var facultyid = $('#facultyList option:selected').val();
			if (facultyid == undefined) return;

			var schedulecode = 1;
			var schoolyear = $('#schoolyear option:selected');
			var startsy = schoolyear.data('start');
			var endsy = startsy + 1;
			var term = $('#term').val();
			var self = this;
			var req = {
				url: App.getFacultySchedulesUrl,
				dataType: 'JSON',
				data: {
					startsy: startsy,
					endsy: endsy,
					term: term,
					facultyid: facultyid,
					schedulecode: schedulecode
				},
				success:function(res){
					var template = '<% _.each(schedules, function(r){ %>\
						<option value="<%- r.id %>"><%- Core.getDay(parseInt(r.day)-1) + "(" + r.start_time + "-" + r.end_time + ")"%></option>\
					<% }); %>';
					$('#currentschedlist').html(_.template(template)({schedules:res}));
				}
			};
			Core.request(req);
		},

		addSchedule: function(){

		},

		removeSchedule: function(){
			var id = $('#currentschedlist option:selected').val();
			if (id == undefined) return;

			var action = confirm('Are you sure?');
			if (!action) return;

			var self = this;
			var req = {
				url: App.deleteFacultySchedUrl,
				dataType: 'JSON',
				data: {
					id: id
				},
				success:function(res){
					self.renderSchedules();
				}
			};
			Core.request(req);
		},

		clearViews: function(){
			var update = $('#update');
			update[0].reset();
			update.find('input[name=facultyId]').val('');
			update.find('label[name=facultyIdDummy]').text('');
			$('#areas').empty();
			$('#get-areas').empty();
			$('#schedule')[0].reset();
			$('#currentschedlist').empty();
		},

		submitFormUpdate: function(e){
			var form = $(e.currentTarget);
			var data = form.serialize();

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

		submitFormAdd: function(e) {
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
			$('form')[0].reset();
		},

		deleteFaculty: function() {
			$('form')[0].reset();
			var id = $('.main #facultyList :selected').val();
			if(id == undefined){
				alert('No selected faculty.');
				return false;
			}

			var action = confirm("Are you sure?");
			if (action) {
				var req = new Array();
				req.url = App.deleteFacultyUrl;
				req.type = "POST";
				req.data = {'id': id};
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
			}
		},

		addArea: function(){
			var areaid = $('#get-areas option:selected').val();
			var facultyid = $('#facultyList option:selected').val();
			if (areaid == undefined || facultyid == undefined) return;

			var self = this;
			var req = {
				url: App.addFacultyAreaUrl,
				type: 'POST',
				dataType: 'JSON',
				data: {
					faculty_id: facultyid,
					area_code: areaid,
					area_level: 10
				},
				success:function(res){
					self.renderCurrentAreas();
				}
			};
			Core.request(req);
		},

		removeArea: function(){
			var facultyareaid = $('#areas option:selected').data('facultyareaid');
			if (facultyareaid == undefined) return;

			var self = this;
			var request = {
				url: App.deleteFacultyAreaUrl,
				dataType: 'JSON',
				data: {
					id: facultyareaid
				},
				success:function(res){
					console.log(res);
					self.renderCurrentAreas();
				}
			};
			Core.request(request);
		},

		cleanUpEvents: function(){

		}
	});

return FacultyRecordView;

});