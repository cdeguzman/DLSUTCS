define(['jquery', 'backbone', 'bootstrap', 'datePicker', 'bootstrap-dialog', 'underscore'], function($, Backbone, BootstrapDialog){

	var AdministrationPositionRecordView = Backbone.View.extend({

		events: {
			'click .main #positionList option' : 'fillForm',
			'submit #add' : 'submitFormAdd',
			'click button#deleteAdmin' : 'deleteAdmin',
			'submit #update' : 'submitFormUpdate',
		},

		templateName: 'AdministrationPositionRecordTemplate',

		facultyData: null,

		initialize: function(){
			this.render();
			$("#mainContainer").on("click", "button#deleteFaculty", function(e){
				self.showDeleteDialog();
			});
			this.renderPositionList();
			this.renderFacultyList();
		},

		renderPositionList: function(){
			$('.main #positionList').empty();
			var req = new Array();
			req.url = App.getFacAdminPositionUrl;
			req.dataType = "JSON";
			req.success = function(res){

				var tmp = '<% _.each(positionList, function(r) { %>\
								<option value="<%- r.id %>"><%- r.name %></option>\
							<% }); %>';
				$('.main #positionList').append(_.template(tmp)({positionList:res}));
				
	  		}
			Core.request(req);
		},

		renderFacultyList: function(){
			var req = new Array();
			req.url = App.getFacultyListUrl;
			req.dataType = "JSON";
			var self = this;
			req.success = function(res){
				
				var tmp = '<% _.each(facultyList, function(r) { %>\
								<option value="<%- r.id %>"><%- r.lname+", "+r.fname+" "+r.mi %></option>\
							<% }); %>';
				$('select[name="faculty"]').append(_.template(tmp)({facultyList:res}));
				
	  		}
			Core.request(req);

			console.log(this.facultyData);
		},

		render: function(){
			var template = _.template(Core.templates[this.templateName]);
			this.$el.html(template());
			$('#currsched-date-from').datetimepicker();
			$('#currsched-date-to').datetimepicker();

			$('#prefsched-date-from').datetimepicker();
			$('#prefsched-date-to').datetimepicker();
		},

		submitFormAdd: function(e){
			var form = $(e.currentTarget);
			var data = form.serialize();
			
			var req = new Array();
			req.url = App.addFacAdminPositionUrl;
			req.type = "POST";
			req.data = data;
			req.dataType = "JSON";
			var self = this;
			req.success = function(res){
				if(res == 1){
					alert("Sucess!");
					self.renderPositionList();
				}else{
					alert("Error occur!");
				}
				
	  		}
			Core.request(req);

			$('form#add')[0].reset();
			$('#addPosition').modal('hide');

		},

		deleteAdmin: function(){
			$('form')[0].reset();
			var id = $('.main #positionList :selected').val();
			if(id == undefined){
				alert('No selected faculty.');
				return false;
			}

			var action = confirm("Are you sure?");
			if (action) {
				var req = new Array();
				req.url = App.deleteAdminPosUrl;
				req.type = "POST";
				req.data = {'id': id};
				req.dataType = "JSON";
				var self = this;
				req.success = function(res){
					if(res == 1){
						alert("Success!");
						self.renderPositionList();
					}else{
						alert("Error Occur!");
					}
				}
				Core.request(req);
			}
		},

		fillForm: function(){
			var id = $('.main #positionList :selected').val();
			var req = new Array();
			req.url = App.getAdminPositionInfoUrl;
			req.type = "GET"
			req.data = {'id': id};
			req.dataType = "JSON";
			req.success = function(res){
				_.each(res, function(r) { 
					$('.main input[name="adminCode"]').val(r.code);
					$('.main input[name="adminId"]').val(r.id);
					$('.main input[name="name"]').val(r.name);
					$('.main input[name="description"]').val(r.description);
					$('.main select[name="faculty"]').val(r.faculty_id);
				});
			}
			Core.request(req);
		},

		submitFormUpdate: function(e){
			var form = $(e.currentTarget);
			var data = form.serialize();

			var req = new Array();
			req.url = App.updateAdminPositionUrl;
			req.type = "POST";
			req.data = data;
			req.dataType = "JSON";
			var self = this;
			req.success = function(res){
				if(res == 1){
					alert("Success!");
					self.renderPositionList();
				}else{
					alert("Error Occur!");
				}
			}
			Core.request(req);
		},

		cleanUpEvents: function(){

		}
	});

return AdministrationPositionRecordView;

});