define(['jquery', 'backbone', 'bootstrap', 'datePicker', 'bootstrap-dialog', 'underscore'], function($, Backbone, BootstrapDialog){

	var GeneralAreaRecordView = Backbone.View.extend({

		events: {
			'click .main #arealist option' : 'fillForm',
			'submit form#add' : 'submitFormAdd',
			'submit form#update' : 'submitFormUpdate',
			'click button#deleteArea' : 'deleteArea',
		},

		templateName: 'GeneralAreaRecordTemplate',

		initialize: function(){
			this.render();
			this.renderGeneralAreList();
		},

		render: function(){
			var template = _.template(Core.templates[this.templateName]);
			this.$el.html(template());

		},

		renderGeneralAreList: function(){
			$('.main #arealist').empty();
			var req = new Array();
			req.url = App.getGenAreaListUrl;
			req.dataType = "JSON";
			req.success = function(res){

				var tmp = '<% _.each(generalAreaList, function(r) { %>\
								<option value="<%- r.code %>"><%- r.name %></option>\
							<% }); %>';
				$('.main #arealist').append(_.template(tmp)({generalAreaList:res}));
				
	  		}
			Core.request(req);
		},

		fillForm: function(){
			var id = $('.main #arealist :selected').val();
			var req = new Array();
			req.url = App.getGeneralAreaInfoUrl;
			req.type = "GET"
			req.data = {'id': id};
			req.dataType = "JSON";
			req.success = function(res){
				_.each(res, function(r) { 
					$('.main label[name="areaId"]').text(r.code);
					$('.main input[name="areaId"]').val(r.code);
					$('.main input[name="name"]').val(r.name);
					$('.main input[name="description"]').val(r.description);
				});
			}
			Core.request(req);
		},

		submitFormAdd: function(e){
			var form = $(e.currentTarget);
			var data = form.serialize();

			var req = new Array();
			req.url = App.addGeneralAreaUrl;
			req.type = "POST";
			req.data = data;
			req.dataType = "JSON";
			var self = this;
			req.success = function(res){

				if(res == 1){
					alert("Sucess!");
					self.renderGeneralAreList();
				}else{
					alert("Error occur!");
				}
				$('form#add')[0].reset();
				$('#addArea').modal('hide');
	  		}
			Core.request(req);

			

		},

		submitFormUpdate: function(e){
			var form = $(e.currentTarget);
			var data = form.serialize();

			var req = new Array();
			req.url = App.updateGenAreaUrl;
			req.type = "POST";
			req.data = data;
			req.dataType = "JSON";
			var self = this;
			req.success = function(res){
				if(res == 1){
					alert("Success!");
					self.renderGeneralAreList();
				}else{
					alert("Error Occur!");
				}
			}
			Core.request(req);
		},

		deleteArea: function(){
			$('form')[0].reset();
			var id = $('.main #arealist :selected').val();
			if(id == undefined){
				alert('No selected Area.');
				return false;
			}

			var action = confirm("Are you sure?");
			if (action) {
				var req = new Array();
				req.url = App.deleteGenAreaUrl;
				req.type = "POST";
				req.data = {'id': id};
				req.dataType = "JSON";
				var self = this;
				req.success = function(res){
					if(res == 1){
						alert("Success!");
						self.renderGeneralAreList();
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

return GeneralAreaRecordView;

});