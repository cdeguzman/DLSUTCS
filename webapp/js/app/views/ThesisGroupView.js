define(['jquery', 'backbone', 'bootstrap', 'datePicker', 'bootstrap-dialog'], function($, Backbone, BootstrapDialog){

	var ThesisGroupView = Backbone.View.extend({

		events: {
			'change #years': 'renderThesisGroups',
			'change #group': 'renderThesisGroup',
			'change #specializations': 'renderProponents',
			'submit #add': 'addThesisGroup',
			'submit #update': 'updateThesisGroup',
			'click button#remove': 'removeThesisGroup',
			'click button#addproponents': 'addProponents',
			'click button#removeproponents': 'deleteProponents',
			'click button#addthesisarea': 'addThesisArea',
			'click button#removethesisarea': 'removeThesisArea',
			'click button#increase': 'increase',
			'click button#decrease': 'decrease',
			'show.bs.modal #addThesisGroup': 'showAddForm',
		},

		templateName: 'ThesisGroupTemplate',

		initialize: function(){
			this.render();
		},

		render: function(){
			var template = _.template(Core.templates[this.templateName]);
			this.$el.html(template());
			this.renderSchoolyears();
			this.renderAdvisers();
		},

		renderSchoolyears: function(){
			var self = this;
			var req = {
				url: App.getDistinctSchoolYearUrl,
				dataType: 'JSON',
				success: function(res){
					var template = '<% _.each(schoolyears, function(sy){ %>\
						<option><%= sy.schoolyear %></option>\
					<% }); %>';
					$('#years').html(_.template(template)({schoolyears:res}));
					self.renderThesisGroups();
				}
			};
			Core.request(req);
		},

		renderThesisGroups: function(){
			var selected = $('#years option:selected').val();
			if (selected == undefined) return;

			var schoolyear = selected.split(" - ");
			var sy1 = schoolyear[0];
			var sy2 = schoolyear[1];

			var self = this;
	  	var req = {
	  		url: App.getThesisListurl,
	  		dataType: 'JSON',
	  		data: {
	  			start_sy: sy1,
	  			end_sy: sy2
	  		},
	  		success:function(res){
					var tmp = '<% _.each(thesisList, function(r) { %>\
									<option value="<%- r.id %>"><%- r.primary_name %></option>\
								<% }); %>';
					$('#group').html(_.template(tmp)({thesisList:res}));
					self.clearView();
	  		}
	  	};
			Core.request(req);
		},

		clearView: function(){
			var form = $('#update');
			form[0].reset();
			form.find('select[name=schoolyear]').empty();
			form.find('select[name=termcompleted]').empty();
			form.find('select[name=adviser]').empty();
			form.find('select[name=proposalabstract]').empty();
			form.find('select[name=finalabstract]').empty();
			$('#proponents').empty();
			$('#specializations').empty();
			$('#students').empty();
			$('#thesisareas').empty();
			$('#areas').empty();
		},

		renderAdvisers: function(){
			var req = {
				url: App.getAdviserRosterListUrl,
				dataType: 'JSON',
				success:function(res){
					var template = '<% _.each(advisers, function(adviser){ %>\
						<option value="<%- adviser.faculty_id %>"><%- adviser.faculty_name %></option>\
					<% }); %>';
					$('select[name=faculty_id]').html(_.template(template)({advisers:res}));
				}
			};
			Core.request(req);
		},

		renderThesisGroup: function(){
			var id = $('#group option:selected').val();
			if (id == undefined) {
				this.clearView();
				return;
			}
			var self = this;
			var req = new Array();
			req.url = App.getThesisWithAdviserUrl;
			req.type = "GET"
			req.data = {'id': id};
			req.dataType = "JSON";
			req.success = function(res){
				_.each(res, function(r) { 
					$('.main label[name="thesisid"]').text(r.id);
					$('.main input[name="primary_name"]').val(r.primary_name);
					$('.main input[name="secondary_name"]').val(r.secondary_name);
					$('.main input[name="description"]').val(r.description);
					$('.main select[name="schoolyear"]').append('<option value='+r.start_sy+','+r.end_sy+'>'+r.start_sy+' - '+r.end_sy+'</option>');
					$('.main select[name="termcompleted"]').append('<option value='+r.start_term+','+r.end_term+'>'+r.start_term+' - '+r.end_term+'</option>');
					$('.main select[name="proposalabstract"]').append('<option value='+r.proposal_abstract+'>'+r.proposal_abstract+'</option>');
					$('.main select[name="faculty_id"]').val(r.faculty_id);
					$('.main select[name="finalabstract"]').append('<option value='+r.final_abstract+'>'+r.final_abstract+'</option>');
				});
				self.renderSpecializations();
	  	};
			Core.request(req);
		},

		renderSpecializations: function(){
			var self = this;
			var req = new Array();
			req.url = App.getSpecializationUrl;
			req.dataType = "JSON";
			req.success = function(res){
				var tmp = '<% _.each(specializations, function(r) { %>\
								<option value="<%- r.code %>"><%- r.name %></option>\
							<% }); %>';
				$('#specializations').html('<option value="all">[all]</option>');
				$('#specializations').append(_.template(tmp)({specializations:res}));
				self.renderProponents();
	  	};
			Core.request(req);
		},

		renderProponents: function(){
			var schoolyear = $('#update select[name=schoolyear] option:selected').val().split(",");
			var term = $('#update select[name=termcompleted] option:selected').val().split(",");
			var self = this;
			var req = {
				url: App.getThesisProponentsv2Url,
				dataType: 'JSON',
				data: {
					thesis_id: $('#group option:selected').val(),
					start_sy: schoolyear[0],
					end_sy: schoolyear[1],
					term: term[0]
				},
				success:function(res){
					var code = $('#specializations option:selected').val();
					var res = code != 'all' ? _.filter(res, {specialization_code:code}) : res;
					var tmp = '<% _.each(proponents, function(r) { %>\
									<option value="<%- r.proponent_id %>" data-studentid="<%- r.student_id %>" ><%- r.student_name %></option>\
								<% }); %>';
					$('#proponents').html(_.template(tmp)({proponents:res}));
					self.renderStudents();
				}
			};
			Core.request(req);
		},

		renderStudents: function(){
			var code = $('#specializations option:selected').val();
			if (code == undefined) return;

			var self = this;
			var req = {
				url: App.getStudentListUrl,
				dataType: 'JSON',
				success:function(res){
					if (code != 'all') {
						res = _.filter(res, {specialization_code:code});
					}
					var studentids = $('#proponents option').map(function(r){return parseInt($(this).data('studentid'));});
					var filter = _.reject(res, function(r){
						return _.contains(studentids, parseInt(r.id));
					});
					var template = '<% _.each(students, function(r){ %>\
						<option value="<%= r.id %>"><%= r.lname + ", " + r.fname + " " + r.mi %></option>\
					<% }); %>';
					$('#students').html(_.template(template)({students:filter}));
					self.renderThesisAreas();
				}
			};
			Core.request(req);
		},

		renderThesisAreas: function(){
			var thesisid = $('#group option:selected').val();
			if (thesisid == undefined) return;

			var area = $('#thesisareas').empty();
			var self = this;
			var req = {
				url: App.getThesisAreaUrl,
				dataType: 'JSON',
				data: {
					thesis_id: thesisid
				},
				success:function(res){
					var template = '<% _.each(areas, function(r){ %>\
						<option value="<%= r.id %>" data-level="<%= r.area_level %>" data-code="<%= r.area_code %>"><%= r.name + "(" + r.area_level + ")" %></option>\
					<% }); %>';
					area.html(_.template(template)({areas:res}));
					self.renderAreas();
				}
			};
			Core.request(req);
		},

		renderAreas: function(){
			var req = {
				url: App.getSubAreaListUrl,
				type: 'GET',
				dataType: 'JSON',
				success: function(res) {
					var areaids = $('#thesisareas option').map(function(){
						return parseInt($(this).data('code'));
					});
					var tmp = '<% _.each(areas, function(r) { %>\
						<%if(_.contains(areaids, parseInt(r.code))) return;%>\
									<option value="<%= r.code %>"><%= r.name %></option>\
								<% }); %>';
					$('#areas').html(_.template(tmp)({areas:res,areaids:areaids}));
				}
			}
			Core.request(req);
		},

		showAddForm: function(e){
			var form = $('#add');
			form[0].reset();
			form.find('input[name=id]').val(this.generateThesisId());
		},

		addThesisArea: function(){
			var areacode = $('#areas option:selected').val();
			if (areacode == undefined) return;

			var arealevel = 10;
			var thesisid = $('#group option:selected').val();
			var self = this;
			var request = {
				url: App.addThesisAreaUrl,
				type: 'POST',
				dataType: 'JSON',
				data: {
					thesis_id: thesisid,
					area_code: areacode,
					area_level: arealevel
				},
				success:function(response){
					self.renderThesisAreas();
				}
			};
			Core.request(request);
		},

		removeThesisArea: function(){
			var thesisareaid = $('#thesisareas option:selected').val();
			if (thesisareaid == undefined) return;

			var self = this;
			var request = {
				url: App.deleteThesisAreaUrl,
				type: 'POST',
				dataType: 'JSON',
				data: {
					id: thesisareaid
				},
				success: function(res){
					self.renderThesisAreas();
				}
			};
			Core.request(request);
		},

		increase: function(){
			var selected = $('#thesisareas option:selected');
			var thesisareaid = selected.val();
			if (thesisareaid == undefined) return;

			var areacode = selected.data('code')
			var arealevel = selected.data('level');
			var thesisid = $('#group option:selected').val();
			if (arealevel != 100) {
				arealevel += 10;
				var self = this;
				var req = {
					url: App.updateThesisAreaUrl,
					data: {
						id: thesisareaid,
						thesis_id: thesisid,
						area_level: arealevel,
						area_code: areacode
					},
					type: 'POST',
					dataType: 'JSON',
					success: function(res) {
						console.log(res);
						self.renderThesisAreas();
					}
				}
				console.log(req);
				Core.request(req);
			}
		},

		decrease: function(){
			var selected = $('#thesisareas option:selected');
			var thesisareaid = selected.val();
			if (thesisareaid == undefined) return;

			var arealevel = selected.data('level');
			var areacode = selected.data('code');
			var thesisid = $('#group option:selected').val();
			if (arealevel != 10) {
				arealevel-=10;
				var self = this;
				var req = {
					url: App.updateThesisAreaUrl,
					data: {
						id: thesisareaid,
						thesis_id: thesisid,
						area_level: arealevel,
						area_code: areacode
					},
					type: 'POST',
					dataType: 'JSON',
					success: function(res) {
						console.log(res);
						self.renderThesisAreas();
					}
				}
				console.log(req);
				Core.request(req);
			}
		},

		addThesisGroup: function(e){
			e.preventDefault();
			var form = $(e.currentTarget);
			var temp = form.serialize();
			var data = temp.split("&");
			var startsy = $('#schoolyear option:selected').data('start');
			data.push("start_sy=" + startsy);
			data.push("end_sy=" + (parseInt(startsy) + 1));
			data.push("start_term=" + $('#term option:selected').val());
			data.push("end_term=" + $('#term option:selected').val());

			var self = this;
			var req = {
				url: App.addNewThesisInfoUrl,
				dataType: 'JSON',
				type: 'POST',
				data: data.join("&"),
				success:function(res){
					$('#addThesisGroup').modal('hide');
					self.renderThesisGroups();
				}
			};
			Core.request(req);
		},

		generateThesisId: function(){
			var startsy = $('#schoolyear option:selected').data('start');
			var term = $('#term option:selected').val();
			var suffix = "000";
			var id = startsy + term + suffix;
			var req = {
				url: App.getGroupCountUrl,
				dataType: 'JSON',
				loadTemplate: true,
				data: {
					startsy: startsy,
					term: term
				},
				success: function(res){
					id = parseInt(id) + parseInt(res.count) + 1;
				}
			};
			Core.request(req);
			return id;
		},

		updateThesisGroup: function(e){
			e.preventDefault();
			var form = $('#update');
			var data = form.serialize().split("&");
			var schoolyear = $('#update select[name=schoolyear]').val().split(",");
			var term = $('#update select[name=termcompleted]').val().split(",");
			data.push("start_sy=" + schoolyear[0]);
			data.push("end_sy=" + schoolyear[1]);
			data.push("start_term=" + term[0]);
			data.push("end_term=" + term[0]);
			data.push("id=" + $('#update label[name=thesisid]').text());
			data.push("thesis_id=" + $('#update label[name=thesisid]').text());
			var self = this;
			var req = {
				url: App.updateThesisInfoUrl,
				type: 'POST',
				dataType: 'JSON',
				data: data.join("&"),
				success:function(res){
					self.updateThesisAdviser(data.join("&"));
				}
			};
			Core.request(req);
		},

		updateThesisAdviser: function(data){
			var req = {
				url: App.updateThesisAdviserUrl,
				type: 'POST',
				dataType: 'JSON',
				data: data,
				success: function(res){
					console.log(res);
					alert('Successfully update!');
				}
			};
			Core.request(req);
		},

		removeThesisGroup: function(e){
			e.preventDefault();
			var id = $('#group option:selected').val();
			if (id == undefined) return;

			var self = this;
			var req = {
				url: App.deleteThesisUrl,
				type: 'POST',
				dataType: 'JSON',
				data: {
					id: id
				},
				success: function(res){
					self.renderThesisGroups();
				}
			};
			Core.request(req);
		},

		addProponents: function(){
			var id = $('#students option:selected').val();
			if (id == undefined) return;

			var schoolyear = $('#update select[name=schoolyear]').val().split(",");
			var term = $('#update select[name=termcompleted]').val().split(",");
			var self = this;
			var req = {
				url: App.addThesisProponentUrl,
				type: 'POST',
				dataType: 'JSON',
				data: {
					thesis_id: $('#group option:selected').val(),
					student_id: id,
					start_sy: schoolyear[0],
					end_sy: schoolyear[1],
					term: term[0]
				},
				success:function(res){
					self.renderProponents();
				}
			};
			Core.request(req);
		},

		deleteProponents: function(){
			var id = $('#proponents option:selected').val();
			if (id == undefined) return;

			var self = this;
			var req = {
				url: App.deleteThesisProponentUrl,
				type: 'POST',
				dataType: 'JSON',
				data: {
					id: id
				},
				success:function(res){
					self.renderProponents();
				}
			};
			Core.request(req);
		},

		cleanUpEvents: function(){

		}
	});

	return ThesisGroupView;

});