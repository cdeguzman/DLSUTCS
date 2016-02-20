define(['jquery',
	'backbone',
	'views/faculty/TableView',
	'models/UserModel',
	'dataTables-editable'], function($, Backbone, TableView, UserModel){

var DRSView = Backbone.View.extend({

		templateName: 'DRSTemplate',
		
		events: {
			'click button#add': 'create',
			'click button#send': 'send',
			'click button#attach': 'attach',
			'click #chatlist li': 'moveChat',
			'submit #addchat': 'addChat',
			'dblclick #UserListTableBody tr': 'add',
			'click p.chatmember': 'removeChatMember'
		},

		subViews: [],

		initialize: function(options){
			this.isFaculty = options.page=='faculty';
			this.userid = options.userid;
			this.render();
			$('#addedUserList').empty();
		},

		render: function(){
			var template = _.template(Core.templates[this.templateName]);
			this.$el.html(template());
			this.renderChatList();
			this.renderUserList();
		},

		renderChatList: function() {
			var self = this;
			var chatList = $('#chatlist');
			chatList.empty();
			var req = {
				url: App.getChatListUrl,
				dataType: 'JSON',
				data: { user_id: this.userid },
				success: function(res) {
					var tmp = '<% _.each(chatList, function(r) { %>\
						<li data-id="<%= r.chat_id %>">\
							<a href="#" data-bypass>\
								<span class="user-img"></span>\
								<span class="user-title"><%= r.title %></span>\
								<p class="user-desc"><%= r.total_users %> members</p>\
							</a>\
						</li>\
					<% }); %>';
					chatList.append(_.template(tmp)({chatList:res}));
					var chatId = $('#chatlist li:first').data('id');
					self.renderConversation(chatId);
				}
			};
			Core.request(req);
		},

		renderConversation: function(chatId) {
			var self = this;
			var conversation = $('#conversation');
			conversation.empty();
			var req = {
				url: App.getConversationUrl,
				dataType: 'JSON',
				data: { chat_id: chatId },
				success: function(res) {
					var tmp = '<% _.each(conversation, function(r) { %>\
						<div class="message bubble-<%= r.user_id==userid ? "right" : "left" %>">\
							<label class="message-user"><%= r.user_name %></label>\
							<label class="message-timestamp"><%= r.insert_timestamp %></label>\
							<p><%= r.message %></p>\
						</div>\
					<% }); %>';
					conversation.append(_.template(tmp)({conversation:res, userid:self.userid}));
					$('#send').val(chatId);
				}
			};
			Core.request(req);
		},

		renderUserList: function(){
			this.subViews = [];
			var self = this;
			var users = [];
			var req = {
				url: App.getStudentAndFacultyListUrl,
				dataType: 'JSON',
				data: {},
				success: function(res) {
					_.each(res, function(r){
						if (r.id==self.userid) return;
						users.push([r.id, r.fullname, r.role]);
					});
					self.subViews.push(new TableView({
						el: "#userListTable",
						tableId: "UserListTable",
						tableTitle: "List Of Available Student And Faculty",
						model: new UserModel({tables:[
								{
									tableId: "UserListTable",
									tableData: {
										cols: ["User ID", "Full Name", "User Role"],
										rows: users
									}
								}
							]})
					}));
				}
			};
			Core.request(req);
		},

		add: function(e) {
			var row = $(e.currentTarget).find('td');
			$('#addedUserList').append('<p class="chatmember" data-id="' + row.eq(0).text() + '" data-role="' + row.eq(2).text() + '">' + row.eq(1).text() + '</p>');
			var table = $('#UserListTable').DataTable();
			table.row($(e.currentTarget)).remove().draw();
		},

		addChat: function(e) {
			e.preventDefault();
			this.renderUserList();
			var self = this;
			var title = $('input[name=title]').eq(1).val();
			var users = [];
			$('p.chatmember').each(function(index, el) {
				var user = $(this);
				users.push({
					userid: user.attr('data-id'),
					name: user.text()
				});
			});
			if (users.length == 0) {
				alert("Choose atleast one user.");
				return;
			}

			var hostname = $('#userinfo tbody tr').eq(1).find('td').eq(1).text();
			var req = {
				url: App.addChatUrl,
				dataType: 'JSON',
				type: 'POST',
				data: {
					user_id: this.userid,
					title: title,
				},
				success: function(res) {
					if (res) {
						users.unshift({
							userid: self.userid,
							name: hostname
						});
						self.addChatMembers(res, users);
					}
				}
			};
			Core.request(req);
			$('input[name=title]').eq(1).val('');
			$('#addedUserList').empty();
			$('#addchat').modal('hide');
		},

		addChatMembers: function(chatid, users) {
			var self = this;
			var req = {
				url: App.addChatMembersUrl,
				dataType: 'JSON',
				data: {
					chatid: chatid,
					members: users
				},
				type: 'POST',
				success: function(res) {
					if (res) {
						self.renderChatList();
					}
				}
			};
			Core.request(req);
		},

		removeChatMember: function(e) {
			e.currentTarget.remove();
			var member = $(e.currentTarget);
			var table = $('#UserListTable').DataTable();
			table.row.add([member.data('id'), member.text(), member.data('role')]).draw();
		},

		moveChat: function(e) {
			e.preventDefault();
			var $target = $(e.currentTarget);
			var chatId = $target.attr('data-id');
			this.renderConversation(chatId);
		},

		create: function(e){
			
		},

		send: function(e) {
			e.preventDefault();
			var self = this;
			var chatId = e.currentTarget.value;
			var message = $('#message').val();
			var req = {
				url: App.addChatMessageUrl,
				dataType: 'JSON',
				type: 'POST',
				data: {
					user_id: this.userid,
					message: message,
					chat_id: chatId
				},
				success: function(res) {
					self.renderConversation(chatId);
				}
			};
			Core.request(req);
			$('#message').val('');
		},

		attach: function(e) {

		},

		cleanUpEvents: function(){

		}
	});

	return DRSView;

});