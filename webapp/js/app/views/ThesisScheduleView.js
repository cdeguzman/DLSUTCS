
define(['jquery', 'backbone', 'bootstrap-dialog', 'underscore', 'bootstrap', 'datePicker'], function($, Backbone, BootstrapDialog){

	var ThesisScheduleView = Backbone.View.extend({

		events: {
			'click #defensehistory' : 'gotoDefenseHostory'
		},

		templateName: 'ThesisScheduleTemplate',

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
			$('#scheduledate').datetimepicker();
		},

		cleanUpEvents: function(){

		},

		gotoDefenseHostory: function(){
			Core.router.routeTo('defense');
		},
	});

	return ThesisScheduleView;

});