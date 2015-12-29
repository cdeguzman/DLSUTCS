/**
	app.js
	This contains site-wide configuration settings
*/
define([
], function(){
	window.App = {
		
		/*External Files*/
		externalFiles:[

		],
	
		/*API URL's*/

		// Add Records API's
		addDeptUrl: '/server/php/AddRecords/AddDept.php',
		addFacAdminPositionUrl: '/server/php/AddRecords/addFacAdminPosition.php',
		addGeneralAreaUrl: '/server/php/AddRecords/AddGeneralArea.php',
		addPhaseUrl: '/server/php/AddRecords/addPhase.php',
		addRankUrl: '/server/php/AddRecords/AddRank.php',
		addSubAreaUrl: '/server/php/AddRecords/addSubArea.php',
		addThesisAreaUrl: '/server/php/AddRecords/AddThesisArea.php',
		addVerdictUrl: '/server/php/AddRecords/AddVerdict.php',
		// end Add Records API's

		// FacultyPage Records API's
		getFacultyInfoUrl: '/server/php/FacultyPage/getFacultyInfo.php',
		// end FacultyPage Records API's

		// Query Records API's
		getCourseListUrl: '/server/php/QueryRecords/getCourseList.php',
		getDeptListUrl: '/server/php/QueryRecords/getDeptList.php',
		getFacAdminPositionUrl: '/server/php/QueryRecords/getFacAdminPosition.php',
		getFacRankListUrl: '/server/php/QueryRecords/getFacRankList.php',
		getFacultyListUrl: '/server/php/QueryRecords/getFacultyList.php',
		getGenAreaListUrl: '/server/php/QueryRecords/getGenAreaList.php',
		getPhaseUrl: '/server/php/QueryRecords/getPhase.php',
		getRoomListUrl: '/server/php/QueryRecords/getRoomList.php',
		getStudentListUrl: '/server/php/QueryRecords/getStudentList.php',
		getSubAreaListUrl: '/server/php/QueryRecords/getSubAreaList.php',
		getThesisGroupListUrl: '/server/php/QueryRecords/getThesisGroupList/php',
		getThesisListurl: '/server/php/QueryRecords/getThesisList.php',
		getThesisProponentsUrl: '/server/php/QueryRecords/getThesisProponents.php',
		getVerdictUrl: '/server/php/QueryRecords/getVerdict.php',
		// end Query Records API's
		
		// StudentPage Records API's
		getStudentInfoUrl: '/server/php/StudentPage/getStudentInfo.php',
		// end StudentPage Records API's

		// ThesisInfo Records API's
		getThesisGroupInfoUrl: '/server/php/ThesisInformation/getThesisGroupInfo.php',
		// end ThesisInfo Records API's

	
		/*Initialize site wide models*/
		initializeModels: function(){
			//Initialize Application Models

		},
		/* Function for resetting per user preference*/
		resetUserPreferences: function(){

		}
	}
	return App;
});
