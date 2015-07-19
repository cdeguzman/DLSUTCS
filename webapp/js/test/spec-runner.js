(function() {
  'use strict';

  // Configure RequireJS to shim Jasmine
  require.config({
    paths: {
		"jquery": "../../vendor/jquery/jquery",
		"underscore": "../../vendor/underscore/underscore",
		"backbone": "../../vendor/backbone/backbone",
    	"jasmine": '../../vendor/jasmine/lib/jasmine-core/jasmine',
   		"jasmine-html": '../../vendor/jasmine/lib/jasmine-core/jasmine-html',
		"boot": '../../vendor/jasmine/lib/jasmine-core/boot',
    	"spec": 'spec',
		"moment": "../../vendor/moment/min/moment.min",
		"bootstrap": "../../vendor/bootstrap/dist/js/bootstrap",
		"bootstrap-dialog": "../../vendor/bootstrap3-dialog/dist/js/bootstrap-dialog",
		"bootstrap3-typeahead": "../../vendor/bootstrap3-typeahead/bootstrap3-typeahead",
		"datePicker": "../../vendor/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min",
		"dataTables": "../../vendor/datatables/media/js/jquery.dataTables",
		"dataTables-bootstrap": "../../vendor/DataTables-Plugins/integration/bootstrap/3/dataTables.bootstrap",
		"jscookie": "../../vendor/js-cookie/src/js.cookie",
		"log4javascript": "../../vendor/log4javascript/js/log4javascript"
    },
    shim: {
	  backbone: {
	    deps: ['underscore', 'jquery'],
	    exports: 'Backbone'
	  },
	  "underscore":{
		exports: '_'
	  },
	  'jasmine': {
	    exports: 'window.jasmineRequire'
	  },
	  'jasmine-html': {
	    deps: ['jasmine'],
	    exports: 'window.jasmineRequire'
	  },
	  'boot': {
	    deps: ['jasmine', 'jasmine-html'],
	    exports: 'window.jasmineRequire'
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
	  "dataTables":{
		deps: ['jquery']
	  },
	  "dataTables-bootstrap":{
		deps: ['dataTables']
	  },
	  "log4javascript":{
		exports:'Logger'
	  }
    }
  });

  // Define all of your specs here. These are RequireJS modules.
  var specs = [
    'spec/models/user_spec'
  ];

  // Load Jasmine - This will still create all of the normal Jasmine browser globals unless `boot.js` is re-written to use the
  // AMD or UMD specs. `boot.js` will do a bunch of configuration and attach it's initializers to `window.onload()`. Because
  // we are using RequireJS `window.onload()` has already been triggered so we have to manually call it again. This will
  // initialize the HTML Reporter and execute the environment.
  require(['boot'], function () {

    // Load the specs
    require(specs, function () {

      // Initialize the HTML Reporter and execute the environment (setup by `boot.js`)
      window.onload();
    });
  });
})();