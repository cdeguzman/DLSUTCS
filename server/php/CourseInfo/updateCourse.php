<?php
  //This php code is for updating a course
  include("../connect.php");
    $code = $_POST["code"];
	$name = $_POST["name"];
	$description = $_POST["description"];
	$unit = $_POST["unit"];
	$phase_code = $_POST["phase_code"];
	$department_code = $_POST["department_code"];
	$start_regular_defense_week = $_POST["start_regular_defense_week"];
	$end_regular_defense_week = $_POST["end_regular_defense_week"];
	$regular_defense_minute = $_POST["regular_defense_minute"];
	$regular_defense_applicable = isset($_POST["regular_defense_applicable"]) ? $_POST['regular_defense_applicable'] : 0;
	$start_redefense_week = $_POST["start_redefense_week"];
	$end_redefense_week = $_POST["end_redefense_week"];
	$redefense_minute = $_POST["redefense_minute"];
	$redefense_applicable = isset($_POST["redefense_applicable"]) ? $_POST['redefense_applicable'] : 0;
	$start_outstanding_defense_week = $_POST["start_outstanding_defense_week"];
	$end_outstanding_defense_week = $_POST["end_outstanding_defense_week"];
	$outstanding_defense_minute = $_POST["outstanding_defense_minute"];
	$outstanding_defense_applicable = isset($_POST["outstanding_defense_applicable"]) ? $_POST['outstanding_defense_applicable'] : 0;
	$deadline_of_deliverable_week = $_POST["deadline_of_deliverable_week"];

	
    mysql_query("UPDATE course SET name='$name', description='$description', unit='$unit', phase_code='$phase_code', 
	             department_code='$department_code', start_regular_defense_week='$start_regular_defense_week',
		         end_regular_defense_week='$end_regular_defense_week', regular_defense_minute='$regular_defense_minute', 
				 regular_defense_applicable='$regular_defense_applicable', start_redefense_week='$start_redefense_week', 
				 end_redefense_week='$end_redefense_week', redefense_minute='$redefense_minute', redefense_applicable='$redefense_applicable',
				 start_outstanding_defense_week='$start_outstanding_defense_week', end_outstanding_defense_week='$end_outstanding_defense_week', 
				 outstanding_defense_minute='$outstanding_defense_minute', outstanding_defense_applicable='$outstanding_defense_applicable', 
				 deadline_of_deliverable_week='$deadline_of_deliverable_week'
				 WHERE code='$code'");

echo json_encode(mysql_affected_rows());
?>