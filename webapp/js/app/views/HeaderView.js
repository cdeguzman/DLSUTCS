/**
	HeaderView.js
*/
define(['jquery', 'backbone', 'jscookie', 'jquery-ajax-form'], function($, Backbone, Cookie){
	
	var HeaderView = Backbone.View.extend({
	
		templateName: 'HeaderTemplate',
		templatefileUploadName: 'LogoUploadTemplate',
		
		page: '',
	
		events:{
			'click #logout' : 'logout',
			'click #physicians' : 'goToPhysicians',
			'click #patients' : 'goToPatients',
			'click #showPhysicianAddModalBtn' : 'showPhysicianAddModal',
			'click #showPatientAddModalBtn' : 'showPatientAddModal',
			'click #showPhysiciansBtn' : 'goToPhysicians',
			'click #showPatientsBtn' : 'goToPatients',
			'click #changeLogo' : 'changeLogo'
		},
	
		initialize: function(options){
			this.page = options.page;
			this.render();
			$("body").on("click", ".popover-title .fa-times", function(e){
				$("#openFileSelection").show();
				$("#progressContainer").hide();
				$("#uploadError").hide();
				$("#changeLogoCover").removeClass("changeLogoActive");
			    $('#changeLogo').popover('hide');
			});
			
			$("body").on("click", "#openFileSelection", function(e){
				e.preventDefault();
			    $('#fileUploadField').click();
			});
			
			$("body").on("change", "#fileUploadField", function(e){
				e.preventDefault();
			    $("#logoUploadForm").submit();
			});
		},
	
		logout: function(){
			this.model.set('sessionId', null);
			Core.router.routeTo('logout'); //trigger redirect route
		},
	
		render: function(){
			var template = _.template(Core.templates[this.templateName]);
			this.$el.html(template({"data":this.model.toJSON(), "page": this.page}));
			var templateLogoUpload = _.template(Core.templates[this.templatefileUploadName]);
			if(Core.isAdmin()){
				$('#changeLogo').popover({
					container: 'body',
					content: templateLogoUpload({"data":this.model.toJSON(), "page": this.page}),
					title: '<i class="fa closeUpload fa-times"></i> <span>Company Logo</span>',
					placement: 'bottom',
					html: true
				});
			}
		},
	
		goToPhysicians: function(e){
			e.preventDefault();
			e.stopPropagation();
			try{
				App.dataTable.destroy();
			}catch(ex){}
			Core.router.routeTo('physicians'); //trigger redirect route
		},
	
		goToPatients: function(e){
			e.preventDefault();
			e.stopPropagation();
			try{
				App.dataTable.destroy();
			}catch(ex){}
			Core.router.routeTo('patients'); //trigger redirect route
		},
		
		showPhysicianAddModal: function(e){
			e.preventDefault();
			e.stopPropagation();
			Backbone.history.navigate('addphysician', {trigger:true});
		},
		
		showPatientAddModal: function(e){
			e.preventDefault();
			e.stopPropagation();
			Backbone.history.navigate('addpatient', {trigger:true});
		},
		
		//@Todo refactor to proper model
		
		changeLogo: function(e){
			e.preventDefault();
		    if(Core.isAdmin()){
			    var bar = $('#bar');
			    var percent = $('.percent');
				$("#changeLogoCover").addClass("changeLogoActive");
				$('#logoUploadForm').ajaxForm({
			        beforeSend: function(xhr) {
						xhr.setRequestHeader("Session-Id", Cookie.get('sessionCookie'));
						$("#openFileSelection").hide();
						$("#progressContainer").show();
			            var percentVal = '0%';
			            bar.width(percentVal);
			        },
			        uploadProgress: function(event, position, total, percentComplete) {
			            var percentVal = percentComplete + '%';
			            bar.width(percentVal);
			        },
			        complete: function(resp) {
						$("#openFileSelection").show();
						$("#progressContainer").hide();
						$("#uploadError").hide();
						if(resp.status===200){
							//Logo has been uploaded
							Backbone.pubSub.trigger("logoUploaded", resp);
							Backbone.history.loadUrl(Backbone.history.fragment);
						}else if(resp.status===0){
							//Some internal error happened
							$("#uploadError").show();
						}else if(resp.status===401){
							//User session expired prematurely while uploading
							Backbone.pubSub.trigger("sessionExpired", resp);
							$("#uploadError").show();
						}
						Core.log.debug("Logo Upload result: ");
						Core.log.debug(resp);
					
			        }
			    });
		    }
		},
		
		cleanUpEvents: function(){
			$("body").off("click", ".popover-title .fa-times");
			$("body").off("click", "#openFileSelection");
			$("body").off("change", "#fileUploadField");
			$('#logoUploadForm').ajaxFormUnbind();
			$('#changeLogo').popover('destroy');
		}
	});
	
	return HeaderView;
	
});