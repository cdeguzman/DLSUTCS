/**
	HeaderView.js
*/
define(['jquery', 'backbone', 'jscookie', 'jquery-ajax-form', 'bootstrap', 'underscore'], function($, Backbone, Cookie){
	
	var HeaderView = Backbone.View.extend({
	
		templateName: 'HeaderTemplate',
	
		events:{
			'change #schoolyear': 'renderTermListEvent'
		},
	
		initialize: function(){
			this.render();
		},
	
		render: function(){
			var template = _.template(Core.templates[this.templateName]);
			this.$el.html(template());
			this.renderSchoolYearList();
		},

		renderSchoolYearList: function(){
			var self = this;
			var req = {
				url: App.getSchoolYearListUrl,
				loadTemplate: true,
				dataType: 'JSON',
				success: function(res){
					var tmp = '<% _.each(schoolYearList, function(r) { %>\
									<option data-start="<%= r.start_sy %>" data-end="<%= r.end_sy %>" value="<%= r.id %>">SY <%= r.start_sy + "-" + r.end_sy %></option>\
								<% }); %>';
					$('#schoolyear').empty().append(_.template(tmp)({schoolYearList:res}));
					var prev;
					$('#schoolyear option').each(function(option){
						if (prev == undefined) {
							prev = $(this).text();
							return;
						}
						if (prev == $(this).text()) {
							$(this).remove();
						} else {
							prev = $(this).text();
						}
					});
					self.renderTermList();
				}
			};
			Core.request(req);
		},

		renderTermListEvent: function(e) {
			e.preventDefault();
			this.renderTermList();
		},

		renderTermList: function() {
			var start = $('#schoolyear option:selected').data('start');
			if (start == undefined) return;

			var end = $('#schoolyear option:selected').data('end');

			var req = {
				url: App.getTermSchedPerSYUrl,
				dataType: 'JSON',
				loadTemplate: true,
				data: {
					start_sy: start,
					end_sy: end
				},
				success: function(res){
					var tmp = '<% _.each(schoolYearList, function(r) { %>\
									<option value="<%= r.term %>"><%= Core.getOrdinal(r.term) %> Term</option>\
								<% }); %>';
					$('#term').empty().append(_.template(tmp)({schoolYearList:res}));
				}
			};
			Core.request(req);
		},
		
		cleanUpEvents: function(){

		}
	});
	
	return HeaderView;
	
});