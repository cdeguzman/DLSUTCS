define(['jquery', 'backbone', 'bootstrap-dialog', 'underscore', 'bootstrap', 'datePicker', 'jscookie'], function($, Backbone, BootstrapDialog, Cookie){

	var LoginView = Backbone.View.extend({

		events: {
			'submit .form-signin' : 'login',
		},

		templateName: 'LoginTemplate',

		initialize: function(){
			$('.top-drop').hide();
			this.render();
		},

		render: function(){
			var template = _.template(Core.templates[this.templateName]);
			this.$el.html(template());
		},

		login: function(e){
			Core.destroySession();
			var form = $(e.currentTarget);
			var data = form.serialize();

			var req = new Array();
			req.url = App.getCredentialUrl;
			req.type = "GET";
			req.data = data;
			req.dataType = "JSON";
			var self = this;
			req.success = function(res){
				if(res != 0){
					alert("Admin!");
					var session = new Array();
					session.id = res;
					session.username = $('.form-signin').find('#username').val();
					session.role = "admin";
					Core.createSession(session);
					Core.router.routeTo("home");
				}else{
					self.login2(data);
				}
			}
			Core.request(req);
			$('.form-signin')[0].reset();
		},

		login2: function(data){
			var req = new Array();
			req.url = App.getCredential2Url;
			req.type = "GET";
			req.data = data;
			req.dataType = "JSON";
			var self = this;
			req.success = function(res){
				if(res != 0){
					alert("faculty!");
					var session = new Array();
					session.id = res;
					session.username = $('.form-signin').find('#username').val();
					session.role = "faculty";
					Core.createSession(session);
					Core.router.routeTo("user/faculty");
				}else{
					self.login3(data);
				}
			}
			Core.request(req);
			$('.form-signin')[0].reset();
		},

		login3: function(data){
			var req = new Array();
			req.url = App.getCredential3Url;
			req.type = "GET";
			req.data = data;
			req.dataType = "JSON";
			var self = this;
			req.success = function(res){
				if(res != 0){
					alert("student!");
					var session = new Array();
					session.id = res;
					session.username = $('.form-signin').find('#username').val();
					session.role = "student";
					Core.createSession(session);
					Core.router.routeTo("user/student");
				}else{
					alert("Account not found!")
				}
			}
			Core.request(req);
			$('.form-signin')[0].reset();
		},


		cleanUpEvents: function(){

		}
	});

	return LoginView;

});