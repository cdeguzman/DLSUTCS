<?php
  //This php code is for displaying the selected course offering
  include("../connect.php");
    $code = $_GET["code"];
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
	
    mysql_query("UPDATE course_offering SET 
	             date_of_regular_defense_deliverable='$date_of_regular_defense_deliverable', 
	             time_of_regular_defense_deliverable='$time_of_regular_defense_deliverable',
				 location_of_regular_defense_deliverable='$location_of_regular_defense_deliverable',
				 start_date_of_regular_defense='$start_date_of_regular_defense', 
				 end_date_of_regular_defense='$end_date_of_regular_defense',
				 date_of_redefense_deliverable='$date_of_redefense_deliverable', 
				 time_of_redefense_deliverable='$time_of_redefense_deliverable',
				 location_of_redefense_deliverable='$location_of_redefense_deliverable', 
				 start_date_of_redefense='$start_date_of_redefense',
				 end_date_of_redefense='$end_date_of_redefense', 
				 date_of_outstanding_defense_deliverable='$date_of_outstanding_defense_deliverable', 
				 time_of_outstanding_defense_deliverable='$time_of_outstanding_defense_deliverable',
				 location_of_outstanding_defense_deliverable='$location_of_outstanding_defense_deliverable',
				 start_date_of_outstanding_defense='$start_date_of_outstanding_defense',
				 end_date_of_outstanding_defense='$end_date_of_outstanding_defense' 
                 WHERE course_code='$code' AND id='$id'");
 	 
?>