define(['jquery', 'backbone'], function($, Backbone){

var UserProfileView = Backbone.View.extend({

		templateName: 'UserProfileTemplate',

		subViews: [],

		initialize: function(options){
			this.userid = options.userid;
			this.isFaculty = options.page=='faculty';
			this.render();
			var self = this;
			if (!this.isFaculty) {
				$('#schoolyear').on('change', function(e){
					self.renderThesis();
				});
				$('#term').on('change', function(e){
					self.renderThesis();
				});

			}

		},

		render: function(){
			var template = _.template(Core.templates[this.templateName]);
			this.$el.html(template({'title':this.model.getExtraTitle(this.isFaculty?'faculty':'student')}));
			this.renderUserInfo();
			if(this.isFaculty) {
				this.renderExpertise();
			}else{
				this.renderThesis();
			}
		},

		renderUserInfo: function(){
			var self = this;
			var table = $('#userinfo tr');
			if (!this.isFaculty) table.eq(3).remove(); 
			var req = {
				url: this.isFaculty ? App.getFacultyInfoUrl : App.getStudentInfoUrl,
				data: this.isFaculty ? {fid:this.userid} : {id:this.userid},
				type: 'GET',
				dataType: 'JSON',
				success: function(res) {
					var user = res[0];
					table.eq(0).find('td').eq(1).text(user.id);
					table.eq(1).find('td').eq(1).text(user.fname+" "+user.mi+" "+user.lname);
					table.eq(2).find('td').eq(1).text(user.email);
					if (self.isFaculty) {
						table.eq(3).find('td').eq(1).text(user.faculty_rank);
					}
					table.eq(4).find('td').eq(1).text(user.text_no+" / "+user.contact_no);
				}
			}
			Core.request(req);
		},

		renderExpertise: function(){
			$('#expertise td').remove();
			var self = this;
			var req = {
				url: App.getFacultyAreaUrl,
				data: {fid:this.userid},
				type: 'GET',
				dataType: 'JSON',
				success: function(res){
					var tmp = '<% _.each(expertise, function(r) { %>\
						<tr>\
							<td><%= r.name %></td>\
							<td><%= r.level %>%</td>\
						</tr>\
					<% }); %>';
					$('#expertise tbody').append(_.template(tmp)({expertise:res}));
				}
			};
			Core.request(req);
		},


		renderThesis: function(){
			var self = this;
			var start = $('#schoolyear').val() ? $('#schoolyear').val() : new Date().getFullYear()-1;
			var term = $('#term').val() ? $('#term').val() : 1;
			var thesis = $('#expertise');
			thesis.empty();
			var data = {
				'sid': this.userid,
				'start_sy': start,
				'end_sy': parseInt(start)+1,
				'term': term
			};
			console.log(data);
			var req = {
				url: App.getStudentThesisTitleUrl,
				data: data,
				type: 'GET',
				dataType: 'JSON',
				success: function(res){
					if (res[0]) {
						var thesis = res[0];
						var tmp ='<tr><td>Primary</td><td><%=t.primary_name%></td></tr>\
							<tr><td>Secondary</td><td><%=t.secondary_name%></td></tr>';
						$('#expertise').append(_.template(tmp)({t:thesis}));
					}

				}
			};
			Core.request(req);
		},

		cleanUpEvents: function(){

		}
	});

	return UserProfileView;

});