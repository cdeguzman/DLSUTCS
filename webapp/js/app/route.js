/**
	route.js
*/
define([
	'backbone'
], 

function(Backbone){
		
	var ApplicationRouter = Backbone.Router.extend({
	
		views : [],
   
	   routes:{
		   "" : "login",
		   "/" : "login",
		   "login": "login",
		   "logout": "logout",
	   },
	   
	   //Admin only routes
	   adminRoutes: [

	   ],
	   
	   requestAccessToRoute: function(route){
		   return Core.isAdmin() ? true : (_.indexOf(this.adminRoutes,route)!==-1 ? false : true);
	   },
   
	   initialize: function(){
		   var self = this;
		   //Initialize application models
		   App.initializeModels();
		   new NotificationView({
			   model: App.notificationModel
		   });
		   //Initialize Route behavior
		   this.on("route", function(route, params) {
			   Core.log.debug("Routing to "+ route + " with params {" + params + "}");
			   if(this.requestAccessToRoute(route)){
				   Core.log.debug("Access to route granted");
				   if(route==="resetpassword"){
					   Core.destroySession();
				   }else if(route!=="showDashboard" && route!=="login"){
					  if(!Core.checkSession()){
					   		Backbone.history.navigate('login', {trigger:true});
					   }
				   }else if(route==="login"){
					  // if(Core.checkSession()) Backbone.history.navigate("patients", {trigger:true});
				   }else if(route==="logout"){
					   this.logout();
				   }
			   }else{
				 Core.log.debug("Access to route denied");
			   	// if(Core.checkSession()) Backbone.history.navigate("patients", {trigger:true});
			   }
		   });
	   },
   
	   routeTo: function(route) {
	       var isRoutingToSamePlace = (route == Backbone.history.fragment);
	       if (isRoutingToSamePlace){
			   var path = eval("Core.router.routes."+route);
			   eval("this."+path+"()");
		   }else{
			Backbone.history.navigate(route, {trigger: true}); 
		   }
	   },
   
	   login : function(){
		   this.cleanView();
		   App.initializeModels();
	   	},	   
   
	   logout: function(){
			Core.showSpinner({});
			try{
				App.dataTable.destroy();
			}catch(ex){}
			Core.destroySession();
			Core.router.routeTo('/'); //trigger redirect route
	   },

	 //view utils
	  loadView: function(view){
		  this.views.push(view);
	  },
  
	  cleanView: function(){
		  _.each(this.views, function(view){
			  view.close();
		  });
		  this.views = [];
	  }

	});
	
	return ApplicationRouter;
	
});