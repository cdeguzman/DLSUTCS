define(['jquery', 'backbone'], function($, Backbone){

var DRSView = Backbone.View.extend({

		templateName: 'DRSTemplate',
		
		events: {
			'click button#add': 'addMember',
			'click button#send': 'sendChat',
			'click button#attach': 'attachFile',
		},

		subViews: [],

		initialize: function(){
			var self = this;
			this.render();
		},

		render: function(){
			var template = _.template(Core.templates[this.templateName]);
			this.$el.html(template());
		},

		addMember: function(e){
			
		},

		sendChat: function(e) {
			alert("send chat");
		},

		attachFile: function(e) {

		},

		cleanUpEvents: function(){

		}
	});

	return DRSView;

});