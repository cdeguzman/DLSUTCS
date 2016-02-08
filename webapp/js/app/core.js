/**
	core.js
	This contains utils and intialization objects
*/

define(['jquery', 'backbone', 'jscookie', 'moment', 'log4javascript', 'jquery-editable'], 
function($, Backbone, Cookie, moment){
	//-----------------Overrided Library Functions------------------------//
	Backbone.View.prototype.remove = function(){
		this.$el.empty().off(); /* off to unbind the events */
		this.stopListening();
	}

	Backbone.View.prototype.close = function(){
	  _.each(this.subViews, function(view){
		  try{
			  view.cleanUpEvents();
		  }catch(ex){  Core.log.debug("No events to clean");}
		  view.unbind();
		  view.remove();
		  view.subViews = [];
	  });
	  try{
		  this.cleanUpEvents();
	  }catch(ex){Core.log.debug("No events to clean");}
	    this.unbind();
	    this.remove();
		this.subViews = [];
	},

	Backbone.pubSub = _.extend({}, Backbone.Events);
	
	$.editable.addInputType('email', {
	    element : function(settings, original) {
	        var input = $('<input type="email">');
	        $(this).append(input);
	        return(input);
	    },
	    submit : function (settings, original) {
	           
	    },
	    plugin : function(settings, original) {
	           
	    }
	});

	//-------------------------------------------------------------------//
	window.Core = {
	
		//add Templates here
		templateList: [
			'HomeTemplate',	
			'HeaderTemplate',
			'FooterTemplate',
			'FacultyRecordTemplate',
			'StudentRecordTemplate',
			'ThesisGroupTemplate',
			'RoomRecordTemplate',
			'HolidayRecordTemplate',
			'AdministrationPositionRecordTemplate',
			'GeneralAreaRecordTemplate',
			'SubAreaRecordTemplate',
			'RankRecordTemplate',
			'CourseRecordTemplate',
			'CourseOfferingRecordTemplate',
			'FlowchartRecordTemplate',
			'GeneralScheduleTemplate',
			'SchoolYearTemplate',
			'StudentScheduleTemplate',
			'AdviserRosterTemplate',
			'PanelRosterTemplate',
			'ThesisEnrollmentTemplate',
			'ThesisScheduleTemplate',
			'BarcodeTemplate',
			'DefenseHistoryTemplate',
			'UpdateThesisGradeTemplate',
			'StudentUserContainerTemplate',
			'FacultyUserContainerTemplate',
			'UserTabCategoryTemplate',
			'FacultyUserInfoTemplate',
			'TableViewTemplate',
			'DefenseScheduleTemplate',
			'VerdictStatusTemplate',
			'ProjectStatusTemplate',
			'ThesisGroupsTemplate',
			'MiscFacultyTemplate',
			'SearchTemplate',
			'StudentUserInfoTemplate',
			'ProjectStatusStudentTemplate',
			'ThesisGroupsStudentTemplate',
			'MiscStudentTemplate',
			'DRSTemplate',
			'UserProfileTemplate',
			'ClassScheduleTemplate',
			'AreaOfExpertiseTemplate',
			'SettingsTemplate',
			'PasswordTemplate',
			'custom_controls/MultiCheckSelectBoxTemplate',
			'DRSTemplate'
		],
		templates: [],
		loadedTemplateCount: 0,
		requestQueue: [],
		log: log4javascript.getLogger("main"),
	
		//function the loads the templates
		loadTemplates: function(callback){
			Core.log.info("---Loading Templates---");
			var self = this;
			_.each(this.templateList, function(template){
			
				self.request({
					url: "templates/"+template+".html?appVersion="+version,
					async: false,
					dataType: "html",
					loadTemplate: true,
					success: function(resp){
						self.templates[self.templateList[self.loadedTemplateCount]] = resp;
						Core.log.info("Loaded Template: templates/"+ self.templateList[self.loadedTemplateCount]+".html");
						self.loadedTemplateCount++;
					},
					fail: function(resp){
					
					}
				});
			});
			this.fetchExternalFiles(callback);
		
		},
		
		fetchExternalFiles: function(callback){
			var self = this;
			Core.log.debug("---Loading External Files---");
			_.each(App.externalFiles, function(externalFile){
				Core.request({
					url: externalFile.path+"?appVersion="+version,
					dataType: "json",
					async: false,
					loadTemplate: true,
					success: function(resp){
						Core.log.debug("Loaded  " + externalFile.path);
						eval("App."+externalFile.name +" = resp.data");
					},
					fail: function(resp){
				
					}
				});
			});
			callback();
		},

		/**
			Util for requests
			param: request{
	  		  		url: <url to send request>,
					async: true | false,
					dataType: 
	  		  		success: function(resp){
	  		  			call back for sucess
	  		  		},
					fail: function(){
						call back for fail
					}
			}
		**/ 
		request: function(request){
			var self = this;
			this.showSpinner(request);
			 $.ajax({
	  		  		url: request.url,
				 	async: (request.loadTemplate) ? false : true,
				 	type: (request.type) ? request.type : 'GET',
				 	data: (request.data) ? request.data : '',
				 	headers: (request.headers) ? request.headers : {},
					dataType: request.dataType,
	  		  		success: function(resp){
						Core.log.debug("Success " + request.url);
						request.success(resp);
						self.hideSpinner(request);
	  		  		},
					fail: function(resp){
						try{
							request.fail();
						}catch(ex){}
						self.hideSpinner();
						Core.log.error("Request Timeout " + request.type + "-" + request.url);
						Backbone.pubSub.trigger("requestTimeout", resp);
					}
				});
		},
	
		init: function(callback){
			var self = this;
			//Initialize Logger
			var appender = new log4javascript.BrowserConsoleAppender();
			var layout = new log4javascript.SimpleLayout();
			appender.setLayout(layout);
			Core.log.addAppender(appender);
			Core.log.info("Initialized Logging Library log4javascript...");
			//Load Templates
			this.loadTemplates(callback);

			/*
			* Prevent the page to reload when the user clicks a link
			*/
			$(document).on('click', 'a:not([data-bypass],[tabindex])', function (e) {
			    var href = $(this).attr('href');
			    var protocol = this.protocol + '//';

			    if (href.slice(protocol.length) !== protocol) {
			      e.preventDefault();

					// Replace current state before triggering the next route, 
					// storing the scrollTop in the state object
					history.replaceState(
						_.extend(history.state || {}, { 
							scrollTop: document.body.scrollTop || $(document).scrollTop() 
						}),
						document.title,
						window.location
					);

			      Core.router.routeTo(href);
			    }
			 });

			$(document).on("submit", "form", function(e){
			    e.preventDefault();
			    return  false;
			});
			this.defaultVal = undefined;

			this.renderMaxTerm();
			this.renderYear();

			$(document).on("click", ".top-drop select#schoolyearmain", function(e){
				self.defaultVal = $('.top-drop select#schoolyearmain :selected').val();
			});

			/*$(document).on("change", ".top-drop>select#schoolyear", function(e){
				
			});*/

			$('.top-drop>select#schoolyearmain').change(function(e){
				var action = confirm("Proceed on changing Shool Year and Term?");
				if (action) {
			   		self.selectTermByYear();
			   	} else {
			   		$('.top-drop select#schoolyearmain').val(self.defaultVal);
			   	}
			});



		},
	
		// function that create a cookie to establish a user session
		createSession: function(session){
		   Cookie.set('sessionCookie', session.id);
		   Cookie.set('loggedInUserEmail', session.email);
           if(session.isAdmin){
			   Core.log.debug("Running in Admin Mode");
			   Cookie.set('isAdmin', "true");
           }
		},

		//call this to check if user session exists.
		checkSession: function(){
		   var isSessionValid = false; // if session exists
		   if( Cookie.get('sessionCookie')!==undefined && Cookie.get('sessionCookie')!==null && Cookie.get('sessionCookie')!=="null"){
		      // put additional checks for session here.
		      isSessionValid = true;
		   }
		   return isSessionValid;
		},
		
		isAdmin: function(){
			return Cookie.get('isAdmin')!==undefined && Cookie.get('isAdmin')!==null && Cookie.get('isAdmin')!=="null" ? true : false;
		},

		//call this to destroy session
		destroySession: function(){
		   Cookie.remove('sessionCookie');
		   Cookie.remove('loggedInUserEmail');
		   Cookie.remove('patientColumnsVisibility');
		   Cookie.remove('isAdmin');
		},

		// unbinds and removes a view
		cleanUpView: function(view){
		   try{
		      view.unbind();
		      view.remove();
		   }catch(err){}
		},

		showLoad: function (load){
		   if(load){
		      $('.loadingStatus').show();
		   }else{
		      $('.loadingStatus').hide();
		   }
		},
	
		formatDate: function(dateStr, readable){
		    var monthNames = [
		         "Jan", "Feb", "Mar",
		         "Apr", "May", "Jun", "Jul",
		         "Aug", "Sep", "Oct",
		         "Nov", "Dec"
		     ];
			if(readable){
				var dateArr = dateStr.split("-");
				var year = dateArr[0];
				var month = dateArr[1];
				var day = dateArr[2];
				return month + "/" + day + "/" + year;
			}else{
				var dateArr = dateStr.split("/");
				var year = dateArr[2];
				var month = monthNames[parseInt(dateArr[0]-1)];
				var day = dateArr[1];
				return day + "-" + month + "-" + year;
			}
		},
	
		getDateToday: function(){
		    var date = new Date();
		    var currentMonth = date.getMonth();
		    var currentDate = date.getDate();
		    var currentYear = date.getFullYear();
		
			return new Date(currentYear, currentMonth, currentDate);
		},
	
		showSpinner: function(request){
			if(!request.loadTemplate){
				$("#spinnerDiv").fadeIn();
				this.requestQueue.push(request);
				Core.log.debug("RQ " + this.requestQueue.length);
				//Disables all buttons during a request
				this.disableButtons();
			}
		},
		hideSpinner: function(request){
			if(!request.loadTemplate){
				this.requestQueue.pop();
				Core.log.debug("RQ " + this.requestQueue.length);
				if(this.requestQueue.length==0){
					$("#spinnerDiv").fadeOut();
					//Enables all buttons after all requests
					this.enableButtons();
				}
			}
		},
	
		enableButtons: function(){
			$(".btn").removeAttr("disabled");
		},
	
		disableButtons: function(){
			$(".btn").attr("disabled", "disabled");
		},
		
		/* Validators */
		
		validatePhoneNumber: function(phoneNumber){
			var pattern = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;
			return pattern.test(phoneNumber);
		},
		
		validateEmail: function(email) {
		    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		    return re.test(email);
		},
		
		/* CSV Exporter */
		
		exportToCSV: function(listName){
			var data = [];
			//Push the collumn names
			data.push(_.map($("th"), function(col){
				var colData = "";
				if($(col).attr("data-col-button")!=="true"){
					colData = $(col).html();			
				}
				return colData;
			}));
			//then the actual data 
			App.dataTable.$('tr', {"filter":"applied"}).each(function(){
				data.push(
					_.map($(this).children(), function(col){
						var colData = "";
						if($(col).attr("data-col-button")!=="true"){
							colData = $(col).html();			
						}
						return colData;			
					})
				);
			});
			
			var csvContent = "";
			data.forEach(function(infoArray, index){
			  dataString = infoArray.join(",");
			  csvContent += index < data.length ? dataString+ "\n" : dataString;
			});
			
			Cookie.set("csvData", csvContent);
			Cookie.set("fileName", listName+moment());
			
			var link = document.createElement("a");
			link.setAttribute("href", "download.html");
			link.setAttribute("target", "_blank");
			
			var link = $('<a href="download.html" target="_blank" id="csvDownload"></a>').appendTo("body");
			$("#csvDownload")[0].click();
			
		},

		getDay: function(number){
			var weekday = new Array(7);
			weekday[0]=  "Sun";
			weekday[1] = "Mon";
			weekday[2] = "Tue";
			weekday[3] = "Wed";
			weekday[4] = "Thu";
			weekday[5] = "Fri";
			weekday[6] = "Sat";
			return weekday[number];
		},

		getMonth: function(number){
			var month = new Array(12);
			month[0]=  "Jan";
			month[1] = "Feb";
			month[2] = "Mar";
			month[3] = "Apr";
			month[4] = "May";
			month[5] = "Jun";
			month[6] = "Jul";
			month[7] = "Aug";
			month[8] = "Sept";
			month[9] = "Oct";
			month[10] = "Nov";
			month[11] = "Dec";
			return month[number];
		},

		getMonthOnDigit: function(number){
			var month = new Array(12);
			month[0]=  "1";
			month[1] = "2";
			month[2] = "3";
			month[3] = "4";
			month[4] = "5";
			month[5] = "6";
			month[6] = "7";
			month[7] = "8";
			month[8] = "9";
			month[9] = "10";
			month[10] = "11";
			month[11] = "12";
			return month[number];
		},

		toYMD: function(date){
			var d = new Date(date);
			return d.getFullYear()+"-"+this.getMonthOnDigit(d.getMonth())+"-"+d.getDate();
		},

		renderYear: function(){
			var req = new Array();
			req.url = App.getSchoolYearListUrl;
			req.dataType = "JSON";
			var self = this;
			var temp = new Array();
			req.success = function(res){
				$.each(res, function(i, r) {
					var isYearExist = ($.inArray(r.start_sy, temp) === -1);
					if(i==0) isYearExist = true;
					if(isYearExist){
						if($.inArray(r.start_sy, temp) === -1) temp.push(r.start_sy);
						$('.top-drop select#schoolyearmain').append('<option value='+r.start_sy+'>'+r.start_sy+' - '+r.end_sy+'</option>');
					}
				});
				self.selectTermByYear();
	  		}
			Core.request(req);
		},

		renderMaxTerm: function(){
			var req = new Array();
			req.url = App.getMaxTermUrl;
			req.dataType = "JSON";
			var self = this;
			req.success = function(res){
				var tmp = '<% _.each(termList, function(r) {\
							 	for (var i = 1; i <= r.max; i++) { %>\
									<option value="<%- i %>"><%- i %></option>\
							<% 	} %>\
							<% }); %>';
				$('.top-drop select#term').append(_.template(tmp)({termList:res}));
	  		}
			Core.request(req);
			
		},

		selectTermByYear: function(){
			var year = $('.top-drop select#schoolyearmain :selected').val();
			var req = new Array();
			req.url = App.getMaxTermByYearUrl;
			req.dataType = "JSON";
			req.data = {'year':year};
			var self = this;
			req.success = function(res){
				_.each(res, function(r) {
					$('.top-drop select#term').val(r.max);	 	
				}); 
	  		}
			Core.request(req);
		},

		formatTime: function(time){
			var minute = time.slice(-2);
			var hour = time.slice(0, -2);
			return hour + ":" + minute;
		},

		removeNonNumeric: function(string){
			return string.replace(/[^0-9]+/g, '');
		}
	}
	return Core;
});