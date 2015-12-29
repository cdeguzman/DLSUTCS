define(['jquery', 'backbone', 'bootstrap', 'datePicker', 'bootstrap-dialog', 'underscore'], function($, Backbone, BootstrapDialog){

	var SubAreaRecordView = Backbone.View.extend({

		events: {
			'click .main #subarealist option' : 'fillForm',
			'submit form#add' : 'submitFormAdd',
		},

		templateName: 'SubAreaRecordTemplate',

		initialize: function(){
			this.render();
			$("#mainContainer").on("click", "button#deleteFaculty", function(e){
				self.showDeleteDialog();
			});
			this.renderSubAreList();
			this.renderGeneralAreList();
		},

		render: function(){
			var template = _.template(Core.templates[this.templateName]);
			this.$el.html(template());
			$('#currsched-date-from').datetimepicker();
			$('#currsched-date-to').datetimepicker();

			$('#prefsched-date-from').datetimepicker();
			$('#prefsched-date-to').datetimepicker();
		},

		renderSubAreList: function(){
			$('.main #subarealist').empty();
			var req = new Array();
			req.url = App.getSubAreaListUrl;
			req.dataType = "JSON";
			req.success = function(res){

				var tmp = '<% _.each(subAreaList, function(r) { %>\
								<option value="<%- r.id %>"><%- r.name %></option>\
							<% }); %>';
				$('.main #subarealist').append(_.template(tmp)({subAreaList:res}));
				
	  		}
			Core.request(req);
		},

		renderGeneralAreList: function(){
			$('#genarea').empty();
			var req = new Array();
			req.url = App.getGenAreaListUrl;
			req.dataType = "JSON";
			req.success = function(res){

				var tmp = '<% _.each(generalAreaList, function(r) { %>\
								<option value="<%- r.code %>"><%- r.name %></option>\
							<% }); %>';
				$('#genarea').append(_.template(tmp)({generalAreaList:res}));
				
	  		}
			Core.request(req);
		},

		fillForm: function(){
			
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

		cleanUpEvents: function(){

		}
	});

return SubAreaRecordView;

});