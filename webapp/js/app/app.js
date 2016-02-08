/**
	app.js
	This contains site-wide configuration settings
*/
define([
        './models/UserTabCategoryModel',
        './models/UserModel'
], function(UserTabCategoryModel, UserModel){
	window.App = {
		
		/*External Files*/
		externalFiles:[

		],
	
		/*API URL's*/

		// Add Records
		addDeptUrl: '/server/php/AddRecords/AddDept.php',
		addGeneralAreaUrl: '/server/php/AddRecords/AddGeneralArea.php',
		addPhaseUrl: '/server/php/AddRecords/addPhase.php',
		addRankUrl: '/server/php/AddRecords/AddRank.php',
		addSubAreaUrl: '/server/php/AddRecords/addSubArea.php',
		addThesisAreaUrl: '/server/php/AddRecords/AddThesisArea.php',
		addVerdictUrl: '/server/php/AddRecords/AddVerdict.php',
		// end Add Records

		// Admin Position
		addFacAdminPositionUrl: '/server/php/AdminPosition/addFacAdminPosition.php',
		deleteAdminPosUrl: '/server/php/AdminPosition/deleteAdminPos.php',
		getAdminPosByFacultyUrl: '/server/php/AdminPosition/getAdminPosByFaculty.php',
		getAdminPositionListUrl: '/server/php/AdminPosition/getAdminPositionList.php',
		getAdminPositionInfoUrl: '/server/php/AdminPosition/getAdminPositionInfo.php',
		updateAdminPositionUrl: '/server/php/AdminPosition/updateAdminPosition.php',
		// end Admin Position

		// Course info
		addNewCourseUrl: '/server/php/CourseInfo/addNewCourse.php',
		deleteCourseUrl: '/server/php/CourseInfo/deleteCourse.php',
		getCourseListUrl: '/server/php/CourseInfo/getCourseList.php',
		getSelectedCourseUrl: '/server/php/CourseInfo/getSelectedCourse.php',
		updateCourseUrl: '/server/php/CourseInfo/updateCourse.php',
		// end Course Info

		// Course Offering
		addCourseOfferingDetailsUrl: '/server/php/CourseOfferingInfo/addCourseOfferingDetails.php',
		addCourseOfferingSectionUrl: '/server/php/CourseOfferingInfo/addCourseOfferingSection.php',
		deleteCourseOfferingUrl: '/server/php/CourseOfferingInfo/deleteCourseOffering.php',
		deleteCourseOfferingSectionUrl: '/server/php/CourseOfferingInfo/deleteCourseOfferingSection.php',
		getCourseSectionUrl: '/server/php/CourseOfferingInfo/getCourseSection.php',
		getSelectedCourseOfferingUrl: '/server/php/CourseOfferingInfo/getSelectedCourseOffering.php',
		updateCourseOfferingUrl: '/server/php/CourseOfferingInfo/updateCourseOffering.php',
		// end Course Offering

		// Defense Sched
 		addNewDefensePanelUrl: '/server/php/DefenseSchedInfo/addNewDefensePanel.php',
 		getAllDefensePanelUrl: '/server/php/DefenseSchedInfo/getAllDefensePanel.php',
 		getAllDefenseSchedUrl: '/server/php/DefenseSchedInfo/getAllDefenseSched.php',
 		getDefenseSchedofSelectedPanelUrl: '/server/php/DefenseSchedInfo/getDefenseSchedofSelectedPanel.php',
 		getDefenseSchedofSelectedPanelv2Url: '/server/php/DefenseSchedInfo/getDefenseSchedofSelectedPanelv2.php',
 		getRegularDefenseSchedUrl: '/server/php/DefenseSchedInfo/getRegularDefenseSched.php',
 		removeDefensePanelUrl: '/server/php/DefenseSchedInfo/removeDefensePanel.php',
 		removeDefenseSchedUrl: '/server/php/DefenseSchedInfo/removeDefenseSched.php',
		// end Defense Sched

		// FacultyPage Records
		getFacultyInfoUrl: '/server/php/FacultyPage/getFacultyInfo.php',
		addAdviserRosterUrl: '/server/php/FacultyPage/addAdviserRoster.php',
		addNewFacultyInfoUrl: '/server/php/FacultyPage/addNewFacultyInfo.php',
		addFacultyClassSchedUrl: '/server/php/FacultyPage/addFacultyClassSched.php',
		addFacultyAreaUrl: '/server/php/FacultyPage/addFacultyArea.php',
		addPanelRosterUrl: '/server/php/FacultyPage/addPanelRoster.php',
		deleteFacultyUrl: '/server/php/FacultyPage/deleteFaculty.php',
		deleteFacultySchedUrl: '/server/php/FacultyPage/deleteFacultySched.php',
		deleteFacultyAreaUrl: '/server/php/FacultyPage/deleteFacultyArea.php',
		deleteThesisAdviserUrl: '/server/php/FacultyPage/deleteThesisAdviser.php',
		getAdviserRosterUrl: '/server/php/FacultyPage/getAdviserRoster.php',
		getAllFacultyUrl: '/server/php/FacultyPage/getAllFaculty.php',
		getFacultyAreaUrl: '/server/php/FacultyPage/getFacultyArea.php',
		getFacultyByDeptUrl: '/server/php/FacultyPage/getFacultyByDept.php',
		getFacultyClassSchedUrl: '/server/php/FacultyPage/getFacultyClassSched.php',
		getFacultyPreferredDefSchedUrl: '/server/php/FacultyPage/getFacultyPreferredDefSched.php',
		getFacultyPasswordUrl: '/server/php/FacultyPage/getFacultyPassword.php',
		getPanelRosterUrl: '/server/php/FacultyPage/getPanelRoster.php',
		getThesisAdviserUrl: '/server/php/FacultyPage/getThesisAdviser.php',
		updateFacultyInfoUrl: '/server/php/FacultyPage/updateFacultyInfo.php',
		updateFacultyAreaUrl: '/server/php/FacultyPage/updateFacultyArea.php',
		updateFacultyPasswordUrl: '/server/php/FacultyPage/updateFacultyPassword.php',
		// end FacultyPage Records

		// Flowchart
		addCourseToFlowchartUrl: '/server/php/FlowchartInfo/addCourseToFlowchart.php',
		addFlowchartUrl: '/server/php/FlowchartInfo/addFlowchart.php',
		deleteCourseFromFlowchartUrl: '/server/php/FlowchartInfo/deleteCourseFromFlowchart.php',
		deleteFlowchartUrl: '/server/php/FlowchartInfo/deleteFlowchart.php',
		deletePrereqCourseFromFlowchartUrl: '/server/php/FlowchartInfo/deletePrereqCourseFromFlowchart.php',
		getCourseFromFlowchartUrl: '/server/php/FlowchartInfo/getCourseFromFlowchart.php',
		getFlowchartListUrl: '/server/php/FlowchartInfo/getFlowchartList.php',
		getPrereqFlowchartCourseUrl: '/server/php/FlowchartInfo/getPrereqFlowchartCourse.php',
		getSelectedFlowchartUrl: '/server/php/FlowchartInfo/getSelectedFlowchart.php',
		// end Flowchart

		// General Area
		addNewGenAreaUrl: '/server/php/GeneralAreaInfo/addNewGenArea.php',
		deleteGenAreaUrl: '/server/php/GeneralAreaInfo/deleteGenArea.php',
		getGeneralAreaInfoUrl: '/server/php/GeneralAreaInfo/getGenAreaInfo.php',
		updateGenAreaUrl: '/server/php/GeneralAreaInfo/updateGenArea.php',
		// end General Area

		// Holiday
		addNewHolidayUrl: '/server/php/HolidayInfo/addNewHoliday.php',
		deleteHolidayUrl: '/server/php/HolidayInfo/deleteHoliday.php',
		getHolidayInfoUrl: '/server/php/HolidayInfo/getHolidayInfo.php',
		getHolidayListByYearUrl: '/server/php/HolidayInfo/getHolidayListByYear.php',
		// end Holiday

		// Query Records
		getCourseListUrl: '/server/php/QueryRecords/getCourseList.php',
		getDeptListUrl: '/server/php/QueryRecords/getDeptList.php',
		getFacAdminPositionUrl: '/server/php/QueryRecords/getFacAdminPosition.php',
		getFacRankListUrl: '/server/php/QueryRecords/getFacRankList.php',
		getFacultyListUrl: '/server/php/QueryRecords/getFacultyList.php',
		getGenAreaListUrl: '/server/php/QueryRecords/getGenAreaList.php',
		getPhaseUrl: '/server/php/QueryRecords/getPhase.php',
		getSchoolYearUrl: '/server/php/QueryRecords/getSchoolYear.php',
		getSelectedThesisDetailsUrl: '/server/php/QueryRecords/getSelectedThesisDetails.php',
		getSpecializationUrl: '/server/php/QueryRecords/getSpecialization.php',
		getStudentListUrl: '/server/php/QueryRecords/getStudentList.php',
		getTermUrl: '/server/php/QueryRecords/getTerm.php',
		getThesisGroupListUrl: '/server/php/QueryRecords/getThesisGroupList/php',
		getThesisListurl: '/server/php/QueryRecords/getThesisList.php',
		getThesisProponentsUrl: '/server/php/QueryRecords/getThesisProponents.php',
		getVerdictUrl: '/server/php/QueryRecords/getVerdict.php',
		// end Query Records

		// Rank
		addNewRankUrl: '/server/php/RankInfo/addNewRank.php',
		deleteRankUrl: '/server/php/RankInfo/deleteRank.php',
		getRankListUrl: '/server/php/RankInfo/getRankList.php',
		getSelectedRankUrl: '/server/php/RankInfo/getSelectedRank.php',
		updateRankInfoUrl: '/server/php/RankInfo/updateRankInfo.php',
		// end Rank

		// Room
		addNewRoomUrl: '/server/php/RoomInfo/addNewRoom.php',
		addRoomScheduleUrl: '/server/php/RoomInfo/addRoomSchedule.php',
		deleteRoomUrl: '/server/php/RoomInfo/deleteRoom.php',
		deleteRoomSchedUrl: '/server/php/RoomInfo/deleteRoomSched.php',
		getRoomListUrl: '/server/php/RoomInfo/getRoomList.php',
		getRoomInfoUrl: '/server/php/RoomInfo/getRoomInfo.php',
		getRoomScheduleUrl: '/server/php/RoomInfo/getRoomSchedule.php',
		getRoomSchedListUrl: '/server/php/RoomInfo/getRoomSchedList.php',
		updateRoomInfoUrl: '/server/php/RoomInfo/updateRoomInfo.php',
		// end Room

		// Schedule
		addNewGenSchedUrl: '/server/php/ScheduleInfo/addNewGenSched.php',
		deleteGenSchedUrl: '/server/php/ScheduleInfo/deleteGenSched.php',
		getGenSchedDayUrl: '/server/php/ScheduleInfo/getGenSchedDay.php',
		getGenSchedTimeUrl: '/server/php/ScheduleInfo/getGenSchedTime.php',
		// end Schedule

		// School Year
		addNewSchoolYearUrl: '/server/php/SchoolYearInfo/addNewSchoolYear.php',
		deleteSchoolYearUrl: '/server/php/SchoolYearInfo/deleteSchoolYear.php',
		getSchoolYearListUrl: '/server/php/SchoolYearInfo/getSchoolYearList.php',
		getTermSchedPerSYUrl: '/server/php/SchoolYearInfo/getTermSchedPerSY.php',
		updateTermSchedPerSYUrl: '/server/php/SchoolYearInfo/updateTermSchedPerSY.php',
		getMaxTermUrl: '/server/php/SchoolYearInfo/getMaxTerm.php',
		getMaxTermByYearUrl: '/server/php/SchoolYearInfo/getMaxTermByYear.php',
		// end School Year
		
		// Student
		addNewEnrolledStudentInThesisUrl: '/server/php/StudentPage/addNewEnrolledStudentInThesis.php',
		addNewStudentInfoUrl: '/server/php/StudentPage/addNewStudentInfo.php',
		addStudentClassSchedUrl: '/server/php/StudentPage/addStudentClassSched.php',
		deleteStudentUrl: '/server/php/StudentPage/deleteStudent.php',
		deleteStudentSchedUrl: '/server/php/StudentPage/deleteStudentSched.php',
		deleteStudentFromThesisEnrollmentUrl: '/server/php/StudentPage/deleteStudentFromThesisEnrollment.php',
		getEnrolledStudentsUrl: '/server/php/StudentPage/getEnrolledStudents.php',
		getStudentBySpecializationUrl: '/server/php/StudentPage/getStudentBySpecialization.php',
		getStudentClassSchedUrl: '/server/php/StudentPage/getStudentClassSched.php',
		getStudentInfoUrl: '/server/php/StudentPage/getStudentInfo.php',
		getStudentThesisTitleUrl: '/server/php/StudentPage/getStudentThesisTitle.php',
		getStudentPasswordUrl: '/server/php/StudentPage/getStudentPassword.php',
		updateStudentInfoUrl: '/server/php/StudentPage/updateStudentInfo.php',
		updateStudentPasswordUrl: '/server/php/StudentPage/updateStudentPassword.php',
		// end Student

		// SubArea
		addNewSubAreaUrl: '/server/php/SubAreaInfo/addNewSubArea.php',
		deleteSubAreaUrl: '/server/php/SubAreaInfo/deleteSubArea.php',
		getSelectedSubAreaUrl: '/server/php/SubAreaInfo/getSelectedSubArea.php',
		getSubAreaListUrl: '/server/php/SubAreaInfo/getSubAreaList.php',
		updateSubAreaUrl: '/server/php/SubAreaInfo/updateSubArea.php',
		// end SubArea

		// ThesisInfo Records
		addNewThesisInfoUrl: '/server/php/ThesisInformation/addNewThesisInfo.php',
		addThesisAreaUrl: '/server/php/ThesisInformation/addThesisArea.php',
		addThesisProponentUrl: '/server/php/ThesisInformation/addThesisProponent.php',
		deleteThesisUrl: '/server/php/ThesisInformation/deleteThesis.php',
		deleteThesisAreaUrl: '/server/php/ThesisInformation/deleteThesisArea.php',
		deleteThesisProponentUrl: '/server/php/ThesisInformation/deleteThesisProponent.php',
		getThesisAreaUrl: '/server/php/ThesisInformation/getThesisArea.php',
		getThesisGroupInfoUrl: '/server/php/ThesisInformation/getThesisGroupInfo.php',
		getThesisProponentsv2Url: '/server/php/ThesisInformation/getThesisProponent.php',
		updateThesisAdviserUrl: '/server/php/ThesisInformation/updateThesisAdviser.php',
		updateThesisAreaUrl: '/server/php/ThesisInformation/updateThesisArea.php',
		updateThesisGradeUrl: '/server/php/ThesisInformation/updateThesisGrade.php',
		updateThesisInfoUrl: '/server/php/ThesisInformation/updateThesisInfo.php',
		// end ThesisInfo Records

	
		/*Initialize site wide models*/
		initializeModels: function(){
			//Initialize Application Models
			App.userTabCategoryModel = new UserTabCategoryModel();
			App.userModel = new UserModel();

		},
		/* Function for resetting per user preference*/
		resetUserPreferences: function(){

		}
	}
	return App;
});
