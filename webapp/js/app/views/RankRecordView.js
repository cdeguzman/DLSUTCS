define(['jquery', 'backbone', 'bootstrap', 'datePicker', 'bootstrap-dialog', 'underscore'], function($, Backbone, BootstrapDialog){

	var RankRecordView = Backbone.View.extend({

		events: {
			'click .main #ranklist option' : 'fillForm',
			'submit #add' : 'submitFormAdd',
		},

		templateName: 'RankRecordTemplate',

		initialize: function(){
			this.render();
			$("#mainContainer").on("click", "button#deleteFaculty", function(e){
				self.showDeleteDialog();
			});
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

		renderRankList: function(){
			/*$('.main #ranklist').empty();
			var req = new Array();
			req.url = App.getFacAdminPositionUrl;
			req.dataType = "JSON";
			req.success = function(res){

				var tmp = '<% _.each(ranklist, function(r) { %>\
								<option value="<%- r.id %>"><%- r.name %></option>\
							<% }); %>';
				$('.main #ranklist').append(_.template(tmp)({ranklist:res}));
				
	  		}
			Core.request(req);*/
		},

		submitFormAdd: function(e){
			var form = $(e.currentTarget);
			var data = form.serialize();
			
			var req = new Array();
			req.url = App.addRankUrl;
			req.type = "POST";
			req.data = data;
			req.dataType = "JSON";
			var self = this;
			req.success = function(res){

				if(res == 1){
					alert("Sucess!");
					self.renderRankList();
				}else{
					alert("Error occur!");
				}
				
	  		}
			Core.request(req);

			$('form#add')[0].reset();
			$('#addRank').modal('hide');

		},

		cleanUpEvents: function(){

		}
	});

return RankRecordView;

});