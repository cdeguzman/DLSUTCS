define(['jquery', 'backbone'], function($, Backbone){

var ClassScheduleView = Backbone.View.extend({

		templateName: 'ClassScheduleTemplate',
		
		events: {
			'click button.btn-danger': 'deleteSchedule',
			'submit #addschedule': 'addSchedule',
			'change input[name=schedule]': 'setSchedule'
		},

		subViews: [],

		initialize: function(options){
			this.isFaculty = options.page=='faculty';
			this.userid = options.userid;
			this.scode = options.scode;
			this.render();
		},

		render: function(){
			var template = _.template(Core.templates[this.templateName]);
			this.$el.html(template());
			this.renderScheduleList();
		},

		renderScheduleList: function(){
			var table = $('#schedule');
			table.find('tbody').empty();
			var req = {
				url: this.isFaculty ? App.getFacultyClassSchedUrl : App.getStudentClassSchedUrl,
				data: {fid:this.userid, sid:this.userid, scode:this.scode},
				type: 'GET',
				dataType: 'JSON',
				success: function(res){
					var tmp = '<% _.each(scheduleList, function(r) { %>\
						<tr data-id="<%= r.id %>">\
							<td><%- Core.formatTime(r.start_time) %>-<%- Core.formatTime(r.end_time) %></td>\
							<td><%- Core.getDay(r.day) %></td>\
							<td><%- r.description %></td>\
							<td><button class="btn btn-danger" data-id="<%= r.id %>"><span class="glyphicon glyphicon-remove icon-white""></span></button></td>\
						</tr>\
					<% }); %>';
					table.find('tbody').append(_.template(tmp)({scheduleList:res}));
				}
			};
			Core.request(req);
		},

		deleteSchedule: function(e){
			var action = confirm("Are you sure?");
			if (action) {
				var self = this;
				var $target = $(e.currentTarget);
				var id = $target.attr('data-id');
				var req = {
					url: this.isFaculty ? App.deleteFacultySchedUrl : App.deleteStudentSchedUrl,
					data: {id:id},
					type: 'GET',
					dataType: 'JSON',
					success: function(res) {
						if(res){
							$('#schedule tr[data-id='+id+']').remove();
						}
					},
					fail: function() {
						alert('Error Occur!');
					}
				}
				Core.request(req);
			}
		},
		
		addSchedule: function(e) {
			e.preventDefault();
			var self = this;
			var sched = $('input[name=schedule]').val();
			var days = $('select[name=days]').val();
			var date = $('input[name=date]').val();
			var start = $('input[name=starttime]').val();
			var end = $('input[name=endtime]').val();
			var desc = $('input[name=description]').val();
			var startsy = $('#schoolyearmain').val();
			var endsy = parseInt(startsy)+1;
			var term = $('#term').val();
			var data = {
				start_sy: startsy,
				end_sy: endsy,
				term: term,
				faculty_id: this.userid,
				student_id: this.userid,
				spec_date: Core.removeNonNumeric(date),
				start_time: Core.removeNonNumeric(start),
				end_time: Core.removeNonNumeric(end),
				preferred_thesis_schedule: sched,
				description: desc,
				day: days[0]
			};
			var req = {
				url: this.isFaculty ? App.addFacultyClassSchedUrl : App.addStudentClassSchedUrl,
				data: data,
				type: 'POST',
				dataType: 'JSON',
				success: function(res) {
					self.renderScheduleList();
				}
			}
			console.log(req);
			Core.request(req);
			$('#addschedule')[0].reset();
		},

		setSchedule: function(e) {
			var sched = e.currentTarget.value;
			if(sched==0) {
				// specific date
				$('select[name=days]').prop('required',1);
				$('input[name=date]').prop('required',0);
			} else if(sched==1) {
				// weekly
				$('input[name=date]').prop('required',1);
				$('select[name=days]').prop('required',0);
			}
		},
		
		cleanUpEvents: function(){

		}
	});

	return ClassScheduleView;

});