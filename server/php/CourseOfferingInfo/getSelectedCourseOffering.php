<?php
  //This php code is for displaying the selected course offering
  include("../connect.php");
    $code = $_GET["code"];
	$id = $_GET["id"];
     $select_course = mysql_query("SELECT course_code, start_sy, end_sy, term, date_of_regular_defense_deliverable, time_of_regular_defense_deliverable,
	                               location_of_regular_defense_deliverable, start_date_of_regular_defense, end_date_of_regular_defense,
								   date_of_redefense_deliverable, time_of_redefense_deliverable, location_of_redefense_deliverable,
								   start_date_of_redefense, end_date_of_redefense, date_of_outstanding_defense_deliverable, time_of_outstanding_defense_deliverable,
								   location_of_outstanding_defense_deliverable, start_date_of_outstanding_defense, end_date_of_outstanding_defense 
                                   FROM course_offering WHERE course_code='$code' AND id='$id'");
 	 $list_course = array();
      while($fetch_course = mysql_fetch_assoc($select_course)){
          $list_course[] = $fetch_course;
      }
      echo json_encode($list_course);
   
?>