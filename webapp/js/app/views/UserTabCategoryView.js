define(['jquery', 'backbone', 'bootstrap', 'datePicker', 'bootstrap-dialog'], function($, Backbone, BootstrapDialog){

var UserTabCategoryView = Backbone.View.extend({

		templateName: 'UserTabCategoryTemplate',

		initialize: function(options){
			this.page = options.page;
			var self = this;
			this.render();
			$('#navTabs a').click(function (e) {
				e.preventDefault();
				e.stopImmediatePropagation();
				$(this).tab('show')
			});
		},

		render: function(){
			var template = _.template(Core.templates[this.templateName]);
			this.$el.html(template({"data": this.model.getTabs(this.page)}));
			
			
		},

		cleanUpEvents: function(){

		}
	});

	return UserTabCategoryView;

});