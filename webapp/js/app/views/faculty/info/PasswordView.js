define(['jquery', 'backbone'], function($, Backbone){

var PasswordView = Backbone.View.extend({

		templateName: 'PasswordTemplate',
		
		subViews: [],

		events: {
			'submit #update': 'updatePassword'
		},

		initialize: function(options){
			this.userid = options.userid;
			this.isFaculty = options.page=='faculty';
			this.render();
		},

		render: function(){
			var template = _.template(Core.templates[this.templateName]);
			this.$el.html(template());
			this.renderPassword();
		},

		renderPassword: function(){
			var label = this.isFaculty ? 'Faculty' : 'Student';
			$('label[for=userid]').text(label+' ID: ' + this.userid);
			var self = this;
			var req = {
				url: this.isFaculty ? App.getFacultyPasswordUrl : App.getStudentPasswordUrl,
				data: {id:this.userid},
				type: 'GET',
				dataType: 'JSON',
				success: function(res) {
					var user = res[0];
					$('input[name=question]').val(user.secret_question);
					self.password = user.secret_password;
				}
			}
			Core.request(req);
		},

		updatePassword: function(e){
			e.preventDefault();
			var currentpassword = $('input[name=currentpassword]').val();
			if(currentpassword!=this.password) {
				alert('Current password unmatched with the database.');
				return;
			}
			var newpassword = $('input[name=newpassword]').val();
			var confirmpassword = $('input[name=confirmpassword]').val();
			if (newpassword!=confirmpassword) {
				alert('New password unmatched with confirm password.');
				return;
			}
			var question = $('input[name=question]').val();
			var answer = $('input[name=answer]').val();
			var confirmanswer = $('input[name=confirmanswer]').val();
			if (answer!=confirmanswer) {
				alert('Answer unmatch with confirm answer.');
				return;
			}
			var self = this;
			var req = {
				url: (this.isFaculty ? App.updateFacultyPasswordUrl : App.updateStudentPasswordUrl) + '?id=' + this.userid,
				type: 'POST',
				dataType: 'JSON',
				data: {
					secret_password: newpassword,
					secret_question: question,
					secret_answer: answer
				},
				success: function(){
					alert("Success!");
					$('input[name=currentpassword]').val('');
					$('input[name=newpassword]').val('');
					$('input[name=confirmpassword]').val('');
					$('input[name=answer]').val('');
					$('input[name=confirmanswer]').val('');
					self.password = newpassword;
				}
			};
			Core.request(req);
		},

		cleanUpEvents: function(){

		}
	});

	return PasswordView;

});