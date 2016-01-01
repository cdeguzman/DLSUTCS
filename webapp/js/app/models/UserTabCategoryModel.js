define(['jquery', 'backbone', 'underscore'], function($, Backbone){

	var UserTabCategoryModel = Backbone.Model.extend({
		
		defaults:{
			tab:[
				    {
				    	page: 'faculty',
				    	tabs: [
				    	       {id: 'userInfo', name: 'User Info', active: true},
						       {id: 'imptDate', name: 'Important Dates'},
						       {id: 'defenseSched', name: 'Defense Schedule'},
						       {id: 'verdictStatus', name: 'Verdict Status'},
						       {id: 'projectStatus', name: 'Project Status'},
						       {id: 'thesisGroups', name: 'Thesis Groups'},
						       {id: 'misc', name: 'Misc'},
						       {id: 'search', name: 'Search'},
						       {id: 'docRoute', name: 'DRS'}
					       ]
				    },
				    {
				    	page: 'student',
				    	tabs: [
				    	       {id: 'userInfo', name: 'User Info', active: true},
						       {id: 'projectStatus', name: 'Project Status'},
						       {id: 'thesisGroups', name: 'Thesis Groups'},
						       {id: 'misc', name: 'Misc'},
						       {id: 'search', name: 'Search'},
						       {id: 'docRoute', name: 'DRS'}
					       ]
				    }
				 ],
				 
			personalInfoTab: [
                  {
                	  	page: 'faculty',
				    	tabs: [
				    	       {id: 'genInfo', name: 'General Information', active: true},
						       {id: 'classSched', name: 'Class Schedule'},
						       {id: 'areasExper', name: 'Areas of Expertise'},
						       {id: 'settings', name: 'Settings'},
						       {id: 'password', name: 'Password'}
					       ]
                  }
			]
		},
		
		getTabs: function(page){
			return _.findWhere(this.get('tab'), {page: page}).tabs;
		},
		
		getInfoTabs: function(page){
			return _.findWhere(this.get('personalInfoTab'), {page: page}).tabs;
		},


	});

	return UserTabCategoryModel;

});