define(['jquery', 'backbone', 'bootstrap', 'datePicker', 'bootstrap-dialog'], function($, Backbone, BootstrapDialog){

	var SchoolYearView = Backbone.View.extend({

		events: {
			'submit #update' : 'submitFormUpdate',
			'submit #add' : 'submitFormAdd',
			'change #sylist' : 'fillForm',
			'click button#deleteYear' : 'deleteSchoolYear',
		},

		years: new Array(),

		templateName: 'SchoolYearTemplate',

		initialize: function(){
			this.render();
		},

		render: function(){
			var template = _.template(Core.templates[this.templateName]);
			this.$el.html(template());
			$('.date').datetimepicker({
				format:'YYYY-MM-DD'
			});
			this.renderYear();
		},

		renderYear: function(){
			var req = {
				url: App.getDistinctSchoolYearUrl,
				dataType: 'JSON',
				success: function(res){
					var template = '<% _.each(schoolyears, function(sy){ %>\
						<option><%=sy.schoolyear%></option>\
					<% }); %>';
					$('#sylist').html(_.template(template)({schoolyears:res}));
				}
			};
			Core.request(req);
		},

		fillForm: function(){
			var schoolyear = $('#sylist option:selected').val();
			if (schoolyear == undefined) {
				$('form')[0].reset();
				$('#update label[name=syId]').text('');
				$('.date').data('DateTimePicker').clear();
				return;
			}
			$('label[name="syId"]').text(schoolyear);
			var startsy = schoolyear.split(" - ")[0];
			$('input[name="syId"]').val(startsy);

			
			var req = new Array();
			req.url = App.getSchoolYearBySYUrl;
			req.type = "GET"
			req.dataType = "JSON";
			req.data = {'start_sy': startsy, 'term': 1};
			req.success = function(res){
				_.each(res, function(r) { 
					$('.main input[name="fterm_from_add"]').val(r.start_date);
					$('.main input[name="fterm_to_add"]').val(r.end_date);
				});
			}
			Core.request(req);

			var req = new Array();
			req.url = App.getSchoolYearBySYUrl;
			req.type = "GET"
			req.dataType = "JSON";
			req.data = {'start_sy': startsy, 'term': 2};
			req.success = function(res){
				_.each(res, function(r) { 
					$('.main input[name="sterm_from_add"]').val(r.start_date);
					$('.main input[name="sterm_to_add"]').val(r.end_date);
				});
			}
			Core.request(req);

			var req = new Array();
			req.url = App.getSchoolYearBySYUrl;
			req.type = "GET"
			req.dataType = "JSON";
			req.data = {'start_sy': startsy, 'term': 3};
			req.success = function(res){
				_.each(res, function(r) { 
					$('.main input[name="tterm_from_add"]').val(r.start_date);
					$('.main input[name="tterm_to_add"]').val(r.end_date);
				});
			}
			Core.request(req);

		},

		submitFormAdd: function(e) {
			var form = $('#add');
			var startsy = form.find('input[name=start_sy]').val();
			var endsy = parseInt(startsy) + 1;
			var schoolyear = startsy + " - " + endsy;

			var schoolyears = $('#sylist option').map(function(r){return $(this).val();});

			if (_.contains(schoolyears, schoolyear)) {
				alert('Schoolyear already exists: ' + schoolyear);
				return;
			}

			var data = form.serialize().concat("&end_sy=" + endsy);
			var self = this;
			var req = {
				url: App.addNewSchoolYearUrl,
				type: 'POST',
				dataType: 'JSON',
				data: data,
				success: function(res){
					form[0].reset();
					$('.date').data('DateTimePicker').clear();
					$('#addSchoolYear').modal('hide');
					self.renderYear();
				}
			};
			Core.request(req);
		},

		submitFormUpdate: function(e) {
			e.preventDefault();
			var form = $(e.currentTarget);
			var data = form.serialize();

			var self = this;
			var req = {
				url: App.updateSchoolYearUrl,
				type: 'POST',
				dataType: 'JSON',
				data: data,
				success: function(res){
					form[0].reset();
					$('#update label[name=syId]').text('');
					$('.date').data('DateTimePicker').clear();
					self.renderYear();
				}
			};
			Core.request(req);
		},

		deleteSchoolYear: function(){
			var schoolyear = $('#sylist option:selected').val();
			if (schoolyear == undefined) return;

			var startsy = schoolyear.split(" - ")[0];
			var action = confirm("Are you sure?");
			if (!action) return;

			var req = new Array();
			req.url = App.deleteSchoolYearUrl;
			req.type = "POST";
			req.data = {'start_sy': startsy};
			req.dataType = "JSON";
			var self = this;
			req.success = function(res){
				if(res == 1){
					$('#update')[0].reset();
					$('#update label[name=syId]').text('');
					self.renderYear();
				}else{
					alert("Error Occur!");
				}
			}
			Core.request(req);
		},

		IfNotSyExist: function(year){
			return ($.inArray(year, this.years) === -1);
		},

		cleanUpEvents: function(){

		}
	});

return SchoolYearView;

});