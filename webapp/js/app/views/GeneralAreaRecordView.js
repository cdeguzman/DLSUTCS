define(['jquery', 'backbone', 'bootstrap', 'datePicker', 'bootstrap-dialog', 'underscore'], function($, Backbone, BootstrapDialog){

	var GeneralAreaRecordView = Backbone.View.extend({

		events: {
			'click .main #arealist option' : 'fillForm',
			'submit form#add' : 'submitFormAdd',
		},

		templateName: 'GeneralAreaRecordTemplate',

		initialize: function(){
			this.render();
			$("#mainContainer").on("click", "button#deleteFaculty", function(e){
				self.showDeleteDialog();
			});
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
			alert()
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
				
	  		}
			Core.request(req);

			$('form#add')[0].reset();
			$('#addArea').modal('hide');

		},

		cleanUpEvents: function(){

		}
	});

return GeneralAreaRecordView;

});