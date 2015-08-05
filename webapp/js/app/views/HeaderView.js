/**
	HeaderView.js
*/
define(['jquery', 'backbone', 'jscookie', 'jquery-ajax-form', 'bootstrap'], function($, Backbone, Cookie){
	
	var HeaderView = Backbone.View.extend({
	
		templateName: 'HeaderTemplate',
		
		page: '',
	
		events:{
			'click #logout' : 'logout',
			'click #physicians' : 'goToPhysicians',
			'click #patients' : 'goToPatients',
			'click #showPhysicianAddModalBtn' : 'showPhysicianAddModal',
			'click #showPatientAddModalBtn' : 'showPatientAddModal',
			'click #showPhysiciansBtn' : 'goToPhysicians',
			'click #showPatientsBtn' : 'goToPatients',
			'click #changeLogo' : 'changeLogo'
		},
	
		initialize: function(options){
			this.page = options.page;
			this.render();
		},
	
		render: function(){
			var template = _.template(Core.templates[this.templateName]);
			this.$el.html(template());
		},
		
		cleanUpEvents: function(){
			$("body").off("click", ".popover-title .fa-times");
			$("body").off("click", "#openFileSelection");
			$("body").off("change", "#fileUploadField");
			$('#logoUploadForm').ajaxFormUnbind();
			$('#changeLogo').popover('destroy');
		}
	});
	
	return HeaderView;
	
});