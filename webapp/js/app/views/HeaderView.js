/**
	HeaderView.js
*/
define(['jquery', 'backbone', 'jscookie', 'jquery-ajax-form', 'bootstrap'], function($, Backbone, Cookie){
	
	var HeaderView = Backbone.View.extend({
	
		templateName: 'HeaderTemplate',
	
		events:{

		},
	
		initialize: function(){
			this.render();
		},
	
		render: function(){
			var template = _.template(Core.templates[this.templateName]);
			this.$el.html(template());
			this.renderMaxTerm();
		},

		renderYear: function(){
			var req = new Array();
			req.url = App.getSchoolYearListUrl;
			req.async = false;
			req.dataType = "JSON";
			var self = this;
			var temp = new Array();
			req.success = function(res){
				$.each(res, function(i, r) {
					var isYearExist = ($.inArray(r.start_sy, temp) === -1);
					if(i==0) isYearExist = true;
					if(isYearExist){
						if($.inArray(r.start_sy, temp) === -1) temp.push(r.start_sy);
						$('.top-drop select#schoolyear').append('<option value='+r.start_date+','+r.end_date+'>'+r.start_sy+' - '+r.end_sy+'</option>');
						if(i == 0) {
							$('.top-drop select#term').val(r.term);
						}
					}
				});
	  		}
			Core.request(req);
		},

		renderMaxTerm: function(){
			var req = new Array();
			req.url = App.getMaxTermUrl;
			req.async = false;
			req.dataType = "JSON";
			var self = this;
			req.success = function(res){
				var tmp = '<% _.each(termList, function(r) {\
							 	for (var i = 1; i <= r.max; i++) { %>\
									<option value="<%- i %>"><%- i %></option>\
							<% 	} %>\
							<% }); %>';
				$('.top-drop select#term').append(_.template(tmp)({termList:res}));
	  		}
			Core.request(req);
			this.renderYear();
		},
		
		cleanUpEvents: function(){

		}
	});
	
	return HeaderView;
	
});