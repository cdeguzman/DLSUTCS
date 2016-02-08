define(['jquery', 'backbone'], function($, Backbone){

var AreaOfExpertiseView = Backbone.View.extend({

		templateName: 'AreaOfExpertiseTemplate',
		
		subViews: [],

		events: {
			'click button#increase': 'increasePercentage',
			'click button#decrease': 'decreasePercentage',
			'click button#add': 'addExpertise',
			'click button#remove': 'removeExpertise'
		},

		initialize: function(options){
			this.userid = options.userid;
			this.render();
		},

		render: function(){
			var template = _.template(Core.templates[this.templateName]);
			this.$el.html(template());
			this.renderCurrentSubArea();
		},

		renderCurrentSubArea: function(){
			$('#currentsubarea').empty();
			var self = this;
			var req = {
				url: App.getFacultyAreaUrl,
				data: {'fid':this.userid},
				type: 'GET',
				dataType: 'JSON',
				success: function(res) {
					var tmp = '<% _.each(subAreaList, function(r) { %>\
						<option data-id="<%=r.fa_id%>" data-level="<%=r.level%>" data-name="<%=r.name%>" value="<%=r.code%>" ><%- r.name %>(<%= r.level %>)</option>\
					<% }); %>';
					$('#currentsubarea').append(_.template(tmp)({subAreaList:res}));
					self.renderSubAreaList();
				}
			}
			Core.request(req);
		},

		renderSubAreaList: function(){
			$('#subarealist').empty();
			var req = {
				url: App.getSubAreaListUrl,
				type: 'GET',
				dataType: 'JSON',
				success: function(res) {
					var currentSubAreaIds = [];
					$('#currentsubarea option').each(function(){
						currentSubAreaIds.push($(this).val());
					});
					var tmp = '<% _.each(subAreaList, function(r) { %>\
						<%if(_.contains(currentSubAreaIds, r.code)) return;%>\
									<option value="<%- r.code %>"><%- r.name %></option>\
								<% }); %>';
					$('#subarealist').append(_.template(tmp)({subAreaList:res,currentSubAreaIds:currentSubAreaIds}));
				}
			}
			Core.request(req);
		},

		increasePercentage: function(){
			var selected = $('#currentsubarea :selected');
			var text = selected.text();
			if(!text) return;

			var name = selected.data('name');
			var level = selected.data('level');
			var id = selected.data('id');
			var code = selected.val();
			if (level!=100) {
				level+=10;
				var req = {
					url: App.updateFacultyAreaUrl,
					data: {
						id: id,
						faculty_id: this.userid,
						area_level: level,
						area_code: code
					},
					type: 'POST',
					dataType: 'JSON',
					success: function(res) {
						selected.text(name+"("+level+")");
						selected.data('level', level);
					}
				}
				Core.request(req);
			}
		},

		decreasePercentage: function(){
			var selected = $('#currentsubarea :selected');
			var text = selected.text();
			if(!text) return;

			var name = selected.data('name');
			var level = selected.data('level');
			var id = selected.data('id');
			var code = selected.val();
			if (level!=10) {
				level-=10;
				var req = {
					url: App.updateFacultyAreaUrl,
					data: {
						id: id,
						faculty_id: this.userid,
						area_level: level,
						area_code: code
					},
					type: 'POST',
					dataType: 'JSON',
					success: function(res) {
						selected.text(name+"("+level+")");
						selected.data('level', level);
					}
				}
				Core.request(req);
			}
		},

		addExpertise: function(){
			var self = this;
			var selected = $('#subarealist :selected');
			var text = selected.text();
			var val = selected.val();
			if (!text) return;
			
			var data = {
				faculty_id: this.userid,
				area_code: val,
				area_level: 10,
			};
			var req = {
				url: App.addFacultyAreaUrl,
				data: data,
				type: 'POST',
				dataType: 'JSON',
				success: function(res) {
					$('#currentsubarea').append('<option data-id="'+res+'" data-level="10" data-name="'+text+'" value="'+val+'">'+text.concat('(10)')+'</option>');
					self.sortCurrentSubAreaList();
					selected.remove();
				}
			}
			Core.request(req);
			

		},

		removeExpertise: function(){
			var selected = $('#currentsubarea :selected');
			var val = selected.val();
			if (!val) return;

			var text = selected.data('name');
			var id = selected.data('id');
			var req = {
				url: App.deleteFacultyAreaUrl,
				data: {id:id},
				type: 'GET',
				dataType: 'JSON',
				success: function(res) {
					console.log(res);
				}
			}
			Core.request(req);
			$('#subarealist').append('<option value="'+val+'">'+text+'</option>');
			selected.remove();
			this.sortSubAreaList();
		},

		sortSubAreaList: function(){
			var subAreaList = $('#subarealist option');
			subAreaList.sort(function(a,b){
				return a.value-b.value;
			});
			$('#subarealist').html(subAreaList);
		},

		sortCurrentSubAreaList: function(){
			var currentSubAreaList = $('#currentsubarea option');
			currentSubAreaList.sort(function(a,b){
				return a.value-b.value;
			});
			$('#currentsubarea').html(currentSubAreaList);
		},

		cleanUpEvents: function(){

		}
	});

	return AreaOfExpertiseView;

});