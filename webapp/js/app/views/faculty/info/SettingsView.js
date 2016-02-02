define(['jquery', 'backbone'], function($, Backbone){

var SettingsView = Backbone.View.extend({

		templateName: 'SettingsTemplate',
		
		subViews: [],

		initialize: function(options){
			this.isFaculty = options.page=='faculty';
			this.userid = options.userid;
			this.render();
		},

		render: function(){
			var template = _.template(Core.templates[this.templateName]);
			this.$el.html(template());
			$('#contactSettingsForm table td').eq(1).text(this.userid);
		},

		renderSettingsInfo: function(){

		},

		cleanUpEvents: function(){

		}
	});

	return SettingsView;

});