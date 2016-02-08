define(['jquery', 'backbone', 'bootstrap', 'datePicker', 'bootstrap-dialog'], function($, Backbone, BootstrapDialog){

	var SchoolYearView = Backbone.View.extend({

		events: {
			'submit #update' : 'submitFormUpdate',
			'submit #add' : 'submitFormAdd',
			'click #sylist option' : 'fillForm',
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

			$('.main #fterm_from_add').datetimepicker();
			$('.main #fterm_to_add').datetimepicker();
			$('.main #sterm_from_add').datetimepicker();
			$('.main #sterm_to_add').datetimepicker();
			$('.main #tterm_from_add').datetimepicker();
			$('.main #tterm_to_add').datetimepicker();

			$('#addSchoolYear #fterm_from_add').datetimepicker();
			$('#addSchoolYear #fterm_to_add').datetimepicker();
			$('#addSchoolYear #sterm_from_add').datetimepicker();
			$('#addSchoolYear #sterm_to_add').datetimepicker();
			$('#addSchoolYear #tterm_from_add').datetimepicker();
			$('#addSchoolYear #tterm_to_add').datetimepicker();

			this.renderYear();
		},

		renderYear: function(){
			$('#sylist').empty();
			var req = new Array();
			req.url = App.getSchoolYearListUrl;
			req.dataType = "JSON";
			var self = this;
			var temp = new Array();
			req.success = function(res){
				$.each(res, function(i, r) {
					var isYearExist = ($.inArray(r.start_sy, temp) === -1);
					if(i==0) isYearExist = true;
					if(isYearExist){
						if($.inArray(r.start_sy, temp) === -1) temp.push(r.start_sy);
						self.years.push(r.start_sy);
						$('#sylist').append('<option value='+r.start_sy+'>'+r.start_sy+' - '+r.end_sy+'</option>');
					}
				});
			}
			Core.request(req);
		},

		fillForm: function(){
			var fid = $(' #sylist :selected').val();

			$('label[name="syId"]').text(fid+" - "+(parseInt(fid)+1));
			$('input[name="syId"]').val(fid);

			
			var req = new Array();
			req.url = App.getSchoolYearBySYUrl;
			req.type = "GET"
			req.dataType = "JSON";
			req.data = {'start_sy': fid, 'term': 1};
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
			req.data = {'start_sy': fid, 'term': 2};
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
			req.data = {'start_sy': fid, 'term': 3};
			req.success = function(res){
				_.each(res, function(r) { 
					$('.main input[name="tterm_from_add"]').val(r.start_date);
					$('.main input[name="tterm_to_add"]').val(r.end_date);
				});
			}
			Core.request(req);
			

		},

		submitFormAdd: function() {
			var $inputs = $('#addSchoolYear :input');
			var values = {};
			$inputs.each(function() {
				values[this.name] = $(this).val();
			});

			values.fterm_from_add = Core.toYMD(values.fterm_from_add);
			values.fterm_to_add = Core.toYMD(values.fterm_to_add);
			values.sterm_from_add = Core.toYMD(values.sterm_from_add);
			values.sterm_to_add = Core.toYMD(values.sterm_to_add);
			values.tterm_from_add = Core.toYMD(values.tterm_from_add);
			values.tterm_to_add = Core.toYMD(values.tterm_to_add);

			
			if(this.IfNotSyExist(values.start_sy)){
				var req = new Array();
				req.url = App.addNewSchoolYearUrl;
				req.type = "POST";
				req.data = values;
				req.dataType = "JSON";
				var self = this;
				req.success = function(res){
					if(res == 3){
						alert("Success!");
						self.renderYear();
						$('#addSchoolYear').modal('hide');
					}else{
						alert("Error Occur!");
					}
				}
				Core.request(req);
				$('form')[0].reset();
			}else{
				alert("School Year already exists");
			}
			
		},

		submitFormUpdate: function() {
			var $inputs = $('.main :input');
			var values = {};
			$inputs.each(function() {
				values[this.name] = $(this).val();
			});

			values.fterm_from_add = Core.toYMD(values.fterm_from_add);
			values.fterm_to_add = Core.toYMD(values.fterm_to_add);
			values.sterm_from_add = Core.toYMD(values.sterm_from_add);
			values.sterm_to_add = Core.toYMD(values.sterm_to_add);
			values.tterm_from_add = Core.toYMD(values.tterm_from_add);
			values.tterm_to_add = Core.toYMD(values.tterm_to_add);

			var req = new Array();
			req.url = App.updateSchoolYearUrl;
			req.type = "POST";
			req.data = values;
			req.dataType = "JSON";
			var self = this;
			req.success = function(res){
				if(res == 3){
					alert("Success!");
					self.renderYear();
				}else{
					alert("Error Occur!");
				}
			}
			Core.request(req);
			$('form')[0].reset();
			
		},

		deleteSchoolYear: function(){
			$('form')[0].reset();
			$('label[name="syId"]').text("");
			var id = $('select#sylist :selected').val();
			if(id == undefined){
				alert('No selected year.');
				return false;
			}

			var action = confirm("Are you sure?");
			if (action) {
				var req = new Array();
				req.url = App.deleteSchoolYearUrl;
				req.type = "POST";
				req.data = {'start_sy': id};
				req.dataType = "JSON";
				var self = this;
				req.success = function(res){
					if(res == 1){
						alert("Success!");
						self.renderYear();
					}else{
						alert("Error Occur!");
					}
				}
				Core.request(req);
			}
		},

		IfNotSyExist: function(year){
			return ($.inArray(year, this.years) === -1);
		},

		cleanUpEvents: function(){

		}
	});

return SchoolYearView;

});