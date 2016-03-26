/**
	LoginView.js
	*/
	define(['jquery', 'backbone', 'bootstrap', 'datePicker', 'bootstrap-dialog'], function($, Backbone, BootstrapDialog){

		var CourseOfferingRecordView = Backbone.View.extend({

			templateName: 'CourseOfferingRecordTemplate',

			events: {
				'click button#add': 'addCourseOffering',
				'click button#remove': 'deleteCourseOffering',
				'click #addSection': 'addSection',
				'click button#deleteSection': 'deleteSection',
				'change #currentcourselist': 'renderGeneralInformation',
				'submit #schedule': 'updateCourseOffering',
				'dp.change .date': 'updateNote'
			},

			initialize: function(){
				this.render();
			},

			render: function(){
				var self = this;
				var template = _.template(Core.templates[this.templateName]);
				this.$el.html(template());
				$('#reg-deadline').datetimepicker();
				$('#start_date_of_regular_defense_dummy').datetimepicker({format:'YYYY/MM/DD'});
				$('#end_date_of_regular_defense_dummy').datetimepicker({format:'YYYY/MM/DD'});
				$('#redef').datetimepicker();
				$('#start_date_of_redefense_dummy').datetimepicker({format:'YYYY/MM/DD'});
				$('#end_date_of_redefense_dummy').datetimepicker({format:'YYYY/MM/DD'});
				$('#outstanding').datetimepicker();
				$('#start_date_of_outstanding_defense_dummy').datetimepicker({format:'YYYY/MM/DD'});
				$('#end_date_of_outstanding_defense_dummy').datetimepicker({format:'YYYY/MM/DD'});
				$('#deadline').datetimepicker();

				this.clearGeneralInformation();
				$('#schoolyear,#term').on('change', function(e){
					self.renderCourseOfferingList();
				});
				this.renderCourseOfferingList();
			},

			renderCourseOfferingList: function() {
				var start = $('#schoolyear option:selected').data('start');
				var end = $('#schoolyear option:selected').data('end');
				var term = $('#term option:selected').val();
				var self = this;
				var req = {
					url: App.getCourseOfferingListUrl,
					data: {
						start_sy: start,
						end_sy: end,
						term: term
					},
					dataType: 'JSON',
					success: function(res) {
						var tmp = '<% _.each(courseOfferingList, function(r) { %>\
								<option value="<%= r.id %>"><%= r.course_code %></option>\
							<% }); %>';
						$('#currentcourselist').empty().append(_.template(tmp)({courseOfferingList:res}));
						self.renderCourseList();
					}
				};
				Core.request(req);
			},

			renderCourseList: function() {
				var req = {
					url: App.getCourseListUrl,
					dataType: 'JSON',
					success: function(res) {
						var currentCourses = $('#currentcourselist option').map(function(course){
							return $(this).text();
						});
						var filterCourses = _.reject(res, function(course){
							return _.contains(currentCourses, course.code);
						});
						var tmp = '<% _.each(courseList, function(r) { %>\
								<option><%= r.code %></option>\
							<% }); %>';
						$('#courseofferedlist').empty().append(_.template(tmp)({courseList:filterCourses}));
					}
				};
				Core.request(req);
			},

			renderGeneralInformation: function(e) {
				e.preventDefault();
				var target = $(e.currentTarget);
				var id = target.find('option:selected').val();
				if (id == undefined) {
					this.clearGeneralInformation();
					return;
				}

				var code = target.find('option:selected').text();
				var self = this;
				var req = {
					url: App.getSelectedCourseOfferingUrl,
					dataType: 'JSON',
					data: {
						id: id,
						code: code
					},
					success: function(res) {
						var course = res[0];
						$('#schedule input').each(function(input){
							var key = $(this).attr('name');
							if (course.hasOwnProperty(key)) {
								$(this).val(course[key]);
							}
							if (key == $('#schedule label').attr('for')) {
								$('#schedule label[for=code] u').text(course[key]);
							}
						});
						self.renderSectionList(code);
					}
				};
				Core.request(req);
			},

			renderSectionList: function(code) {
				var start = $('#schoolyear option:selected').data('start');
				var end = $('#schoolyear option:selected').data('end');
				var term = $('#term option:selected').val();
				var req = {
					url: App.getCourseSectionUrl,
					dataType: 'JSON',
					data: {
						code: code,
						start_sy: start,
						end_sy: end,
						term: term
					},
					success: function(res){
						var tmp = '<% _.each(sectionList, function(r) { %>\
								<option value="<%= r.id %>"><%= r.section %></option>\
							<% }); %>';
						$('#sectionlist').empty().append(_.template(tmp)({sectionList:res}));
					}
				};
				Core.request(req);
			},

			clearGeneralInformation: function() {
				$('#schedule')[0].reset();
				$('#schedule input[name=code]').val('');
				$('#schedule input[name=id]').val('');
				$('#schedule label[for=code] u').text('');
				$('#sectionlist').empty();
				$('label u').text('');
			},

			addCourseOffering: function(e) {
				e.preventDefault();
				var code = $('#courseofferedlist option:selected').val();
				if (code == undefined) return;

				var self = this;
				var req = {
					url: App.getSelectedCourseUrl,
					dataType: 'JSON',
					data: {code:code},
					success: function(res){
						self.insertCourseOffering(res[0]);
					}
				};
				Core.request(req);
			},

			insertCourseOffering: function(course) {

				var start = $('#schoolyear option:selected').data('start');
				var end = $('#schoolyear option:selected').data('end');
				var term = $('#term').val();
				var self = this;
				var req = {
					url: App.addCourseOfferingDetailsUrl,
					type: 'POST',
					dataType: 'JSON',
					data: {
						code: course.code,
						start_sy: start,
						end_sy: end,
						term: term,
						date_of_regular_defense_deliverable: '',
						time_of_regular_defense_deliverable: '',
						location_of_regular_defense_deliverable: '',
						start_date_of_regular_defense: '',
						end_date_of_regular_defense: '',
						date_of_redefense_deliverable: '',
						time_of_redefense_deliverable: '',
						location_of_redefense_deliverable: '',
						start_date_of_redefense: '',
						end_date_of_redefense: '',
						date_of_outstanding_defense_deliverable: '',
						time_of_outstanding_defense_deliverable: '',
						location_of_outstanding_defense_deliverable: '',
						start_date_of_outstanding_defense: '',
						end_date_of_outstanding_defense: ''
					},
					success: function(res){
						self.renderCourseOfferingList();
					}
				};
				Core.request(req);
			},

			updateCourseOffering: function(e) {
				e.preventDefault();
				if ($('#currentcourselist option:selected').val() == undefined) return;

				var temp = $('#schedule').serialize();
				var data = temp.split("&");
				data.push("date_of_regular_defense_deliverable=" + Core.parseDate($('#schedule input[name=reg-deadline]').val()));
				data.push("time_of_regular_defense_deliverable=" + Core.parseTime($('#schedule input[name=reg-deadline]').val()));
				data.push("date_of_redefense_deliverable=" + Core.parseDate($('#schedule input[name=redef]').val()));
				data.push("time_of_redefense_deliverable=" + Core.parseTime($('#schedule input[name=redef]').val()));
				data.push("date_of_outstanding_defense_deliverable=" + Core.parseDate($('#schedule input[name=outstanding]').val()));
				data.push("time_of_outstanding_defense_deliverable=" + Core.parseTime($('#schedule input[name=outstanding]').val()));
				data.push("start_date_of_regular_defense=" + Core.parseDate($('#schedule input[name=start_date_of_regular_defense_dummy]').val()));
				data.push("end_date_of_regular_defense=" + Core.parseDate($('#schedule input[name=end_date_of_regular_defense_dummy]').val()));
				data.push("start_date_of_redefense=" + Core.parseDate($('#schedule input[name=start_date_of_redefense_dummy]').val()));
				data.push("end_date_of_redefense=" + Core.parseDate($('#schedule input[name=end_date_of_redefense_dummy]').val()));
				data.push("start_date_of_outstanding_defense=" + Core.parseDate($('#schedule input[name=start_date_of_outstanding_defense_dummy]').val()));
				data.push("end_date_of_outstanding_defense=" + Core.parseDate($('#schedule input[name=end_date_of_outstanding_defense_dummy]').val()));

				var req = {
					url: App.updateCourseOfferingUrl,
					type: 'POST',
					dataType: 'JSON',
					data: data.join("&"),
					success: function(res){
						console.log(res);
					}
				};
				Core.request(req);
			},

			deleteCourseOffering: function(e) {
				e.preventDefault();
				var id = $('#currentcourselist option:selected').val();
				if (id == undefined) return;

				var self = this;
				var req = {
					url: App.deleteCourseOfferingUrl,
					dataType: 'JSON',
					data: {id:id},
					success: function(res) {
						self.renderCourseOfferingList();
					}
				};
				Core.request(req);
			},

			addSection: function(e){
				e.preventDefault();
				var section = $('#section').val();
				var code = $('#currentcourselist option:selected').text();
				if (section == "" || code == "") return;

				var start = $('#schoolyear option:selected').data('start');
				var end = $('#schoolyear option:selected').data('end');
				var term = $('#term option:selected').val();
				var self = this;
				var req = {
					url: App.addCourseOfferingSectionUrl,
					type: 'POST',
					dataType: 'JSON',
					data: {
						section: section,
						course_code: code,
						start_sy: start,
						end_sy: end,
						term: term
					},
					success: function(res) {
						$('#section').val('');
						self.renderSectionList(code);
					}
				};
				Core.request(req);
			},

			deleteSection: function(e){
				e.preventDefault();
				var id = $('#sectionlist option:selected').val();
				if (id == undefined) return;

				var self = this;
				var req = {
					url: App.deleteCourseOfferingSectionUrl,
					dataType: 'JSON',
					data: {id:id},
					success: function(res) {
						self.renderSectionList($('#courselist option:selected').text());
					}
				};
				Core.request(req);
			},

			updateNote: function(e){
				var prefix = e.currentTarget.id;
				var suffix;
				var note;
				if (_.contains(['reg-deadline','redef','outstanding','deadline'], prefix)) {
					suffix = '-note';
					note = Core.getWeekAndDay(e.date._d);
				} else {
					var to, from, 
						id = 'input[name=' + prefix + ']';
					if (prefix.startsWith("start")) {
						to = $(id).val();
						from = $(id.replace("start","end")).val() || new Date();
					} else {
						from = $(id).val();
						to = $(id.replace("end","start")).val() || new Date();
					}
					console.log(to);
					console.log(from);
					note = Core.getWeekAndDay(new Date(to)) + " to " + Core.getWeekAndDay(new Date(from));
					suffix = "";
					prefix = prefix.substr(prefix.indexOf("_")+1);
				}
				var selector = 'label[name=' + prefix + suffix + '] u';
				console.log(selector);
				$(selector).text(note);
			},

			cleanUpEvents: function(){

			}
		});

return CourseOfferingRecordView;

});