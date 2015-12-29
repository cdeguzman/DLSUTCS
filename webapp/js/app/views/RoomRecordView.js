define(['jquery', 'backbone', 'bootstrap', 'datePicker', 'bootstrap-dialog'], function($, Backbone, BootstrapDialog){

		var RoomRecordView = Backbone.View.extend({

			events: {
				'click #roomList option' : 'fillForm'
			},

			templateName: 'RoomRecordTemplate',

			initialize: function(){
				this.render();
				$("#mainContainer").on("click", "button#deleteFaculty", function(e){
					self.showDeleteDialog();
				});
				this.renderRoomList();
			},

			render: function(){
				var template = _.template(Core.templates[this.templateName]);
				this.$el.html(template());
				$('#currsched-date-from').datetimepicker();
				$('#currsched-date-to').datetimepicker();

				$('#prefsched-date-from').datetimepicker();
				$('#prefsched-date-to').datetimepicker();
			},

			renderRoomList: function(){
				var req = new Array();
				req.url = App.getRoomListUrl;
				req.dataType = "JSON";
				req.success = function(res){

					var tmp = '<% _.each(roomList, function(r) { %>\
									<option value="<%- r.id %>" data-code="<%- r.room_no %>"><%- r.name %></option>\
								<% }); %>';
					$('.main #roomList').append(_.template(tmp)({roomList:res}));
					
		  		}
				Core.request(req);
			},

			fillForm: function(){
				var rid = $('.main #roomList :selected').val();
			},

			cleanUpEvents: function(){

			}
		});

return RoomRecordView;

});