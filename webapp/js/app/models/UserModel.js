define(['jquery', 'backbone', 'underscore'], function($, Backbone){

	var UserModel = Backbone.Model.extend({
		
		defaults:{
			tables:[
			        {
						tableId: "importantDatesTable",
						tableData: {
							cols: ["Course", "Date", "Description"],
							rows: [
							       ["CTTHES0", "Feb 24, 2014 M 10:50", "Submission of Regular Defense Deliverables"]
							]
						}
			        },
			        {
						tableId: "defenseScheduleTable",
						tableData: {
							cols: ["Course", "Date", "Time", "Room", "Title", "Adviser", "Panelist"],
							rows: [
							       ["CTTHES0", "Feb 24, 2014 M", "10:50","CCS Consulation Room", "Virtual Design of a Low Rise Traction Elevator", "Gonzales, Emanuel A",
							        "Cordel, Macario O. (lead) <br> Punzalan, Eric <br> Uy, Roger Luiz"]
							]
						}
			        },
			        {
						tableId: "verdictStatusTable",
						tableData: {
							cols: ["Course", "Title", "Regular Defense", "Redefense", "MOTA"],
							rows: [
							       ["CTTHES0", "Virtual Design of a Low Rise Traction Elevator", "Redefense", "No Verdict Yet", ""]
							]
						}
			        },
			        {
						tableId: "thesisGroupsTable",
						tableData: {
							cols: ["Course", "Title", "Adviser"],
							rows: [
							       ["CTTHES0", "Virtual Design of a Low Rise Traction Elevator", "Gonzales, Emanuel A"]
							]
						}
			        }
			]
		},
		
		getTableData: function(tableId){
			return _.findWhere(this.get("tables"), {tableId: tableId}).tableData;
		}

	});

	return UserModel;

});