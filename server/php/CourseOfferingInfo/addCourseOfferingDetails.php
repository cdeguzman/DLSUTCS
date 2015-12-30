<?php
  //This php code is for displaying the selected course offering
  include("../connect.php");
    $code = $_POST["code"];
	$id = $_GET["id"];
	$start_sy = $_POST["start_sy"];
	$end_sy = $_POST["end_sy"];
	$term = $_POST["term"];
	$date_of_regular_defense_deliverable = $_POST["date_of_regular_defense_deliverable"];
	$time_of_regular_defense_deliverable = $_POST["time_of_regular_defense_deliverable"];
	$location_of_regular_defense_deliverable = $_POST["location_of_regular_defense_deliverable"];
	$start_date_of_regular_defense = $_POST["start_date_of_regular_defense"];
	$end_date_of_regular_defense = $_POST["end_date_of_regular_defense"];
	$date_of_redefense_deliverable = $_POST["date_of_redefense_deliverable"];
	$time_of_redefense_deliverable = $_POST["time_of_redefense_deliverable"];
	$location_of_redefense_deliverable = $_POST["location_of_redefense_deliverable"]; 
	$start_date_of_redefense = $_POST["start_date_of_redefense"];
	$end_date_of_redefense = $_POST["end_date_of_redefense"];
	$date_of_outstanding_defense_deliverable = $_POST["date_of_outstanding_defense_deliverable"];
	$time_of_outstanding_defense_deliverable = $_POST["time_of_outstanding_defense_deliverable"];
	$location_of_outstanding_defense_deliverable = $_POST["location_of_outstanding_defense_deliverable"];
	$start_date_of_outstanding_defense = $_POST["start_date_of_outstanding_defense"];
	$end_date_of_outstanding_defense = $_POST["end_date_of_outstanding_defense"];
	
    mysql_query("INSERT IINTO course_offering (course_code, start_sy, end_sy, term, date_of_regular_defense_deliverable, 
	             time_of_regular_defense_deliverable, location_of_regular_defense_deliverable, start_date_of_regular_defense,
				 end_date_of_regular_defense, date_of_redefense_deliverable, time_of_redefense_deliverable,
				 location_of_redefense_deliverable, start_date_of_redefense, end_date_of_redefense, date_of_outstanding_defense_deliverable,
				 time_of_outstanding_defense_deliverable, location_of_outstanding_defense_deliverable, start_date_of_outstanding_defense,
				 end_date_of_outstanding_defense) 
                 VALUES 
				 ('$code', '$start_sy', '$end_sy', '$term', '$date_of_regular_defense_deliverable', '$time_of_regular_defense_deliverable',
				  '$location_of_regular_defense_deliverable', '$start_date_of_regular_defense','$end_date_of_regular_defense',
				  '$date_of_redefense_deliverable','$time_of_redefense_deliverable', '$location_of_redefense_deliverable', 
				  '$start_date_of_redefense', '$end_date_of_redefense', '$date_of_outstanding_defense_deliverable', '$time_of_outstanding_defense_deliverable',
				  '$location_of_outstanding_defense_deliverable', '$start_date_of_outstanding_defense', '$end_date_of_outstanding_defense') 
                 ");
 	 
?>