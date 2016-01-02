define(['jquery', 'backbone', 'bootstrap', 'datePicker', 'bootstrap-dialog', 'underscore'], function($, Backbone, BootstrapDialog){

	var RoomRecordView = Backbone.View.extend({

		events: {
			'click #roomList option' : 'fillForm',
			'submit #update' : 'submitFormUpdate',
			'submit #add' : 'submitFormAdd',
			'click button#deleteRoom' : 'deleteRoom',
			'submit #blockedsched' : 'addSched'
		},

		templateName: 'RoomRecordTemplate',

		initialize: function(){
			this.render();

			$('input[name="usable"]').on('change', function(){
			   this.value = this.checked ? 1 : 0;
			}).change();
		},

		render: function(){
			var template = _.template(Core.templates[this.templateName]);
			this.$el.html(template());
			$('#date_from').datetimepicker();
			$('#date_to').datetimepicker();
			this.renderRoomList();
		},

		renderRoomList: function(){
			$('.main #roomList').empty();
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
			var id = $('.main #roomList :selected').val();
			var req = new Array();
			req.url = App.getRoomInfoUrl;
			req.type = "GET"
			req.data = {'id': id};
			req.dataType = "JSON";
			req.success = function(res){
				_.each(res, function(r) { 
					$('.main label[name="roomId"]').text(r.id);
					$('.main input[name="roomId"]').val(r.id);
					$('.main input[name="roomname"]').val(r.name);
					$('.main input[name="roomno"]').val(r.room_no);
				});
			}
			Core.request(req);
		},

		submitFormAdd: function(e){
			var form = $(e.currentTarget);
			var data = form.serialize();
			
			var req = new Array();
			req.url = App.addNewRoomUrl;
			req.type = "POST";
			req.data = data;
			req.dataType = "JSON";
			var self = this;
			req.success = function(res){
				if(res == 1){
					alert("Success!");
					self.renderRoomList();
					$('#addRoom').modal('hide');
				}else{
					alert("Error Occur!");
				}
			}
			Core.request(req);
			$('form')[0].reset();
		},

		submitFormUpdate: function(e){
			var form = $(e.currentTarget);
			var data = form.serialize();

			var req = new Array();
			req.url = App.updateRoomInfoUrl;
			req.type = "POST";
			req.data = data;
			req.dataType = "JSON";
			var self = this;
			req.success = function(res){
				if(res == 1){
					alert("Success!");
					self.renderRoomList();
				}else{
					alert("Error Occur!");
				}
			}
			Core.request(req);
		},

		deleteRoom: function() {
			$('form')[0].reset();
			var id = $('.main #roomList :selected').val();
			if(id == undefined){
				alert('No selected Room.');
				return false;
			}

			var action = confirm("Are you sure?");
			if (action) {
				var req = new Array();
				req.url = App.deleteRoomUrl;
				req.type = "POST";
				req.data = {'id': id};
				req.dataType = "JSON";
				var self = this;
				req.success = function(res){
					if(res == 1){
						alert("Success!");
						self.renderRoomList();
					}else{
						alert("Error Occur!");
					}
				}
				Core.request(req);
			}
		},

		addSched: function(e){
			var $inputs = $('#blockedsched :input');
		    var values = {};
		    $inputs.each(function() {
		        values[this.name] = $(this).val();
		    });

		    var data = new Array();
		    data.description = values.description;
		    data.start_sy = new Date(values.date_from).getFullYear();
		    data.end_sy = (new Date(values.date_from).getFullYear())+1;
		    data.day = Core.getDay(new Date(values.date_from).getDay());
		    var stime = new Date(values.date_from);
		    data.start_time = stime.getHours()+':'+stime.getHours();
		    var etime = new Date(values.date_to);
		    data.end_time = etime.getHours()+':'+stime.getHours();

		    console.log(data)
		    /*$_POST["start_sy"];
			 $_POST["end_sy"];
			 $_POST["term"];
			 $_POST["room_id"];
			 $_POST["schedule_code"];
			 $_POST["day"];
			 $_POST["spec_date"];
			 $_POST["start_time"];
			 $_POST["end_time"];
			 $_POST["description"];*/

			/*var req = new Array();
			req.url = App.addNewRooUrl;
			req.type = "POST";
			req.data = data;
			req.dataType = "JSON";
			var self = this;
			req.success = function(res){
				
			}
			Core.request(req);
			$('form')[0].reset();*/
		},

		cleanUpEvents: function(){

		}
	});

return RoomRecordView;

});