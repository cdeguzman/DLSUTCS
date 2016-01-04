define(['jquery', 'backbone', 'bootstrap', 'datePicker', 'bootstrap-dialog', 'underscore'], function($, Backbone, BootstrapDialog){

	var RankRecordView = Backbone.View.extend({

		events: {
			'click .main #ranklist option' : 'fillForm',
			'submit #add' : 'submitFormAdd',
			'submit #update' : 'submitFormUpdate',
			'click button#deleteRank' : 'deleteRank',
		},

		templateName: 'RankRecordTemplate',

		initialize: function(){
			this.render();
		},

		render: function(){
			var template = _.template(Core.templates[this.templateName]);
			this.$el.html(template());
			this.renderRankList();
		},

		renderRankList: function(){
			$('.main #ranklist').empty();
			var req = new Array();
			req.url = App.getRankListUrl;
			req.dataType = "JSON";
			req.success = function(res){

				var tmp = '<% _.each(ranklist, function(r) { %>\
								<option value="<%- r.id %>"><%- r.name+" ["+r.code+"]" %></option>\
							<% }); %>';
				$('.main #ranklist').append(_.template(tmp)({ranklist:res}));
				
	  		}
			Core.request(req);
		},

		fillForm: function(){
			var id = $('.main #ranklist :selected').val();
			var req = new Array();
			req.url = App.getSelectedRankUrl;
			req.type = "GET"
			req.data = {'id': id};
			req.dataType = "JSON";
			req.success = function(res){
				_.each(res, function(r) { 
					$('.main input[name="rankCode"]').val(r.code);
					$('.main input[name="rankId"]').val(r.id);
					$('.main input[name="name"]').val(r.name);
					$('.main input[name="fulltimepay"]').val(r.ft_amount);
					$('.main input[name="parttimepay"]').val(r.pt_amount);
					$('.main input[name="description"]').val(r.description);
				});
			}
			Core.request(req);
		},

		submitFormAdd: function(e){
			var form = $(e.currentTarget);
			var data = form.serialize();
			
			var req = new Array();
			req.url = App.addNewRankUrl;
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
				$('form#add')[0].reset();
				$('#addRank').modal('hide');
	  		}
			Core.request(req);

		},

		submitFormUpdate: function(e){
			var form = $(e.currentTarget);
			var data = form.serialize();

			var req = new Array();
			req.url = App.updateRankInfoUrl;
			req.type = "POST";
			req.data = data;
			req.dataType = "JSON";
			var self = this;
			req.success = function(res){
				if(res == 1){
					alert("Success!");
					self.renderRankList();
				}else{
					alert("Error Occur!");
				}
			}
			Core.request(req);
		},

		deleteRank: function(){
			$('form')[0].reset();
			var id = $('.main #ranklist :selected').val();
			if(id == undefined){
				alert('No selected rank.');
				return false;
			}

			var action = confirm("Are you sure?");
			if (action) {
				var req = new Array();
				req.url = App.deleteRankUrl;
				req.type = "POST";
				req.data = {'id': id};
				req.dataType = "JSON";
				var self = this;
				req.success = function(res){
					if(res == 1){
						alert("Success!");
						self.renderRankList();
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

return RankRecordView;

});