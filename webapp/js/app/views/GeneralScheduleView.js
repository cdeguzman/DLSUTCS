/**
	LoginView.js
	*/
	define(['jquery', 'backbone', 'bootstrap', 'datePicker', 'bootstrap-dialog'], function($, Backbone, BootstrapDialog){

		var GeneralScheduleView = Backbone.View.extend({

			templateName: 'GeneralScheduleTemplate',

			events: {
				'click button#addTime': 'addTime',
				'click button#removeTime': 'removeTime',
				'change #daylist': 'renderTimeListEvent'
			},

			initialize: function(){
				this.render();
			},

			render: function(){
				var template = _.template(Core.templates[this.templateName]);
				this.$el.html(template());
				this.renderDayList();
			},

			renderDayList: function(){
				var days = [
					'Monday', 
					'Tuesday', 
					'Wednesday', 
					'Thursday', 
					'Friday', 
					'Saturday', 
					'Sunday'
				];
				var daylist = $('#daylist');
				daylist.empty();
				_.each(days, function(day, i){
					daylist.append('<option value="' + (i+1) + '">' + day + '</option>');
				});
			},

			renderTimeListEvent: function(e){
				e.preventDefault();
				this.renderTimeList();
			},

			renderTimeList: function() {
				var day = $('#daylist option:selected').val();
				if (day == undefined) return;

				var req = {
					url: App.getTimeListUrl,
					dataType: 'JSON',
					data: {day:day},
					success: function(res){
						var tmp = '<% _.each(timeList, function(r){ %>\
							<option value="<%= r.id %>"><%= r.start_time %></option>\
						<% }); %>';
						$('#starttimelist').empty().append(_.template(tmp)({timeList:res}));
					}
				};
				Core.request(req);
			},

			addTime: function(e){
				e.preventDefault();
				var time = $('input[name=time]').val();
				var day = $('#daylist option:selected').val();
				if (time == "" || day == undefined) return;

				var self = this;
				var req = {
					url: App.addNewGenSchedUrl,
					type: 'POST',
					dataType: 'JSON',
					data: {day:day, start_time:time.replace(':','')},
					success: function(res){
						$('input[name=time]').val('');
						self.renderTimeList();
					}
				};
				Core.request(req);
			},

			removeTime: function(e){
				e.preventDefault();
				var id = $('#starttimelist option:selected').val();
				if (id == undefined) return;

				var self = this;
				var req = {
					url: App.deleteGenSchedUrl,
					dataType: 'JSON',
					data: {id:id},
					success:function(res){
						self.renderTimeList();
					}
				};
				Core.request(req);
			},

			cleanUpEvents: function(){

			}
		});

return GeneralScheduleView;

});