/**
	app.js
	This contains site-wide configuration settings
*/
define([
        './models/UserTabCategoryModel'
], function(UserTabCategoryModel){
	window.App = {
		
		/*External Files*/
		externalFiles:[

		],
	
		/*API URL's*/

		// Add Records
		addDeptUrl: '/server/php/AddRecords/AddDept.php',
		addFacAdminPositionUrl: '/server/php/AddRecords/addFacAdminPosition.php',
		addGeneralAreaUrl: '/server/php/AddRecords/AddGeneralArea.php',
		addPhaseUrl: '/server/php/AddRecords/addPhase.php',
		addRankUrl: '/server/php/AddRecords/AddRank.php',
		addSubAreaUrl: '/server/php/AddRecords/addSubArea.php',
		addThesisAreaUrl: '/server/php/AddRecords/AddThesisArea.php',
		addVerdictUrl: '/server/php/AddRecords/AddVerdict.php',
		// end Add Records

		// Delete Records
		deletePositionUrl: '/server/php/DeleteRecords/deletePosition.php',
		// end Delete Records

		// Admin Position
		deleteAdminPosUrl: '/server/php/AdminPosition/deleteAdminPos.php',
		getAdminPosByFacultyUrl: '/server/php/AdminPosition/getAdminPosByFaculty.php',
		getAdminPositionListUrl: '/server/php/AdminPosition/getAdminPositionList.php',
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
		addPanelRosterUrl: '/server/php/FacultyPage/addPanelRoster.php',
		deleteFacultyUrl: '/server/php/FacultyPage/deleteFaculty.php',
		deleteThesisAdviserUrl: '/server/php/FacultyPage/deleteThesisAdviser.php',
		getAdviserRosterUrl: '/server/php/FacultyPage/getAdviserRoster.php',
		getAllFacultyUrl: '/server/php/FacultyPage/getAllFaculty.php',
		getDepartmentUrl: '/server/php/FacultyPage/getDepartment.php',
		getFacultyAreaUrl: '/server/php/FacultyPage/getFacultyArea.php',
		getFacultyByDeptUrl: '/server/php/FacultyPage/getFacultyByDept.php',
		getFacultyClassSchedUrl: '/server/php/FacultyPage/getFacultyClassSched.php',
		getFacultyPreferredDefSchedUrl: '/server/php/FacultyPage/getFacultyPreferredDefSched.php',
		getPanelRosterUrl: '/server/php/FacultyPage/getPanelRoster.php',
		getThesisAdviserUrl: '/server/php/FacultyPage/getThesisAdviser.php',
		updateFacultyInfoUrl: '/server/php/FacultyPage/updateFacultyInfo.php',
		// end FacultyPage Records

		// Flowchart
		addCourseToFlowchartUrl: '/server/php/FacultyPage/addCourseToFlowchart.php',
		addFlowchartUrl: '/server/php/FacultyPage/addFlowchart.php',
		deleteCourseFromFlowchartUrl: '/server/php/FacultyPage/deleteCourseFromFlowchart.php',
		deleteFlowchartUrl: '/server/php/FacultyPage/deleteFlowchart.php',
		deletePrereqCourseFromFlowchartUrl: '/server/php/FacultyPage/deletePrereqCourseFromFlowchart.php',
		getCourseFromFlowchartUrl: '/server/php/FacultyPage/getCourseFromFlowchart.php',
		getFlowchartListUrl: '/server/php/FacultyPage/getFlowchartList.php',
		getPrereqFlowchartCourseUrl: '/server/php/FacultyPage/getPrereqFlowchartCourse.php',
		getSelectedFlowchartUrl: '/server/php/FacultyPage/getSelectedFlowchart.php',
		// end Flowchart

		// General Area
		addNewGenAreaUrl: '/server/php/GeneralAreaInfo/addNewGenArea.php',
		deleteGenAreaUrl: '/server/php/GeneralAreaInfo/deleteGenArea.php',
		getGeneralAreaListUrl: '/server/php/GeneralAreaInfo/getGeneralAreaList.php',
		updateGenAreaUrl: '/server/php/GeneralAreaInfo/updateGenArea.php',
		// end General Area

		// Holiday
		addNewAdminPosUrl: '/server/php/HolidayInfo/addNewAdminPos.php',
		addNewHolidayUrl: '/server/php/HolidayInfo/addNewHoliday.php',
		deleteHolidayUrl: '/server/php/HolidayInfo/deleteHoliday.php',
		getHolidayInfoUrl: '/server/php/HolidayInfo/getHolidayInfo.php',
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
		deleteRoomSchedUrl: '/server/php/RoomInfo/deleteRoomSched.php',
		getRoomListUrl: '/server/php/RoomInfo/getRoomList.php',
		getRoomScheduleUrl: '/server/php/RoomInfo/getRoomSchedule.php',
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
		// end School Year
		
		// Student
		addNewEnrolledStudentInThesisUrl: '/server/php/SchoolYearInfo/addNewEnrolledStudentInThesis.php',
		addNewStudentInfoUrl: '/server/php/SchoolYearInfo/addNewStudentInfo.php',
		deleteStudentUrl: '/server/php/SchoolYearInfo/deleteStudent.php',
		deleteStudentFromThesisEnrollmentUrl: '/server/php/SchoolYearInfo/deleteStudentFromThesisEnrollment.php',
		getEnrolledStudentsUrl: '/server/php/SchoolYearInfo/getEnrolledStudents.php',
		getStudentBySpecializationUrl: '/server/php/SchoolYearInfo/getStudentBySpecialization.php',
		getStudentClassSchedUrl: '/server/php/SchoolYearInfo/getStudentClassSched.php',
		getStudentInfoUrl: '/server/php/StudentPage/getStudentInfo.php',
		getStudentThesisTitleUrl: '/server/php/SchoolYearInfo/getStudentThesisTitle.php',
		updateStudentInfoUrl: '/server/php/SchoolYearInfo/updateStudentInfo.php',
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

		},
		/* Function for resetting per user preference*/
		resetUserPreferences: function(){

		}
	}
	return App;
});
