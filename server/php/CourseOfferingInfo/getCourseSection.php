<?php
  //This php code is for displaying the created section for every course offering
  include("../connect.php");
    $code = $_GET["code"];
    $start_sy = $_GET['start_sy'];
    $end_sy = $_GET['end_sy'];
    $term = $_GET['term'];
	
     $select_courseSection = mysql_query("SELECT * FROM course_offering_section
	                               WHERE course_code='$code' AND start_sy='$start_sy' AND end_sy='$end_sy' AND term='$term'");
 	 $list_courseSection = array();
      while($fetch_courseSection = mysql_fetch_assoc($select_courseSection)){
          $list_courseSection[] = $fetch_courseSection;
      }
      echo json_encode($list_courseSection);
   
?>