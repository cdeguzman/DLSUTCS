define(['jquery', 'backbone', 'bootstrap', 'datePicker', 'bootstrap-dialog', 'underscore'], function($, Backbone, BootstrapDialog){

	var SubAreaRecordView = Backbone.View.extend({

		events: {
			'click .main #subarealist option' : 'fillForm',
			'submit form#add' : 'submitFormAdd',
			'submit form#update' : 'submitFormUpdate',
			'click button#deleteArea' : 'deleteArea',
		},

		templateName: 'SubAreaRecordTemplate',

		initialize: function(){
			this.render();
		},

		render: function(){
			var template = _.template(Core.templates[this.templateName]);
			this.$el.html(template());
			this.renderSubAreList();
			this.renderGeneralAreList();
		},

		renderSubAreList: function(){
			$('.main #subarealist').empty();
			var req = new Array();
			req.url = App.getSubAreaListUrl;
			req.dataType = "JSON";
			req.success = function(res){

				var tmp = '<% _.each(subAreaList, function(r) { %>\
								<option value="<%- r.code %>"><%- r.name %></option>\
							<% }); %>';
				$('.main #subarealist').append(_.template(tmp)({subAreaList:res}));
				
	  		}
			Core.request(req);
		},

		renderGeneralAreList: function(){
			$('select#genarea').empty();
			var req = new Array();
			req.url = App.getGenAreaListUrl;
			req.dataType = "JSON";
			req.success = function(res){

				var tmp = '<% _.each(generalAreaList, function(r) { %>\
								<option value="<%- r.code %>"><%- r.name %></option>\
							<% }); %>';
				$('select#genarea').append(_.template(tmp)({generalAreaList:res}));
				
	  		}
			Core.request(req);
		},

		fillForm: function(){
			var id = $('.main select#subarealist :selected').val();
			var req = new Array();
			req.url = App.getSelectedSubAreaUrl;
			req.type = "GET"
			req.data = {'id': id};
			req.dataType = "JSON";
			req.success = function(res){
				_.each(res, function(r) { 
					$('.main label[name="areaId"]').text(r.code);
					$('.main input[name="areaId"]').val(r.code);
					$('.main input[name="name"]').val(r.name);
					$('.main input[name="description"]').val(r.description);
					$('.main select[name="genarea"]').val(r.general_area_code);
				});
			}
			Core.request(req);
		},

		submitFormAdd: function(e){
			var form = $(e.currentTarget);
			var data = form.serialize();

			var req = new Array();
			req.url = App.addSubAreaUrl;
			req.type = "POST";
			req.data = data;
			req.dataType = "JSON";
			var self = this;
			req.success = function(res){

				if(res == 1){
					alert("Sucess!");
					self.renderSubAreList();
				}else{
					alert("Error occur!");
				}
				
	  		}
			Core.request(req);

			$('form#add')[0].reset();
			$('#addArea').modal('hide');

		},

		submitFormUpdate: function(e){
			var form = $(e.currentTarget);
			var data = form.serialize();

			var req = new Array();
			req.url = App.updateSubAreaUrl;
			req.type = "POST";
			req.data = data;
			req.dataType = "JSON";
			var self = this;
			req.success = function(res){
				if(res == 1){
					alert("Success!");
					self.renderSubAreList();
				}else{
					alert("Error Occur!");
				}
			}
			Core.request(req);
		},

		deleteArea: function(){
			$('form')[0].reset();
			var id = $('.main #subarealist :selected').val();
			if(id == undefined){
				alert('No selected Area.');
				return false;
			}

			var action = confirm("Are you sure?");
			if (action) {
				var req = new Array();
				req.url = App.deleteSubAreaUrl;
				req.type = "POST";
				req.data = {'id': id};
				req.dataType = "JSON";
				var self = this;
				req.success = function(res){
					if(res == 1){
						alert("Success!");
						self.renderSubAreList();
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

return SubAreaRecordView;

});