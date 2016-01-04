define(['jquery', 'backbone', 'bootstrap', 'datePicker', 'bootstrap-dialog', 'underscore'], function($, Backbone, BootstrapDialog){

	var HolidayRecordView = Backbone.View.extend({

		events: {
			'change select#yearList' : 'renderHoliday',
			'submit #add' : 'submitFormAdd',
			'click button#remove' : 'deleteHoliday'
			
		},

		templateName: 'HolidayRecordTemplate',

		initialize: function(){
			this.render();
		},

		render: function(){
			var template = _.template(Core.templates[this.templateName]);
			this.$el.html(template());
			$('#datetime-from').datetimepicker();
			$('#datetime-to').datetimepicker();
			this.generateYearList();
			this.renderHoliday();
		},

		renderHoliday: function(){
			var currYear =  $('#yearList :selected').val();
			$('form')[0].reset();

			$('.main #holidaylist').empty();
			var req = new Array();
			req.url = App.getHolidayListByYearUrl;
			req.dataType = "JSON";
			req.data = {'year':currYear};
			var self = this;
			req.success = function(res){
				var tmp = '<% _.each(holidaylist, function(r) { %>\
							<% var d = new Date(r.start_date);  %>\
							<% var date = Core.getMonth(d.getMonth())+" "+d.getDate(); %>\
							<option value="<%- r.id %>"><%- date+": "+r.description %></option>\
						<% }); %>';
				$('.main #holidaylist').append(_.template(tmp)({holidaylist:res}));
	  		}
			Core.request(req);
		},

		generateYearList: function(){
			$('#yearList').empty();
			var current = (new Date).getFullYear();
			var limit = 10;
			var year = current;
			for(var i=0; i<limit; i++) {
				year = current - i;
			    $('#yearList').append('<option value='+year+'>'+year+'</option>');
			}
		},

		submitFormAdd: function(e){
			var $inputs = $('#add :input');
		    var values = {};
		    var data = {};
		    $inputs.each(function() {
		        values[this.name] = $(this).val();
		    });

		    data.start_date = Core.toYMD(values.from);
		    data.end_date = Core.toYMD(values.to);
		    data.description = values.description;
		    data.start_sy = new Date(values.from).getFullYear();
		    data.end_sy = new Date(values.to).getFullYear();
		    data.term = $('.top-drop select#term :selected').val();

			console.log(data);

		    var req = new Array();
			req.url = App.addNewHolidayUrl;
			req.type = "POST";
			req.dataType = "JSON";
			req.data = data;
			var self = this;
			req.success = function(res){
				if(res == 1){
					alert("Success!");
					self.renderHoliday();
				}else{
					alert("Error Occur!");
				}
			}
			Core.request(req);
		},

		deleteHoliday: function(e) {
			$('form')[0].reset();
			var id = $('.main #holidaylist :selected').val();
			if(id == undefined){
				alert('No selected holiday.');
				return false;
			}

			var action = confirm("Are you sure?");
			if (action) {
				var req = new Array();
				req.url = App.deleteHolidayUrl;
				req.type = "POST";
				req.data = {'id': id};
				req.dataType = "JSON";
				var self = this;
				req.success = function(res){
					if(res == 1){
						alert("Success!");
						self.renderHoliday();
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

return HolidayRecordView;

});