<?php
  //This php code will be used to store the important dates set for a term 
  include("../connect.php");
    $start_sy = $_POST["start_sy"];
	$end_sy = $_POST["end_sy"];
	$term = $_POST["term"];
	$schedule_code=$_POST["schedule_code"];
	$day = $_POST["spec_date"];
	$start_time = $_POST["start_time"];
	$end_time = $_POST["end_time"];
	$description = $_POST["description"];
	
	mysql_query("INSERT INTO temporary_schedule (start_sy, end_sy, term, schedule_code, day, start_time, end_time, description)
	             VALUES ('$start_sy', '$end_sy', '$term', '$schedule_code', 'day', '$start_time', '$end_time', '$description')");
				 
   
?>