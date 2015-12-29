define(['jquery', 'backbone', 'bootstrap', 'datePicker', 'bootstrap-dialog'], function($, Backbone, BootstrapDialog){

	var ThesisGroupView = Backbone.View.extend({

		events: {
			'change .main #years' : 'renderThesisGroup',
			'click .main #group  option' : 'fillForm'
		},

		templateName: 'ThesisGroupTemplate',

		initialize: function(){
			this.render();
			$("#mainContainer").on("click", "button#deleteFaculty", function(e){
				self.showDeleteDialog();
			});
			this.generaterSchoolYear();
			$('.main #group').empty();
		},

		render: function(){
			var template = _.template(Core.templates[this.templateName]);
			this.$el.html(template());
			$('#currsched-date-from').datetimepicker();
			$('#currsched-date-to').datetimepicker();

			$('#prefsched-date-from').datetimepicker();
			$('#prefsched-date-to').datetimepicker();
		},


		renderThesisGroup: function(){
			$('.main #group').empty();
			var sy = ($('.main #years :selected').val()).split(",");
			var sy1 = sy[0];
			var sy2 = sy[1];
			
			var req = new Array();
			req.url = App.getThesisListurl;
			req.type = "GET"
			req.data = {'start_sy': sy1, 'end_sy': sy2};
			req.dataType = "JSON";
			req.success = function(res){

				var tmp = '<% _.each(thesisList, function(r) { %>\
								<option value="<%- r.id %>"><%- r.primary_name %></option>\
							<% }); %>';
				$('.main #group').append(_.template(tmp)({thesisList:res}));
				
	  		}
			Core.request(req);

		},

		fillForm: function(){
			var tid = $('.main #group :selected').val();
			var req = new Array();
			req.url = App.getThesisGroupInfoUrl;
			req.type = "GET"
			req.data = {'tid': tid};
			req.dataType = "JSON";
			req.success = function(res){
				_.each(res, function(r) { 
					$('.main label[name="thesisId"]').text(r.id);
					$('.main input[name="thesistitle"]').val(r.primary_name);
					$('.main input[name="subthesistitle"]').val(r.secondary_name);
					$('.main input[name="thesisdescription"]').val(r.description);

					$('.main select[name="schoolyear"]').append('<option value='+r.start_sy+','+r.end_sy+'>'+r.start_sy+' - '+r.end_sy+'</option>');
					$('.main select[name="termcompleted"]').append('<option value='+r.start_term+','+r.end_term+'>'+r.start_term+' - '+r.end_term+'</option>');
					$('.main select[name="adviser"]').append('<option>n/a</option>');
					$('.main select[name="proposalabstract"]').append('<option value='+r.proposal_abstract+'>'+r.proposal_abstract+'</option>');
					$('.main select[name="finalabstract"]').append('<option value='+r.final_abstract+'>'+r.final_abstract+'</option>');
				});
	  		}
			Core.request(req);
		},

		generaterSchoolYear: function(){
			$('.main #years').empty();
			var firstYear = 1999;
			var lastYear = ((new Date).getFullYear()+1);
			var max = lastYear - firstYear;
			for(var i=0; i<max; i++) {
				var start = firstYear;
				var end = ++firstYear;
			    $('.main #years').prepend('<option value='+start+','+end+'>'+start+" - "+end+'</option>');
			}
		},

		cleanUpEvents: function(){

		}
	});

	return ThesisGroupView;

});