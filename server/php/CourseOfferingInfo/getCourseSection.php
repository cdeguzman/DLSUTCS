<?php
  //This php code is for displaying the created section for every course offering
  include("../connect.php");
    $code = $_GET["code"];
	$id = $_GET["id"];
	
     $select_courseSection = mysql_query("SELECT section FROM course_offering_section
	                               WHERE course_code='$code'");
 	 $list_courseSection = array();
      while($fetch_courseSection = mysql_fetch_assoc($select_courseSection)){
          $list_courseSection[] = $fetch_courseSection;
      }
      echo json_encode($list_courseSection);
   
?>