/**
	LoginView.js
	*/
	define(['jquery', 'backbone', 'bootstrap', 'datePicker', 'bootstrap-dialog'], function($, Backbone, BootstrapDialog){

		var FlowchartRecordView = Backbone.View.extend({

			events: {
				'submit #add': 'addFlowchart',
				'submit #general': 'updateFlowchart',
				'change #flowchartlist': 'renderGeneralInformation',
				'change #courselist': 'renderFlowchartPrereqList',
				'click button#deleteflowchart': 'deleteFlowchart',
				'click button#addFlowchartCourse': 'addFlowchartCourse',
				'click button#removeFlowchartCourse': 'removeFlowchartCourse',
				'click button#addFlowchartPrereq': 'addFlowchartPrereq',
				'click button#removeFlowchartPrereq': 'removeFlowchartPrereq',
			},

			templateName: 'FlowchartRecordTemplate',

			initialize: function(){
				this.render();
			},

			render: function(){
				var template = _.template(Core.templates[this.templateName]);
				this.$el.html(template());
				this.clearGeneralInformation();
				this.renderFlowchartList();
				this.renderSpecializationList();
			},

			renderFlowchartList: function() {
				var req = {
					url: App.getFlowchartListUrl,
					type: 'GET',
					dataType: 'JSON',
					success: function(res) {
						var tmp = '<% _.each(flowchartList, function(r){ %>\
							<option value="<%= r.version %>"><%- r.name + "(" + r.specialization + ")" %></option>\
						<% }); %>';
						$('#flowchartlist').empty().append(_.template(tmp)({flowchartList:res}));
					}
				};
				Core.request(req);
			},

			renderSpecializationList: function() {
				var req = {
					url: App.getSpecializationUrl,
					type: 'GET',
					dataType: 'JSON',
					success: function(res) {
						var tmp = '<% _.each(specializationList, function(r){ %>\
							<option value="<%- r.code %>"><%- r.name %></option>\
						<% }); %>';
						$('#addflowchart select[name=specialization_code]').empty().append(_.template(tmp)({specializationList:res}));
					}
				};
				Core.request(req);
			},

			renderGeneralInformation: function(e) {
				e.preventDefault();
				var version = $(e.currentTarget).find('option:selected').val();
				if (version == undefined) {
					this.clearGeneralInformation();
					return;
				}
				var self = this;
				var req = {
					url: App.getSelectedFlowchartUrl,
					type: 'GET',
					dataType: 'JSON',
					data: {version:version},
					success: function(res) {
						var general = $('#general');
						_.each(res, function(r){
							general.find('input[name=id]').val(r.version);
							general.find('label[name=version] u').text(r.version);
							general.find('input[name=specialization_code]').val(r.specialization_code);
							general.find('label[name=specialization] u').text(r.specialization_code);
							general.find('input[name=name]').val(r.name);
							general.find('input[name=description]').val(r.description);
						});
						self.renderFlowchartCourseList();
					}
				};
				Core.request(req);
			},

			renderFlowchartCourseList: function() {
				var version = $('#flowchartlist option:selected').val();
				if (version == undefined) return;

				var self = this;
				var req = {
					url: App.getCoursesFromFlowchartUrl,
					dataType: 'JSON',
					data: {
						flowchart_version: version
					},
					success: function(res) {
						var tmp = '<% _.each(courseList, function(r) { %>\
								<option value="<%= r.id %>"><%= r.course_code %></option>\
							<% }); %>';
						$('#courselist').empty().append(_.template(tmp)({courseList:res}));
						self.renderCourseList();
					}
				};
				Core.request(req);
			},

			renderCourseList: function() {
				var self = this;
				var req = {
					url: App.getCourseListUrl,
					dataType: 'JSON',
					success: function(res) {
						var flowchartCourses = $('#courselist option').map(function(){
							return this.text;
						});
						var courses = _.reject(res, function(r){
							return _.contains(flowchartCourses, r.code);
						});
						var tmp = '<% _.each(courseList, function(r) { %>\
								<option><%= r.code %></option>\
							<% }); %>';
						$('#courses').empty().append(_.template(tmp)({courseList:courses}));
					}
				}
				Core.request(req);
			},

			renderFlowchartPrereqList: function(e) {
				var courseCode = $('#courselist option:selected').text();
				if (courseCode == "") {
					$('#prerequisitelist').empty();
					$('#prerequisite').empty();
					return;
				}
				var flowchartVersion = $('#general input[name=id]').val();
				var self = this;
				var req = {
					url: App.getPrereqFlowchartCourseUrl,
					dataType: 'JSON',
					data: {
						course_code: courseCode,
						flowchart_version: flowchartVersion
					},
					success: function(res) {
						var tmp = '<% _.each(prereqList, function(r) { %>\
								<option value="<%= r.id %>"><%= r.prerequisite_code %></option>\
							<% }); %>';
						$('#prerequisitelist').empty().append(_.template(tmp)({prereqList:res}));
						self.renderPrereqList();
					}
				};
				Core.request(req);
			},

			renderPrereqList: function() {
				var version = $('#flowchartlist option:selected').val();
				if (version == undefined) return;

				var self = this;
				var req = {
					url: App.getCoursesFromFlowchartUrl,
					dataType: 'JSON',
					data: {
						flowchart_version: version
					},
					success: function(res) {
						var flowchartPrereq = $('#prerequisitelist option').map(function(){
							return this.text;
						});
						var selectedCourseCode = $('#courselist option:selected').text();
						console.log(selectedCourseCode);
						var prereqs = _.reject(res, function(r){
							return _.contains(flowchartPrereq, r.course_code) || r.course_code == selectedCourseCode;
						});

						var tmp = '<% _.each(prereqList, function(r) { %>\
								<option value="<%= r.id %>"><%= r.course_code %></option>\
							<% }); %>';
						$('#prerequisite').empty().append(_.template(tmp)({prereqList:prereqs}));
					}
				};
				Core.request(req);
			},

			clearGeneralInformation: function() {
				$('#general')[0].reset();
				$('#general label[name=version] u').text('');
				$('#general label[name=specialization] u').text('');
				$('#courselist').empty();
				$('#courses').empty();
				$('#prerequisite').empty();
				$('#prerequisitelist').empty();
			},

			addFlowchart: function(e) {
				e.preventDefault();
				var self = this;
				var form = $(e.currentTarget);
				var data = form.serialize();
				var req = {
					url: App.addFlowchartUrl,
					type: 'POST',
					dataType: 'JSON',
					data: data,
					success: function(res) {
						form[0].reset();
						$('#addflowchart').modal('hide');
						self.renderFlowchartList();
					}
				};
				Core.request(req);
			},

			updateFlowchart: function(e) {
				e.preventDefault();
				var data = $(e.currentTarget).serialize();
				var req = {
					url: App.updateFlowchartUrl,
					type: 'POST',
					dataType: 'JSON',
					data: data,
					success: function(res) {
						console.log(res);
					}
				};
				Core.request(req);
			},

			deleteFlowchart: function(e) {
				e.preventDefault();
				var id = $('#flowchartlist option:selected').val();
				if (id == undefined) return;

				var action = confirm('Are you sure?');
				if (!action) return;

				var self = this;
				var req = {
					url: App.deleteFlowchartUrl,
					dataType: 'JSON',
					data: {id:id},
					success: function(res) {
						self.renderFlowchartList();
						self.clearGeneralInformation();
					}
				};
				Core.request(req);
			},

			addFlowchartCourse: function(e) {
				e.preventDefault();
				var courseCode = $('#courses option:selected').val();
				var flowchartVersion = $('#general input[name=id]').val();
				var specializationCode = $('#general input[name=specialization_code]').val();
				var self = this;
				var req = {
					url: App.addCourseToFlowchartUrl,
					type: 'POST',
					dataType: 'JSON',
					data: {
						course_code: courseCode,
						flowchart_version: flowchartVersion,
						specialization_code: specializationCode
					},
					success: function(res) {
						self.renderFlowchartCourseList();
					}
				};
				Core.request(req);
			},

			removeFlowchartCourse: function(e) {
				e.preventDefault();
				var id = $('#courselist option:selected').val();
				if (id == undefined) return;

				var action = confirm('Are your sure?');
				if (!action) return;

				var self = this;
				var req = {
					url: App.deleteCourseFromFlowchartUrl,
					dataType: 'JSON',
					data: {id:id},
					success: function(res) {
						self.renderFlowchartCourseList();
						$('#prerequisitelist').empty();
						$('#prerequisite').empty();
					}
				};
				Core.request(req);
			},

			addFlowchartPrereq: function(e) {
				e.preventDefault();
				var courseCode = $('#courselist option:selected').text();
				var prerequisiteCode = $('#prerequisite option:selected').text();
				if (courseCode == "" || prerequisiteCode == "") return;

				var flowchartVersion = $('#general input[name=id]').val();
				var specializationCode = $('#general input[name=specialization_code]').val();
				var self = this;
				var req = {
					url: App.addFlowchartPrerequisiteUrl,
					type: 'POST',
					dataType: 'JSON',
					data: {
						course_code: courseCode,
						prerequisite_code: prerequisiteCode,
						flowchart_version: flowchartVersion,
						specialization_code: specializationCode
					},
					success: function(res) {
						self.renderFlowchartPrereqList();
					}
				};
				Core.request(req);
			},

			removeFlowchartPrereq: function(e) {
				e.preventDefault();
				var id = $('#prerequisitelist option:selected').val();
				if (id == undefined) return;

				var self = this;
				var req = {
					url: App.deletePrereqCourseFromFlowchartUrl,
					dataType: 'JSON',
					data: {id:id},
					success: function(res) {
						self.renderFlowchartPrereqList();
					}
				};
				Core.request(req);
			},

			cleanUpEvents: function(){

			}
		});

return FlowchartRecordView;

});