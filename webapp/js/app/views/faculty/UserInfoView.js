define(['jquery', 'backbone', 'views/faculty/info/UserProfileView',
        'views/faculty/info/ClassScheduleView',
        'views/faculty/info/AreaOfExpertiseView',
        'views/faculty/info/SettingsView',
        'views/faculty/info/PasswordView'], function($, Backbone, 
		UserProfileView,
		ClassScheduleView,
		AreaOfExpertiseView,
		SettingsView,
		PasswordView){

var UserInfoView = Backbone.View.extend({

		templateName: 'FacultyUserInfoTemplate',
		
		subViews: [],

		initialize: function(options){
			this.page = options.page;
			this.userid = options.userid;
			this.scode = options.scode;
			this.render();
			$('#navTabs a').click(function (e) {
				e.preventDefault();
				e.stopImmediatePropagation();
				$(this).tab('show')
			});
		},

		render: function(){
			var template = _.template(Core.templates[this.templateName]);
			this.$el.html(template({"data": this.model.getInfoTabs(this.page)}));
			
			this.subViews.push(new UserProfileView({
				el: "#genInfo",
				model: App.userModel,
				userid: this.userid,
				page: this.page
			}));
			
			this.subViews.push(new ClassScheduleView({
				el: "#classSched",
				model: App.userModel,
				userid: this.userid,
				page: this.page,
				scode: this.scode
			}));
			
			this.subViews.push(new AreaOfExpertiseView({
				el: "#areasExper",
				model: App.userModel,
				page: this.page,
				userid: this.userid
			}));
			
			this.subViews.push(new SettingsView({
				el: "#settings",
				model: App.userModel,
				page: this.page,
				userid: this.userid
			}));
			
			this.subViews.push(new PasswordView({
				el: "#password",
				model: App.userModel,
				page: this.page,
				userid: this.userid
			}));
		},

		cleanUpEvents: function(){

		}
	});

	return UserInfoView;

});