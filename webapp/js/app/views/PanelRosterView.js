
define(['jquery', 'backbone', 'bootstrap', 'datePicker', 'bootstrap-dialog'], function($, Backbone, BootstrapDialog){

	var PanelRosterView = Backbone.View.extend({

		templateName: 'PanelRosterTemplate',
		
		events: {
			'change #departmentlist': 'changeRoster',
			'change #statuslist': 'changeRoster',
			'click button#add': 'addPanelRoster',
			'click button#remove': 'deletePanelRoster'
		},

		initialize: function(){
			var self = this;
			this.render();
			var self = this;
			$("#mainContainer").on("click", "button#deleteFaculty", function(e){
				self.showDeleteDialog();
			});
		},

		render: function(){
			var template = _.template(Core.templates[this.templateName]);
			this.$el.html(template());
			this.renderDepartments();
			this.renderStatuses();
			this.renderPanelRosters();
		},

		renderDepartments: function() {
			var req = {
				url: App.getDeptListUrl,
				dataType: 'JSON',
				type: 'GET',
				success: function(res) {
					var department = $('#departmentlist');
					department.empty();
					department.append('<option data-code="all">All</option>');
					var tmp = '<% _.each(departments, function(r) { %>\
						<option data-code="<%= r.code %>"><%= r.code %> - <%= r.name %></option>\
					<% }); %>';
					department.append(_.template(tmp)({departments:res}));
				}
			};
			Core.request(req);
		},

		renderStatuses: function() {
			var req = {
				url: App.getFacultyStatusListUrl,
				dataType: 'JSON',
				type: 'GET',
				success: function(res) {
					var status = $('#statuslist');
					status.empty();
					status.append('<option data-code="all">All</option>');
					var tmp = '<% _.each(statusList, function(r) { %>\
						<option data-code="<%= r.code %>"><%= r.code %> - <%= r.name %></option>\
					<% }); %>';
					status.append(_.template(tmp)({statusList:res}));
				}
			};
			Core.request(req);
		},

		renderPanelRosters: function() {
			var self = this;
			var req = {
				url: App.getPanelRosterListUrl,
				dataType: 'JSON',
				type: 'GET',
				success: function(res) {
					var deptCode = $('#departmentlist option:selected').data('code');
					var statusCode = $('#statuslist option:selected').data('code');
					var filter = {};
					if (deptCode != 'all') filter.department_code = deptCode;
					if (statusCode != 'all') filter.faculty_status_code = statusCode;
					var filteredPanels = _.where(res, filter);
					var panel = $('#panellist');
					var tmp = '<% _.each(panelList, function(r) { %>\
						<option data-id="<%= r.faculty_id %>"><%= r.faculty_name %></option>\
					<% }); %>';
					panel.empty();
					panel.append(_.template(tmp)({panelList:filteredPanels}));
					self.renderFacultyList();
				}
			};
			Core.request(req);
		},

		renderFacultyList: function() {
			var req = {
				url: App.getFacultyListUrl,
				dataType: 'JSON',
				type: 'GET',
				success: function(res) {
					var facultyIds = [];
					$('#panellist option').each(function() {
						facultyIds.push($(this).data('id'));
					});
					var filteredFacultyList = _.reject(res, function(faculty){
						return _.contains(facultyIds, parseInt(faculty.id));
					});
					var deptCode = $('#departmentlist option:selected').data('code');
					var statusCode = $('#statuslist option:selected').data('code');
					var filter = {};
					if (deptCode != 'all') filter.department_code = deptCode;
					if (statusCode != 'all') filter.faculty_status_code = statusCode
					var filteredFaculty  = _.where(filteredFacultyList, filter);
					var faculty = $('#facultylist');
					var tmp = '<% _.each(facultyList, function(r) { %>\
						<option data-id="<%= r.id %>"><%= r.lname %>, <%= r.fname %> <%= r.mi %></option>\
					<% }); %>';
					faculty.empty();
					faculty.append(_.template(tmp)({facultyList:filteredFaculty}));
				}
			};
			Core.request(req);
		},

		changeRoster: function(e) {
			e.preventDefault();
			this.renderPanelRosters();
		},

		addPanelRoster: function(e) {
			e.preventDefault();
			var self = this;
			var selectedFaculty = $('#facultylist option:selected')
			var selectedFacultyId = selectedFaculty.data('id');
			if (selectedFacultyId == undefined) return;

			var action = confirm("Are you sure?");
			if (!action) return;

			var req = {
				url: App.addPanelRosterUrl,
				dataType: 'JSON',
				type: 'POST',
				data: {'faculty_id': selectedFacultyId},
				success: function(res) {
					self.renderPanelRosters();
				}
			};
			Core.request(req);
		},

		deletePanelRoster: function(e) {
			e.preventDefault();
			var self = this;
			var selectedFaculty = $('#panellist option:selected');
			var selectedFacultyId = selectedFaculty.data('id');
			if (selectedFacultyId == undefined) return;

			var action = confirm("Are you sure?");
			if (!action) return;

			var req = {
				url: App.deletePanelRosterUrl,
				dataType: 'JSON',
				type: 'POST',
				data: {'id': selectedFacultyId},
				success: function(res) {
					self.renderPanelRosters();
				}
			};
			Core.request(req);
		},

		cleanUpEvents: function(){

		}
	});

return PanelRosterView;

});