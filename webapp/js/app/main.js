/**
	main.js
	Entry point of the application
*/

/*Version of the app*/

var version = "v1";

//------------------------------------------//

require.config({
	
	urlArgs: "appVersion=" + version,
	
	paths: {
		"jquery": "../../vendor/jquery/dist/jquery",
		"underscore": "../../vendor/underscore/underscore",
		"backbone": "../../vendor/backbone/backbone",
		"moment": "../../vendor/moment/min/moment.min",
		"bootstrap": "../../vendor/bootstrap/dist/js/bootstrap",
		"bootstrap-dialog": "../../vendor/bootstrap3-dialog/dist/js/bootstrap-dialog",
		"bootstrap3-typeahead": "../../vendor/bootstrap3-typeahead/bootstrap3-typeahead",
		"datePicker": "../../vendor/eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker",
		"dataTables": "../../vendor/datatables/media/js/jquery.dataTables",
		"dataTables-bootstrap": "../../vendor/DataTables-Plugins/integration/bootstrap/3/dataTables.bootstrap",
		"jscookie": "../../vendor/js-cookie/src/js.cookie",
		"log4javascript": "../../vendor/log4javascript/js/log4javascript",
		"d3": "../../vendor/d3/d3",
		"nvd3": "../../vendor/nvd3-master/build/nv.d3",
		"jquery-editable": "../../vendor/jeditable/jquery.jeditable",
		"dataTables-editable": "../../vendor/datatables-editable/jquery.dataTables.editable",
		"jquery-validation": "../../vendor/jquery-validation/dist/jquery.validate",
		"dataTables-tabletools": "../../vendor/datatables-tabletools/src/dataTables.tableTools",
		"dataTables-responsive": "../../vendor/datatables-responsive/js/dataTables.responsive",
		"jquery-ajax-form": "../../vendor/jquery-ajax-form/jquery.form"
		
	},
	
	shim:{
		"backbone":{
			deps: ['underscore','jquery'],
			exports: 'Backbone'
		},
		"underscore":{
			exports: '_'
		},
		"d3":{
			exports: 'd3'
		},
		"nvd3":{
			deps: ['d3'],
			exports: 'nv'
		},
		"bootstrap":{
			deps: ['jquery'],
		},
		"bootstrap-dialog":{
			deps: ["jquery", "underscore","backbone", "bootstrap"]
		},
		"bootstrap3-typeahead":{
			deps: ['bootstrap']
		},
		"jquery-editable":{
			deps:['jquery']
		},
		"jquery-validation":{
			deps:['jquery']
		},
		"jquery-ajax-form":{
			deps:['jquery']
		},
		"dataTables":{
			deps: ['jquery']
		},
		"dataTables-tabletools":{
			deps: ['jquery', 'dataTables']
		},
		"dataTables-bootstrap":{
			deps: ['jquery','dataTables']
		},
		"dataTables-responsive":{
			deps: ['jquery','dataTables']
		},
		"dataTables-editable":{
			deps: ['jquery', 'dataTables', 'bootstrap', 'dataTables-tabletools', 'dataTables-responsive', 'dataTables-bootstrap', 'jquery-editable', "jquery-validation"]
		},
		"datePicker":{
			deps: ['jquery', 'moment', 'bootstrap']
			//exports: "$.fn.datetimepicker"
		},
		"log4javascript":{
			exports:'Logger'
		}
		
	}
});

require(["jquery","./core",'./app', './route'], function($, Core, App, ApplicationRouter){
	Core.init(function(){
		Core.log.info("-----Starting Route----------");
	    Core.router = new ApplicationRouter(); // declare a router
	    Backbone.history.start(); // start url tracking
	});
	
});