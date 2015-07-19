/**
	ContainerView.js
*/
define(['jquery', 'backbone', 'underscore', 'views/PasswordChangeView', 'views/PasswordForgetView'], function($, Backbone, _, PasswordChangeView, PasswordForgetView){
	
	var ContainerView = Backbone.View.extend({
	
		templateName: 'admin/ContainerTemplate',
	
		subViews: [],
	
		showSideBar: false,
	
		events:{
		
		},
	
		initialize: function(options){
			this.showSideBar = options.showSideBar;
			this.page = options.page;
			this.render();
		
		},
	
		render: function(){
			$("#mainContainer").removeClass("adjust_container");
			try{
				_.each(this.subViews, function(subView){
					subView.cleanUpEvents();
				});
				this.subViews = [];
			}catch(ex){}
			var template = _.template(Core.templates[this.templateName]);
			this.$el.html(template({"data":this.model.toJSON()}));
			if(this.showSideBar) {
				$("#leftPanel").attr('class','col-md-3');
				$("#rightPanel").attr('class','col-md-9');
				$("#leftPanel").show();
			}
			this.subViews.push(new PasswordChangeView({
				el: "#mainContent",
				model: this.model
			}));
			
			if(this.page){
				this.subViews.push(new PasswordForgetView({
				   el: "#mainContent",
				   model: App.userModel,
				   page: this.page
			   	}));
				
				$("#leftPanel").css("overflow", "initial");
				$("#rightPanel").css("overflow", "initial");
			}
		}
	
	});
	
	return ContainerView;
	
});