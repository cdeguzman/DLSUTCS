<?php
  //This code displays the defense schedule of all panel
  include("../connect.php");
    $thesis_id = $_POST["thesis_id"]; 
	$start_sy = $_POST["start_sy"]; 
	$end_sy = $_POST["end_sy"]; 
	$term = $_POST["term"];
	$course_code = $_POST["course_code"]; 
	$defense_code = $_POST["defense_code"];
    $lead_panel = $_POST["lead_panel"];
	$faculty_id = $_POST["faculty_id"]; 
	$verdict_code = $_POST["verdict_code"]; 
	$start_time = $_POST["start_time"]; 
	$end_time = $_POST["end_time"]; 
	$start_date = $_POST["start_date"]; 
	$end_date = $_POST["end_date"];
     
	mysql_query("INSERT INTO defense_panel (thesis_id, start_sy, end_sy, term, course_code, defense_code,
                                            lead_panel, faculty_id, verdict_code, start_time, end_time, start_date, end_date)
				 VALUES ('$thesis_id', '$start_sy',	'$end_sy', '$term', '$course_code', '$defense_code', '$lead_panel',
 				         '$faculty_id', '$verdict_code', '$start_time', '$end_time', '$start_date', '$end_date')");
   
?>